import Navbar from "../components/navbar";
import Banner2 from "../components/banner2";
import Footer from "../components/footer";
import QualityCards from "../components/qualityCards";
import "../assets/style/index.scss";

function About() {
  return (
    <div className="about">
      <Navbar />
      <Banner2 />
      <QualityCards />
      <Footer />
    </div>
  );
}

export default About;
