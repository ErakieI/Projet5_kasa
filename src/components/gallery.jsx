import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../assets/style/gallery.scss'

function Gallery() {
  const [cardsData, setCardsData] = useState([])

  useEffect(() => {
    fetch('/cards.json')
      .then((response) => response.json())
      .then((data) => setCardsData(data))
      .catch((error) => console.error('Erreur lors du chargement des données :', error))
  }, [])

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
