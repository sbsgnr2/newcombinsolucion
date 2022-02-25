import { useState, ChangeEvent, FormEvent, Dispatch, SetStateAction } from 'react'
import { IUseGetUsers } from '../../hooks/useGetUsers'
import createNewUser from '../../utils/createNewUser'
import './style.css'

const initialState = {
  firstName: '',
  lastName: '',
  address: '',
  ssn: '',
}

const Form = ({ setUsers }: { setUsers: Dispatch<SetStateAction<IUseGetUsers>> }) => {
  const [formInputs, setFormInputs] = useState(initialState)
  const [formError, setFormError] = useState<string | undefined>(undefined)

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e
    setFormInputs((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormError(undefined)
    createNewUser(formInputs)
      .then((result) => {
        if (result.message === 'Duplicate SSN') {
          setFormError('Campo SSN ya existe en la base de datos.')
        } else {
          setFormInputs(initialState)
          setUsers(prevState => ({
            ...prevState,
            users: [ ...prevState.users, { ...result } ]
          }))
        }
      })
      .catch((error) => setFormError(error.message))
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        onChange={handleChangeInputValue}
        type="text"
        name="firstName"
        placeholder="First name"
        value={formInputs.firstName}
      />
      <input
        onChange={handleChangeInputValue}
        type="text"
        name="lastName"
        placeholder="Last name"
        value={formInputs.lastName}
      />
      <input
        onChange={handleChangeInputValue}
        type="text"
        name="address"
        placeholder="Address"
        value={formInputs.address}
      />
      <input
        onChange={handleChangeInputValue}
        type="text"
        name="ssn"
        placeholder="SSN (###-##-####)"
        value={formInputs.ssn}
      />
      <div className="contentButtonsForm">
        <button onClick={() => setFormInputs(initialState)} type="button">
          Reset
        </button>
        <button type="submit">Save</button>
      </div>
      {formError && <p className="formError">{formError}</p>}
    </form>
  )
}

export default Form
