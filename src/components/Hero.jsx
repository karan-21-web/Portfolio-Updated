import { motion } from 'framer-motion'
import { HERO } from '../data/portfolio'

/* Staggered children helper */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-start overflow-visible pt-6 sm:pt-10 md:pt-[68px] px-4 sm:px-8 max-w-[1120px] mx-auto bg-bg"
    >
      {/* Dot-grid background (fixed so it persists across sections) */}
      <div className="hero-dot-grid" aria-hidden="true" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[720px]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="font-display text-[14px] font-semibold tracking-[0.15em] uppercase text-accent mb-4"
        >
          {HERO.eyebrow}
        </motion.p>

        <motion.h1
          variants={item}
          className="hero-name text-[2.2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7.5rem]"
        >
          {HERO.firstName}
          <br />
          {HERO.lastName}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-[1.1rem] font-light text-ink-2 mb-10 tracking-[0.01em]"
        >
          {HERO.tagline.split(' / ').map((part, i, arr) => (
            <span key={part}>
              {part}
              {i < arr.length - 1 && (
                <span className="text-accent mx-2 font-normal opacity-60">/</span>
              )}
            </span>
          ))}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap gap-4 sm:flex-row flex-col"
        >
          {HERO.cta.map(({ label, href, variant, download }) =>
            download ? (
              <a
                key={label}
                href={href}
                download
                className={`btn btn-${variant}`}
              >
                {label}
              </a>
            ) : (
              <a key={label} href={href} className={`btn btn-${variant}`}>
                {label}
              </a>
            )
          )}
        </motion.div>
      </motion.div>

      {/* Floating decorative square */}
      <div
        aria-hidden="true"
        className="absolute right-[-60px] bottom-20 w-[340px] h-[340px] border-2 border-border rounded-[20px] opacity-50 pointer-events-none animate-float hidden md:block"
      />
    </section>
  )
}
