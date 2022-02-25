import './style.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="App-header">
            <section>
                <Link className='link' to="/"> Home </Link>
            </section>
            <section>
                <Link className='link' to="/otherpage"> Other Page </Link>
            </section>
        </header>
    )
}

export default Header
