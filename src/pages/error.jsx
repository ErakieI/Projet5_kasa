import { Link } from "react-router-dom"

function Error() {
  console.log("Page Error chargée")
  return (
    <div className="errorPage">
      <div className="error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </div>
  )
}

export default Error
