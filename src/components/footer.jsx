import logo from '../assets/images/Footer_LOGO_desktop.png'

function Footer() {
    return (
    <div className="footer">
        <img src={logo} alt='Kasa' className='footer-logo' />
        <span>© 2020 Kasa. All<br/> rights reserved</span>
    </div>
    )
}

export default Footer