import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const AnimatedButton = ({ to, children, className = '' }) => {
  const bgRef = useRef(null)

  const handleMouseEnter = () => {
    gsap.killTweensOf(bgRef.current)
    gsap.fromTo(
      bgRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.4, ease: 'power2.out' }
    )
  }

  const handleMouseLeave = () => {
    gsap.killTweensOf(bgRef.current)
    gsap.to(bgRef.current, {
      scaleX: 0,
      transformOrigin: 'right center',
      duration: 0.4,
      ease: 'power2.out'
    })
  }

  return (
    <Link
      to={to}
      className={`relative inline-block border border-black px-8 py-3 text-sm tracking-wide overflow-hidden group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        ref={bgRef}
        className="absolute inset-0 bg-black scale-x-0"
        style={{ transformOrigin: 'left center' }}
      />
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        {children}
      </span>
    </Link>
  )
}

export default AnimatedButton
