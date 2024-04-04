import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Error404 from "../components/404"
import '../assets/style/index.scss'

function Error() {
    return (
        <div className="errorPage">
            <Navbar />
            <Error404 />
            <Footer />
        </div>
    )
}
 
export default Error