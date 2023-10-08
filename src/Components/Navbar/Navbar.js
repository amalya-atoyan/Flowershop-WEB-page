import ShopWrapper from '../../pages/ShopWrapper'
import Search from '../Search/Search'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return(
        <nav className='nav'>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/shop'>Shop</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    )
}


export default Navbar