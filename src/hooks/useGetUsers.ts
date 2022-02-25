import { useEffect, useState } from 'react'
import fetchWithToken from '../utils/fetchWithToken'

interface IUser {
  address: string
  firstName: string
  lastName: string
  ssn: string
}

export interface IUseGetUsers {
  users: IUser[]
  error: string | undefined
}

export const useGetUsers = () => {
  const [users, setUsers] = useState<IUseGetUsers>({
    users: [],
    error: undefined,
  })

  const[state, setState] = useState(false)

  useEffect(() => {
    let idleTime = 0;
    const timeId = setInterval(timerIncrement, 1000);
    document.onmousemove = () => {
      idleTime = 0;
    }
    document.onkeydown = () => {
      idleTime = 0;
    }
    function timerIncrement() { 
      idleTime = idleTime + 1; 
      if (idleTime > 120) { 
        idleTime = 0
        setState(!state)
      } 
    }
    return () => clearInterval(timeId)
  },[state])

  useEffect(() => {
    fetchWithToken('http://localhost:8081/api/members')
      .then((result) => {
        if (result.code === 'InvalidCredentials') {
          throw new Error('Credenciales invalidas')
        }

        setUsers((prevSatate) => ({
          ...prevSatate,
          users: result,
        }))
      })
      .catch((error) => {
        setUsers({
          users: [],
          error: error.message,
        })
      })
  }, [state])

  return {
    ...users,
    setUsers,
  }
}
