import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Footer, ProductCard } from '../components'
import { products } from '../data/products'

const Collection = () => {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState([0, 50])

  // Filter products based on search and price
  const filteredProducts = products.filter(product => {
    const name = t(`collection.products.${product.nameKey}`).toLowerCase()
    const matchesSearch = name.includes(searchTerm.toLowerCase())
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesSearch && matchesPrice
  })

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Page Title */}
        <h1 className="text-3xl lg:text-4xl font-light mb-8 lg:mb-12">
          {t('collection.title')}
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Sidebar - Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            {/* Search */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">
                {t('collection.search')}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t('collection.searchPlaceholder')}
                  className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-black transition-colors"
                />
                <svg 
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">
                {t('collection.priceFilter')}
              </label>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">${priceRange[0]}</span>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                  />
                  <span className="text-sm text-gray-600">${priceRange[1]}</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="0"
                    max={priceRange[1]}
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-black"
                    placeholder="Min"
                  />
                  <input
                    type="number"
                    min={priceRange[0]}
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 50])}
                    className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-black"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>

            {/* Results count */}
            <p className="text-sm text-gray-500">
              {t('collection.showing', { count: filteredProducts.length })}
            </p>
          </aside>

          {/* Right - Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* No results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">{t('collection.noResults')}</p>
              </div>
            )}
          </div>
        </div>

        {/* Need Help CTA */}
        <div className="mt-16 lg:mt-24 text-center py-12 border-t border-gray-200">
          <h3 className="text-2xl lg:text-3xl font-light mb-4">
            {t('collection.needHelp')}
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            {t('collection.needHelpDescription')}
          </p>
          <a
            href="tel:+37360123456"
            className="inline-block border border-black px-8 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition-colors"
          >
            {t('collection.callUs')}
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Collection
