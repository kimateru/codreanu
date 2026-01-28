import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const navLinks = [
  { name: 'collection', path: '/collection' },
  { name: 'franchise', path: '/franchise' },
  { name: 'maison', path: '/maison' },
  { name: 'education', path: '/education' },
  { name: 'event', path: '/event' },
  { name: 'service', path: '/service' },
  { name: 'contact', path: '/contact' },
]

const Navbar = ({ hasAnimatedLogo = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Block scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left - Logo */}
            <div className="flex items-center" id="navbar-logo-container">
              {hasAnimatedLogo ? (
                <>
                  {/* Mobile/Tablet: regular visible logo */}
                  <Link 
                    to="/" 
                    className="xl:hidden text-xl font-light tracking-[0.15em] lowercase"
                  >
                    codreanu
                  </Link>
                  {/* Desktop: space reserved for animated logo */}
                  <span 
                    id="navbar-logo-target"
                    className="hidden xl:inline text-xl font-light tracking-[0.15em] lowercase opacity-0"
                    aria-hidden="true"
                  >
                    codreanu
                  </span>
                </>
              ) : (
                // Regular logo for other pages
                <Link 
                  to="/" 
                  className="text-xl font-light tracking-[0.15em] lowercase"
                >
                  codreanu
                </Link>
              )}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm tracking-wide transition-colors hover:text-gray-500 ${
                      isActive ? 'text-black font-medium' : 'text-gray-600'
                    }`
                  }
                >
                  {t(`nav.${link.name}`)}
                </NavLink>
              ))}
            </nav>

            {/* Right - Language Switcher and Burger */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <button
                className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-white transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Mobile Links */}
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link
            to="/"
            className="text-2xl tracking-wider hover:text-gray-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t('nav.home')}
          </Link>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-2xl tracking-wider transition-colors hover:text-gray-500 ${
                  isActive ? 'text-black font-medium' : 'text-gray-600'
                }`
              }
            >
              {t(`nav.${link.name}`)}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  )
}

export default Navbar
