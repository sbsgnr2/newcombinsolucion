import Form from './components/Form'
import Table from './components/Table'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import './Home.css'
import { useGetUsers } from './hooks/useGetUsers'
import Footer from './components/Footer'

function App() {
  
  const { users, error, setUsers } = useGetUsers()

  return (
    <div className="Home">
      <Header />
      <div className="body">
        <Wrapper title="Formulario">
          <Form setUsers={setUsers} />
        </Wrapper>
        <Wrapper title="Table">
          <Table users={users} error={error} />
        </Wrapper>
      </div>
      <Footer />
    </div>
  )
}

export default App
