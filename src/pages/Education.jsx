import { useTranslation } from 'react-i18next'

const Education = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <h1 className="text-4xl font-bold">{t('pages.education')}</h1>
    </div>
  )
}

export default Education
