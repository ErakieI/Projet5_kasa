import logo from '../assets/images/Footer_LOGO_desktop.png'
import '../assets/style/footer.scss'

function Footer() {
    return (
    <div className="footer">
        <img src={logo} alt='Kasa' className='footer-logo' />
        <span>© 2020 Kasa. All rights reserved</span>
    </div>
    )
}

export default Footer