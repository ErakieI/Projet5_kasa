import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InfosCards from './infosCards'
import RatingStars from './ratingStars'
import locationsData from '../data/cards.json'
import Error from '../pages/error'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
function HousingInfos() {
  const { id } = useParams()
  const [location, setLocation] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: '',
    title: '',
    host: { name: '', picture: '' },
    location: ''
})
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  useEffect(() => {
    const home = locationsData.find((logement) => logement.id === id)
    if (home) {
      setLocation(home)
    } 
    
  }, [id])
  console.log("Location :", location)
  if (location.id === undefined) {
    return <Error />
  }
  const previousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? location.pictures.length - 1 : prevIndex - 1))
  }
  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === location.pictures.length - 1 ? 0 : prevIndex + 1))
  }
  return (
    <div className="locationDetail">
      <div className="photoContainer">
        <img src={location.pictures[currentPhotoIndex]} alt={location.title} />
        <div className="navButton">
          <FontAwesomeIcon icon={faChevronLeft} className="left" onClick={previousPhoto} />
          <FontAwesomeIcon icon={faChevronRight} className="right" onClick={nextPhoto} />
        </div>
        <div className="photoCounter">
          {currentPhotoIndex + 1} / {location.pictures.length}
        </div>
      </div>
      <div className="locationHosting">
        <div className="geolocTags">
          <h2>{location.title}</h2>
          <span className="geoloc">{location.location}</span>
          <div className="tags">
            <ul>
              {location.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="host">
          <div className="profil">
            <p>{location.host.name}</p>
            <img src={location.host.picture} alt="Profil de l'hébergeur" />
          </div>
          <div className="ratingStars">
            <RatingStars rating={location.rating} />
          </div>
        </div>
      </div>
      <div className="infoCards">
        <InfosCards title="Description" description={location.description} />
        <InfosCards
          title="Equipements"
          description={location.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        />
      </div>
    </div>
  )
}

export default HousingInfos