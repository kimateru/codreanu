import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components'
import {
  Home,
  Collection,
  ProductDetail,
  Franchise,
  Maison,
  Education,
  Event,
  Service,
  Contact,
  NotFound
} from './pages'

// Layout component that conditionally shows navbar
const Layout = ({ children }) => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  
  return (
    <div className="min-h-screen">
      {/* Only show global navbar on non-home pages */}
      {!isHomePage && <Navbar hasAnimatedLogo={false} />}
      <main>{children}</main>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/:id" element={<ProductDetail />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/maison" element={<Maison />} />
          <Route path="/education" element={<Education />} />
          <Route path="/event" element={<Event />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  )
}
// home 
// collection
// event
// service
// events
export default App
