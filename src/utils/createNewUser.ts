import fetchWithToken from "./fetchWithToken"
import validSSN from "./validSSN"

interface ICreateUser {
  firstName: string
  lastName: string
  address: string
  ssn: string
}

export default async function createNewUser(formInputs: ICreateUser) {
  const { firstName, lastName, address, ssn } = formInputs

  const inputValidLength = Object.values(formInputs).some(elm => elm.length <= 1)

  const ssnValid = validSSN(ssn)

  if(inputValidLength && !ssnValid){
    throw new Error('* Los datos del forumulario deben tener mas de un caracter, y el campo SSN no cuenta con el formato correcto. (###-##-####)')
  }

  if(inputValidLength){
    throw new Error('* Los datos del forumulario deben tener mas de un caracter.')
  }

  if(!ssnValid){
    throw new Error('* El campo SSN no cuenta con el formato correcto. (###-##-####)')
  }

  return fetchWithToken('http://localhost:8081/api/members',{
    method: "POST",
    body: JSON.stringify({ firstName: firstName.trim(), lastName, address, ssn })
  })
    .then(response => {
      if(response.code === 'BadRequest'){
        throw new Error(response.message);        
      }

      return response
    })
    .catch(error => error)
}
