import React from 'react'
import { useParams } from 'react-router-dom'
import InfosCards from './infosCards'
import RatingStars from './ratingStars'
import '../assets/style/housingInfos.scss'

function HousingInfos({ locations }) {
  const { id } = useParams()
  const location = locations.find((location) => location.id === id)

  return (
    <div className="locationDetail">
      <img src={location.cover} alt={location.title} />
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
          <div className='ratingStars'>
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
