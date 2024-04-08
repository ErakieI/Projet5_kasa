import React from 'react'
import Navbar from '../components/navbar'
import Banner2 from '../components/banner2'
import Footer from '../components/footer'
import InfosCards from '../components/infosCards'
import '../assets/style/index.scss'

function About() {
  return (
    <div className="about">
      <Navbar />
      <Banner2 />
      <InfosCards
        title="Fiabilité"
        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
      />
      <InfosCards
        title="Respect"
        description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <InfosCards
        title="Service"
        description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <InfosCards
        title="Sécurité"
        description="La sécurité est la priorité de Kasa, Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
      <Footer />
    </div>
  )
}

export default About
