import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ro', label: 'RO' },
  { code: 'ru', label: 'RU' }
]

const LanguageSwitcher = ({ className = '' }) => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm tracking-wide hover:text-gray-500 transition-colors"
        aria-label="Change language"
      >
        {currentLang.label}
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-sm min-w-[60px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`block w-full px-3 py-2 text-sm text-left hover:bg-gray-100 transition-colors ${
                lang.code === i18n.language ? 'font-medium' : ''
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
