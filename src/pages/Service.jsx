import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Footer } from '../components'

gsap.registerPlugin(ScrollTrigger)

const Service = () => {
  const { t } = useTranslation()
  const contentRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          gsap.from(section, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          })
        }
      })
    }, contentRef)

    return () => ctx.revert()
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <div className="bg-white min-h-screen" ref={contentRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        {/* Header */}
        <div ref={addToRefs} className="mb-16">
          <h1 className="text-3xl lg:text-5xl font-light mb-3">
            {t('service.title')}
          </h1>
        </div>

        {/* Intro */}
        <div ref={addToRefs} className="mb-16">
          <p className="text-xl lg:text-2xl leading-relaxed text-gray-700">
            {t('service.intro')}
          </p>
        </div>

        {/* Service 1 */}
        <div ref={addToRefs} className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-light mb-4 text-gray-900">
            {t('service.service1.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('service.service1.description')}
          </p>
        </div>

        {/* Divider */}
        <div ref={addToRefs} className="border-t border-gray-200 my-12" />

        {/* Service 2 */}
        <div ref={addToRefs} className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-light mb-4 text-gray-900">
            {t('service.service2.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('service.service2.description')}
          </p>
        </div>

        {/* Center Image */}
        <div ref={addToRefs} className="my-16 lg:my-24">
          <div className="bg-gray-200 aspect-[16/10] w-full" />
        </div>

        {/* Service 3 */}
        <div ref={addToRefs} className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-light mb-4 text-gray-900">
            {t('service.service3.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('service.service3.description')}
          </p>
        </div>

        {/* Divider */}
        <div ref={addToRefs} className="border-t border-gray-200 my-12" />

        {/* Service 4 */}
        <div ref={addToRefs} className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-light mb-4 text-gray-900">
            {t('service.service4.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('service.service4.description')}
          </p>
        </div>

        {/* Signature */}
        <div ref={addToRefs} className="border-t border-gray-200 pt-12">
          <p className="text-xl lg:text-2xl font-light text-gray-900 italic">
             {t('service.signature')}
          </p>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Service
