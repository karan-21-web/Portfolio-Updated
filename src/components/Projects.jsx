function ProjectCard({
  number,
  title,
  description,
  stack,
  github,
  live,
  image,
  delay,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className="group bg-bg border border-border rounded-[20px] p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-[6px] hover:shadow-hover hover:border-accent"
    >
      {/* IMAGE */}
      {image && (
        <div className="rounded-xl overflow-hidden border border-border h-44">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top"
          />
        </div>
      )}

      {/* Number */}
      <div className="font-display text-[13px] font-extrabold text-accent tracking-[0.06em]">
        {number}
      </div>

      {/* Body */}
      <div className="flex-1">
        <h3 className="font-display text-[1.25rem] font-bold leading-[1.3] mb-3 text-ink">
          {title}
        </h3>

        <p className="text-[0.95rem] text-ink-2 leading-[1.7] mb-5">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="px-3 py-1 bg-accent-dim text-accent rounded-full font-display text-[12px] font-bold tracking-[0.04em]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Footer link */}
      <div className="border-t border-border pt-5 flex items-center gap-5 flex-wrap">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-display text-[13px] font-bold text-ink tracking-[0.02em] transition-colors hover:text-accent"
        >
          <FiGithub className="text-base" />
          View on GitHub
          <FiArrowRight className="card-arrow text-base" />
        </a>

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-[13px] font-bold text-accent tracking-[0.02em] hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  )
}