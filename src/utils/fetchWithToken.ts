import getToken from "./getToken";

export default async function fetchWithToken(URI: string, request?: RequestInit | undefined) {
  const token = await getToken()

  return fetch(URI, {
    ...request,
    headers: {
      "content-type": "application/json",
      "authorization": `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .catch(error => error)
}