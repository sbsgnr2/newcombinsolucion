export default function validSSN(value: string) {
  const validPattern = value.match(/[0-9]{3}-[0-9]{2}-[0-9]{4}/g)
  if (!validPattern) {
    return false
  }
  return true
}
