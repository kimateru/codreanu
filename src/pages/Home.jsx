import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Footer, AnimatedButton, AnimatedLogo, Navbar } from '../components'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const { t } = useTranslation()
  const heroTextRef = useRef(null)
  const heroImageRef = useRef(null)
  const productsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.from(heroTextRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        stagger: 0.15,
        ease: 'power3.out'
      })

      // Hero image animation
      gsap.from(heroImageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: 'power3.out'
      })

      // Products section animation with ScrollTrigger
      gsap.from(productsRef.current.children, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: productsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <Navbar hasAnimatedLogo={true} />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Logo - large desktop only (1280px+) */}
        <div className="hidden xl:block">
          <AnimatedLogo />
        </div>

        {/* Hero Section */}
        <section className="py-8 xl:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1" ref={heroTextRef}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
                {t('home.hero.title1')}<br />
                {t('home.hero.title2')}<br />
                {t('home.hero.title3')}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {t('home.hero.subtitle')}
              </p>
              <p className="text-sm text-gray-600 mb-8 max-w-md">
                {t('home.hero.description')}
              </p>
              <AnimatedButton to="/collection">
                {t('home.hero.cta')}
              </AnimatedButton>
            </div>

            {/* Right Image Placeholder */}
            <div className="order-1 lg:order-2" ref={heroImageRef}>
              <div className="bg-black aspect-square w-full max-w-md mx-auto lg:ml-auto" />
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center" ref={productsRef}>
            {/* Product Image 1 */}
            <div className="bg-black aspect-square lg:aspect-3/4 w-full max-w-md lg:max-w-xs mx-auto lg:mx-0" />

            {/* Product Image 2 */}
            <div className="bg-black aspect-square lg:aspect-3/4 w-full max-w-md lg:max-w-xs mx-auto lg:mx-0" />

            {/* Text Content */}
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl lg:text-3xl font-light leading-tight mb-6 lg:mb-4">
                {t('home.products.title1')}<br />
                {t('home.products.title2')}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {t('home.products.description1')}
              </p>
              <p className="text-sm text-gray-600 mb-8 lg:mb-6 max-w-md">
                {t('home.products.description2')}
              </p>
              <AnimatedButton to="/collection">
                {t('home.products.cta')}
              </AnimatedButton>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
