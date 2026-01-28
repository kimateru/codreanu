import { useTranslation } from 'react-i18next'
import { Footer } from '../components'

const Maison = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-light">{t('pages.maison')}</h1>
      </div>
      <Footer />
    </div>
  )
}

export default Maison
