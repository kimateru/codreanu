import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#f5f5f3] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12">
          {/* Company */}
          <div>
            <h4 className="font-medium text-sm mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/maison" className="text-sm text-gray-600 hover:text-black transition-colors">
                  {t('footer.aboutUs')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-medium text-sm mb-4">{t('footer.customerCare')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-black transition-colors">
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-sm text-gray-600 hover:text-black transition-colors">
                  {t('footer.disposalInstructions')}
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-sm text-gray-600 hover:text-black transition-colors">
                  {t('footer.returnPolicy')}
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-sm text-gray-600 hover:text-black transition-colors">
                  {t('footer.promotionTerms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-sm mb-1">{t('footer.newsletter.title1')}</h4>
            <h4 className="font-medium text-sm mb-4">{t('footer.newsletter.title2')}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+37360123456" className="text-sm text-gray-600 hover:text-black transition-colors">
                  +373 60 123 456
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@codreanu.com" className="text-sm text-gray-600 hover:text-black transition-colors">
                  contact@codreanu.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="/contact" className="text-sm font-medium hover:text-gray-600 transition-colors">
                {t('footer.contactUs')}
              </Link>
              <Link to="/contact" className="text-sm font-medium hover:text-gray-600 transition-colors">
                {t('footer.storeLocator')} // address
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
