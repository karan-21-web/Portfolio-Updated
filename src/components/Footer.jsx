export default function Footer() {
  return (
    <footer className="bg-ink py-7">
      <div className="max-w-[1120px] mx-auto px-8 flex flex-wrap items-center justify-between gap-4">
        <a
          href="#hero"
          className="font-display font-extrabold text-[20px] tracking-tight text-white"
        >
          KS<span className="text-accent">.</span>
        </a>
        <p className="text-white/35 text-[13px]">
          © {new Date().getFullYear()} Karan Shakarwal · Built with React, Vite &amp; Tailwind
        </p>
      </div>
    </footer>
  )
}
