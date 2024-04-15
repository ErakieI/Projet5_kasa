import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Default from '../layouts/Default'
import HousingInfos from '../components/housingInfos'
import Error from '../pages/error'
import Home from '../pages/home'
import About from '../pages/about'
import '../assets/style/main.scss'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Default />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/location/:id"
            element={
              <div className="home">
                <HousingInfos />
              </div>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
