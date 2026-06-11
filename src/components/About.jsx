import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ABOUT } from '../data/portfolio'
import photo from '../assets/photo.jpg'

function RevealBlock({ children, delay = 0 }) {
  const ref  = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="bg-surface py-[100px]">
      <div className="max-w-[1120px] mx-auto px-8">

        <RevealBlock>
          <div className="section-label">About Me</div>
        </RevealBlock>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-[60px] items-start">

          {/* Avatar */}
          <RevealBlock delay={0.1}>
            <div className="flex md:flex-col flex-row items-center md:items-center gap-5 md:sticky md:top-[calc(68px+32px)]">
              <img
                src={photo}
                alt="Karan Shakarwal"
                className="w-[80px] h-[80px] md:w-[160px] md:h-[160px] rounded-[20px] object-cover object-top block shadow-card"
              />
              <span className="bg-accent-dim text-accent font-display text-[12px] font-bold tracking-[0.08em] px-[14px] py-[6px] rounded-full whitespace-nowrap">
                {ABOUT.badge}
              </span>
            </div>
          </RevealBlock>

          {/* Bio */}
          <RevealBlock delay={0.2}>
            <h2 className="section-heading whitespace-pre-line">
              {ABOUT.heading}
            </h2>

            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-ink-2 mb-[18px] text-[1.05rem]">
                {p}
              </p>
            ))}

            {/* Meta */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-border mt-2">
              {ABOUT.meta.map(({ label, value, type }) => (
                <div key={label} className="flex flex-col gap-[2px] text-[14px]">
                  <span className="font-display text-[11px] tracking-[0.12em] uppercase text-ink-3 font-semibold">
                    {label}
                  </span>
                  {type === 'available' ? (
                    <span className="available-dot inline-flex items-center text-green font-medium">
                      {value}
                    </span>
                  ) : (
                    <span>{value}</span>
                  )}
                </div>
              ))}
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>
  )
}
