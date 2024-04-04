import { Link } from 'react-router-dom'
import '../assets/style/navbar.scss'
import logo from '../assets/images/LOGO_desktop.png'
 
function Navbar() {
    return (
        <nav className="navbar">
            <div className='logo'>
            <img src={logo} alt='Kasa' className='lmj-logo' />
            </div>
            <div className='links'>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
            </div>
        </nav>
    )
}

export default Navbar