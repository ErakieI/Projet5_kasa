import Navbar from "../components/navbar"
import Banner from "../components/banner"
import Gallery from "../components/gallery"
import Footer from "../components/footer"
import '../assets/style/index.scss'

function Home () {
    return (
        <div className="home">
            <Navbar />
            <Banner />
            <Gallery />
            <Footer />
        </div>
    )
}

export default Home