import { useTranslation } from 'react-i18next'
import { Footer } from '../components'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        {/* Header */}
        <h1 className="text-3xl lg:text-5xl font-light mb-12 lg:mb-16">
          {t('contact.title')}
        </h1>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          
          {/* Left - Google Maps */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] bg-gray-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.5474847542!2d28.8278!3d47.0245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDAxJzI4LjIiTiAyOMKwNDknNDAuMSJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="space-y-10">
              
              {/* Address */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                  {t('contact.addressLabel')}
                </h3>
                <p className="text-xl lg:text-2xl font-light text-gray-900">
                  Health & Beauty Hair®
                </p>
                <p className="text-lg text-gray-600 mt-1">
                  Str. Exemplu nr. 123
                </p>
                <p className="text-lg text-gray-600">
                  Chișinău, Moldova
                </p>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                  {t('contact.phoneLabel')}
                </h3>
                <a 
                  href="tel:+37360123456" 
                  className="text-xl lg:text-2xl font-light text-gray-900 hover:text-[#b8860b] transition-colors"
                >
                  +373 60 123 456
                </a>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                  {t('contact.emailLabel')}
                </h3>
                <a 
                  href="mailto:contact@codreanu.com" 
                  className="text-xl lg:text-2xl font-light text-gray-900 hover:text-[#b8860b] transition-colors"
                >
                  contact@codreanu.com
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact
