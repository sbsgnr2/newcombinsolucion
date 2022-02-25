export default async function getToken() {
  const credentials = {
    username: "sarah",
    password: "connor"
  }
  return fetch('http://localhost:8081/auth',{
    headers: {
      "content-type": "application/json"
    },
    method: 'POST',
    body: JSON.stringify(credentials)
  })
    .then(response => response.json())
    .then(result =>  {
      const { token } = result

      return token
    })
    .catch(err => err)
}