import { useTranslation } from 'react-i18next'
import { AnimatedButton } from '../components'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white">
      <h1 className="text-6xl font-bold">{t('notFound.title')}</h1>
      <p className="text-xl text-gray-600">{t('notFound.description')}</p>
      <div className="mt-4">
        <AnimatedButton to="/">
          {t('notFound.cta')}
        </AnimatedButton>
      </div>
    </div>
  )
}

export default NotFound
