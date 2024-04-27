import { Link } from 'react-router-dom'
import cardsData from '../data/cards.json'

function Gallery() {
 
  return (
    <div className="gallery">
      {cardsData.map((card, index) => (
        <Link to={`/location/${card.id}`} key={index} className="housing">
          <img src={card.cover} alt={card.title} />
          <span>{card.title}</span>
        </Link>
      ))}
    </div>
  )
}

export default Gallery