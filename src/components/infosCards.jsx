import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function InfosCards({ title, description }) {
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!descriptionVisible);
  };

  return (
    <div className="qualityCards">
      <div className={`quality ${descriptionVisible ? 'rotate180' : ''}`}>
        <h2>{title}</h2>
        <FontAwesomeIcon
          icon={faAngleDown}
          className="arrow"
          onClick={toggleDescription}
        />
      </div>
      <div className={`description ${descriptionVisible ? 'visible' : ''}`}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default InfosCards;
