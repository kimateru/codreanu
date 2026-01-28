import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AnimatedLogo = () => {
  const logoRef = useRef(null)
  const placeholderRef = useRef(null)

  useEffect(() => {
    const logo = logoRef.current
    const placeholder = placeholderRef.current
    
    if (!logo || !placeholder) return

    const updatePositions = () => {
      // Get the placeholder position (this is where logo starts)
      const placeholderRect = placeholder.getBoundingClientRect()
      const startX = placeholderRect.left
      const startY = placeholderRect.top + window.scrollY
      
      // End position - same X, just moved to navbar height
      const endY = 18
      
      return { startX, startY, endY }
    }

    let positions = updatePositions()
    
    // Create the scroll animation
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(logo, {
        position: 'fixed',
        top: positions.startY,
        left: positions.startX,
        fontSize: 80,
        zIndex: 45
      })

      // Create timeline for smooth single animation
      const tl = gsap.timeline({ paused: true })
      
      tl.to(logo, {
        top: positions.endY,
        fontSize: 20,
        duration: 0.5,
        ease: 'power2.inOut'
      })

      // Create ScrollTrigger to play/reverse the timeline
      ScrollTrigger.create({
        trigger: placeholder,
        start: 'top top+=64', // Account for navbar height
        end: '+=100',
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse()
      })
    })

    // Handle resize
    const handleResize = () => {
      positions = updatePositions()
      gsap.set(logo, {
        left: positions.startX
      })
      ScrollTrigger.refresh()
    }
    
    window.addEventListener('resize', handleResize)

    return () => {
      ctx.revert()
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {/* Placeholder - marks initial logo position within container */}
      <div 
        ref={placeholderRef} 
        className="h-28 mt-6"
        aria-hidden="true"
      />
      
      {/* Animated logo */}
      <Link
        to="/"
        ref={logoRef}
        className="font-light tracking-[0.2em] lowercase text-black whitespace-nowrap"
        style={{ willChange: 'top, font-size' }}
      >
        codreanu
      </Link>
    </>
  )
}

export default AnimatedLogo
