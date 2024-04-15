import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function RatingStars({ rating }) {
  const stars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      const className = i <= rating ? 'full' : 'empty'
      stars.push(
        <span key={i} className={`star ${className}`}>
            <FontAwesomeIcon icon={faStar} />
        </span>
      )
    }
    return stars
  }

  return <div className="ratingStars">{stars()}</div>
}

export default RatingStars