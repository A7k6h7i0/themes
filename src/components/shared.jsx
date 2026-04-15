import { motion as Motion } from 'framer-motion'

export function Reveal({ children, className = '', delay = 0, y = 24, once = true }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Motion.div>
  )
}

export function SectionHeading({ eyebrow, title, accent, description, center = false }) {
  return (
    <div className={center ? 'mx-auto w-full text-center' : 'w-full'}>
      {eyebrow ? (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(6,182,212,0.6)]" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
        {title}{' '}
        {accent ? <span className="hero-gradient-text">{accent}</span> : null}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 text-slate-300 sm:text-lg ${center ? 'mx-auto' : ''}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function PrimaryButton({ href, children, className = '', ...props }) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      href={href}
      className={`btn-primary inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export function SecondaryButton({ href, children, className = '', ...props }) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      href={href}
      className={`btn-secondary inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-slate-100 ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export function GlassCard({ children, className = '' }) {
  return <div className={`glass-card ${className}`}>{children}</div>
}
