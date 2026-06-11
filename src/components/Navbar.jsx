import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../data/portfolio'

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close on outside click */
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => {
      if (!document.getElementById('navbar')?.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <header
      id="navbar"
      className={[
        'fixed top-0 left-0 right-0 z-[100] h-[68px]',
        'bg-[rgba(248,247,244,0.88)] backdrop-blur-md',
        'border-b transition-all duration-300',
        scrolled
          ? 'border-border shadow-[0_2px_16px_rgba(0,0,0,0.06)]'
          : 'border-transparent',
      ].join(' ')}
    >
      <div className="max-w-[1120px] mx-auto px-8 h-full flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="font-display font-extrabold text-[22px] tracking-tight text-ink"
        >
          KS<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="nav-link-animated">
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col justify-between w-[26px] h-[18px] bg-transparent border-none p-0 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={[
              'hamburger-bar',
              menuOpen ? 'translate-y-[8px] rotate-45' : '',
            ].join(' ')}
          />
          <span
            className={[
              'hamburger-bar transition-all duration-300',
              menuOpen ? 'opacity-0 scale-x-0' : '',
            ].join(' ')}
          />
          <span
            className={[
              'hamburger-bar',
              menuOpen ? '-translate-y-[8px] -rotate-45' : '',
            ].join(' ')}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="md:hidden absolute top-[68px] left-0 right-0 bg-bg border-b border-border shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="px-6 py-[14px] font-display font-semibold text-base text-ink-2 hover:text-ink hover:bg-accent-dim transition-colors"
              >
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
