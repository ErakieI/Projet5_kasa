import { Link, useLocation } from 'react-router-dom'
import '../assets/style/navbar.scss'
import logo from '../assets/images/LOGO_desktop.png'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Kasa" className="lmj-logo" />
      </div>
      <div className="links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Accueil
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          A propos
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
