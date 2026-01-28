import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import {
  Home,
  Collection,
  Franchise,
  Maison,
  Education,
  Event,
  Service,
  Contact,
  NotFound
} from './pages'

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/maison" element={<Maison />} />
          <Route path="/education" element={<Education />} />
          <Route path="/event" element={<Event />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
