import Gallery from '../components/gallery'

function Home() {
  return (
    <div className="home">
    <div className="banner">
        <div className='filter'></div>
        <div className="banner-content">
        <h1>Chez vous,<br/> partout et ailleurs</h1>
      </div>
    </div>
      <Gallery />
    </div>
  )
}

export default Home