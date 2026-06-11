import { useEffect, useRef } from 'react'

/**
 * useScrollReveal
 * Returns a ref to attach to a container. Every child element
 * matching `selector` (default '.reveal') will fade+slide up
 * when it enters the viewport.
 *
 * @param {object} options
 * @param {string}  options.selector   - CSS selector for animated children
 * @param {number}  options.threshold  - IntersectionObserver threshold
 * @param {string}  options.rootMargin - IntersectionObserver rootMargin
 */
export function useScrollReveal({
  selector   = '.reveal',
  threshold  = 0.12,
  rootMargin = '0px 0px -40px 0px',
} = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll(selector)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [selector, threshold, rootMargin])

  return containerRef
}

/**
 * useNavbarScroll
 * Returns `scrolled` boolean — true when page has scrolled > 20px.
 */
export function useNavbarScroll(threshold = 20) {
  const isScrolledRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > threshold
      if (shouldBeScrolled !== isScrolledRef.current) {
        isScrolledRef.current = shouldBeScrolled
        const navbar = document.getElementById('navbar')
        if (navbar) {
          navbar.classList.toggle('nav-scrolled', shouldBeScrolled)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])
}
