import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'

export default function Resume() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section id="resume" className="bg-ink py-[100px]">
      <div className="max-w-[1120px] mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap md:flex-nowrap items-center justify-between gap-10 md:text-left text-center"
        >
          <div>
            <div className="font-display text-[11px] font-bold tracking-[0.18em] uppercase text-white/50 mb-4">
              Resume
            </div>
            <h2 className="font-display font-extrabold leading-[1.15] mb-4 text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Want the full picture?
            </h2>
            <p className="text-white/60 text-[1.05rem]">
              Download my resume for a complete overview of my education,
              experience, skills, and achievements.
            </p>
          </div>

          <a
            href="/KaranShakarwal_ResumeFinal.pdf"
            download
            className="inline-flex items-center gap-3 font-display text-[16px] font-semibold tracking-[0.02em] px-9 py-4 rounded-[8px] border-2 bg-accent border-accent text-white flex-shrink-0 transition-all duration-200 hover:bg-white hover:border-white hover:text-ink hover:shadow-[0_8px_28px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
          >
            <FiDownload className="text-xl" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
