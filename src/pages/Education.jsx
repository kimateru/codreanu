import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Footer } from '../components'

gsap.registerPlugin(ScrollTrigger)

const Education = () => {
  const { t } = useTranslation()
  const contentRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each section on scroll
      sectionsRef.current.forEach((section) => {
        if (section) {
          gsap.from(section, {
            y: 60,
            opacity: 0,
            duration: 1,
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

  const features = t('education.features', { returnObjects: true })

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Image - Half Screen */}
      <div className="h-[50vh] lg:h-[60vh] bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-light text-white tracking-wider">
            {t('education.title')}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
      >
        {/* Intro */}
        <div ref={addToRefs} className="mb-12">
          <p className="text-xl lg:text-2xl leading-relaxed text-gray-800">
            {t('education.intro')}
          </p>
        </div>

        {/* Courses Description */}
        <div ref={addToRefs} className="mb-12">
          <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
            {t('education.coursesDescription')}
          </p>
        </div>

        {/* ULTRA VIP Experience */}
        <div ref={addToRefs} className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-light mb-8">
            {t('education.ultraVipTitle')}
          </h2>
          <ul className="space-y-4">
            {Array.isArray(features) && features.map((feature, index) => (
              <li 
                key={index}
                ref={addToRefs}
                className="flex items-start gap-3 text-gray-700"
              >
                <span className="text-[#b8860b] mt-1">✦</span>
                <span className="text-lg leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Closing Statement */}
        <div ref={addToRefs} className="mt-16 mb-12">
          <p className="text-lg lg:text-xl leading-relaxed text-gray-800 font-medium">
            {t('education.closingStatement')}
          </p>
        </div>

        {/* Signature */}
        <div ref={addToRefs} className="border-t border-gray-200 pt-12">
          <p className="text-xl lg:text-2xl font-light text-gray-900 italic">
             {t('education.signature')}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Education
