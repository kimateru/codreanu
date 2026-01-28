import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Footer } from '../components'
import { products } from '../data/products'

const ProductDetail = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-light mb-4">{t('productDetail.notFound')}</h1>
          <Link to="/collection" className="text-sm underline hover:no-underline">
            {t('productDetail.backToCollection')}
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/collection" className="text-sm text-gray-500 hover:text-black transition-colors">
            {t('collection.title')}
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-sm">{t(`collection.products.${product.nameKey}`)}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="bg-[#f0f0f0] aspect-square flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-gray-300" />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-light mb-4">
              {t(`collection.products.${product.nameKey}`)}
            </h1>
            <p className="text-gray-600 mb-2">{product.volume}</p>
            <p className="text-2xl mb-8">${product.price}</p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {t('productDetail.description')}
            </p>

            <button className="w-full sm:w-auto border border-black px-8 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition-colors">
              {t('productDetail.addToCart')}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProductDetail
