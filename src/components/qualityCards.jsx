import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import '../assets/style/index.scss'
import '../assets/style/qualityCards.scss'

function qualityCards() {
    return (
        <div className='qualityCards'>
            <div className="quality">
                <h2>Fiabilité</h2>
                <FontAwesomeIcon icon={faAngleUp} />
            </div>
            <div className="quality">
                <h2>Respect</h2>
                <FontAwesomeIcon icon={faAngleUp} />
            </div>
            <div className="quality">
                <h2>Service</h2>
                <FontAwesomeIcon icon={faAngleUp} />
            </div>
            <div className="quality">
                <h2>Sécurité</h2>
                <FontAwesomeIcon icon={faAngleUp} />
            </div>
        </div>
    );
}

export default qualityCards;
