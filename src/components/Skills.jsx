import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS } from '../data/portfolio'

function SkillCard({ category, chips, delay }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className="bg-surface border border-border rounded-card p-7 transition-all duration-250 hover:-translate-y-1 hover:shadow-hover"
    >
      <h3 className="font-display text-[13px] font-bold tracking-[0.1em] uppercase text-ink-3 mb-[18px]">
        {category}
      </h3>
      <div className="flex flex-wrap gap-[10px]">
        {chips.map((chip) => (
          <span key={chip} className="skill-chip">
            {chip}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section id="skills" className="bg-bg py-[100px]">
      <div className="max-w-[1120px] mx-auto px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <div className="section-label">Technical Skills</div>
          <h2 className="section-heading">What I work with.</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-8">
          {SKILLS.map(({ category, chips }, i) => (
            <SkillCard
              key={category}
              category={category}
              chips={chips}
              delay={0.08 * i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
