interface ITableRow {
  firstName: string,
  lastName: string,
  address: string,
  ssn: string
}

const TableRow = ({ firstName, lastName, address, ssn }: ITableRow) => {
  return (
    <tr>
      <td>{ firstName }</td>
      <td>{ lastName }</td>
      <td>{ address }</td>
      <td>{ ssn }</td>
    </tr>
  )
}

export default TableRow
