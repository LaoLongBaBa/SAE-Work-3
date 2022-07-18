import './Header.css'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className='header'>

            <div className='container'>
                <Link to='/'>
                    <h1 className='logo'>My WebPage</h1>
                </Link>
                <div className='header-right'>

                    <Link to='/'> <h1>Home</h1> </Link>
                    <Link to='/about'> <h1>About US</h1> </Link>
                    <Link to='/contact'> <h1>Contact</h1> </Link>

                </div>
            </div>
        </div>
    )
}

export default Header