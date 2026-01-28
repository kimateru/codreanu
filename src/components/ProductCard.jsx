import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ProductCard = ({ product }) => {
  const { t } = useTranslation()

  return (
    <Link 
      to={`/collection/${product.id}`}
      className="group block"
    >
      <div className="relative bg-[#f0f0f0] aspect-square overflow-hidden">
        {/* Placeholder for product image */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gray-300" />
        </div>
        
        {/* View More Button - appears from below on hover */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button className="w-full py-3 bg-white text-sm tracking-wide text-center border-t border-gray-200 hover:bg-gray-50 transition-colors">
            {t('collection.viewMore')}
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="mt-4">
        <h3 className="text-sm font-medium mb-2">
          {t(`collection.products.${product.nameKey}`)}
        </h3>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>{product.volume}</span>
          <span>${product.price}</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
