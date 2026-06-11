import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { CONTACT } from '../data/portfolio'

/* ── Individual contact info item ── */
function ContactItem({ icon, label, display, href }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 bg-surface border border-border rounded-[10px] flex items-center justify-center font-display text-[15px] font-extrabold text-ink flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-display text-[11px] tracking-[0.1em] uppercase text-ink-3 font-semibold mb-[3px]">
          {label}
        </div>
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="text-ink-2 text-[0.95rem] hover:text-accent transition-colors break-all"
        >
          {display}
        </a>
      </div>
    </div>
  )
}

/* ── Email validator ── */
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const [form,    setForm]    = useState({ name: '', email: '', message: '' })
  const [note,    setNote]    = useState({ text: '', type: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const showNote = (text, type) => {
    setNote({ text, type })
    setTimeout(() => setNote({ text: '', type: '' }), 5000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = form

    if (!name || !email || !message) return showNote('Please fill in all fields.', 'error')
    if (!isValidEmail(email)) return showNote('Please enter a valid email address.', 'error')

    setLoading(true)
    /* Replace this setTimeout with a real fetch() to Formspree/EmailJS */
    setTimeout(() => {
      setLoading(false)
      showNote(`Thanks ${name}! I'll get back to you soon. ✓`, 'success')
      setForm({ name: '', email: '', message: '' })
    }, 1200)
  }

  return (
    <section id="contact" className="bg-bg py-[100px]">
      <div className="max-w-[1120px] mx-auto px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <div className="section-label">Contact</div>
          <h2 className="section-heading">{CONTACT.heading}</h2>
          <p className="text-ink-2 text-[1.05rem] -mt-6 mb-12">{CONTACT.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-7"
          >
            {CONTACT.items.map((item) => (
              <ContactItem key={item.label} {...item} />
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface border border-border rounded-[20px] p-9 flex flex-col gap-[22px] sm:p-6"
          >
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[22px]">

              {/* Name */}
              <div className="flex flex-col gap-[7px]">
                <label htmlFor="name" className="font-display text-[13px] font-bold tracking-[0.05em] text-ink-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-[7px]">
                <label htmlFor="email" className="font-display text-[13px] font-bold tracking-[0.05em] text-ink-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-[7px]">
                <label htmlFor="message" className="font-display text-[13px] font-bold tracking-[0.05em] text-ink-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary btn-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending…' : 'Send Message'}
              </button>

              {note.text && (
                <p
                  className="text-center text-[14px] min-h-[20px]"
                  style={{ color: note.type === 'error' ? '#e03131' : '#1a9a52' }}
                >
                  {note.text}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
