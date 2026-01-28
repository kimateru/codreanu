import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Footer } from '../components'

gsap.registerPlugin(ScrollTrigger)

const Event = () => {
  const { t } = useTranslation()
  const contentRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          gsap.from(section, {
            y: 50,
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

  const offerings = t('event.offerings', { returnObjects: true })

  return (
    <div className="bg-white min-h-screen" ref={contentRef}>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div ref={addToRefs} className="text-center mb-12">
          <h1 className="text-3xl lg:text-5xl font-light mb-4">
            {t('event.title')}
          </h1>
        </div>

        {/* Top Image/Video Placeholder */}
        <div ref={addToRefs} className="mb-16">
          <div className="bg-gray-200 aspect-video w-full" />
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Column */}
          <div ref={addToRefs}>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              {t('event.intro1')}
            </p>
            <p className="text-xl font-light text-[#b8860b] italic my-8">
              "{t('event.goldAccent1')}"
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              {t('event.intro2')}
            </p>
          </div>

          {/* Right Column */}
          <div ref={addToRefs}>
            <h2 className="text-2xl font-light mb-6">
              {t('event.offeringsTitle')}
            </h2>
            <ul className="space-y-4 mb-8">
              {Array.isArray(offerings) && offerings.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-[#b8860b] mt-1">✦</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Image/Video Placeholder */}
        <div ref={addToRefs} className="mb-16">
          <div className="bg-gray-200 aspect-video w-full" />
        </div>

        {/* Closing Section */}
        <div ref={addToRefs} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            {t('event.closing')}
          </p>
          <div className="border-t border-gray-200 pt-8">
            <p className="text-xl lg:text-2xl font-light text-gray-900">
               {t('event.signature')}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Event
