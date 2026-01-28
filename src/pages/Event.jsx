import { useTranslation } from 'react-i18next'

const Event = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <h1 className="text-4xl font-bold">{t('pages.event')}</h1>
    </div>
  )
}

export default Event
