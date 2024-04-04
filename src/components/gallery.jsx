import React, { useState, useEffect } from 'react';
import '../assets/style/gallery.scss';

function Gallery() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        // Charger les données à partir du fichier cards.json
        fetch('../data/cards.json')
            .then(response => response.json())
            .then(data => setCardsData(data))
            .catch(error => console.error('Erreur lors du chargement des données :', error));
    }, []);

    return (
        <div className="gallery">
            {cardsData.map((card, index) => (
                <div key={index} className="location">
                    <span>{card.title}</span>
                </div>
            ))}
        </div>
    );
}

export default Gallery;
