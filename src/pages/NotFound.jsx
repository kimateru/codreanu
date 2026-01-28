import { useTranslation } from 'react-i18next'
import { AnimatedButton, Footer } from '../components'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-4">
        <h1 className="text-6xl font-bold">{t('notFound.title')}</h1>
        <p className="text-xl text-gray-600">{t('notFound.description')}</p>
        <div className="mt-4">
          <AnimatedButton to="/">
            {t('notFound.cta')}
          </AnimatedButton>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
