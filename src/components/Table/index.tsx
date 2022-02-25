import './style.css'
import TableRow from '../TableRow'
import { IUseGetUsers } from '../../hooks/useGetUsers'

const Table = ({ users, error }: IUseGetUsers) => {

  if (!users && !error) return <p>Cargando...</p>
  if (error) return <p>{error}</p>

  if (users && users.length > 0) {
    return (
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>SSN</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <TableRow
                key={user.ssn}
                firstName={user.firstName}
                lastName={user.lastName}
                address={user.address}
                ssn={user.ssn}
              />
            ))}
          </tbody>
        </table>
      </div>
    )
  } else {
    return <></>
  }
}

export default Table
