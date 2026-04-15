import { motion as Motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import ctaArt from '../assets/cta-art.svg'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="relative py-24 sm:py-28 overflow-hidden">
      <div className="glow-orb w-[600px] h-[600px] bg-violet-700/18 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
      <div className="glow-orb w-[320px] h-[320px] bg-cyan-600/14 right-10 top-10" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <Motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="surface rounded-[2rem] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute inset-0 shimmer opacity-40" />

          <div className="relative z-10">
            <Motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center mx-auto mb-6 pulse-glow"
            >
              <Sparkles size={28} className="text-white" />
            </Motion.div>

            <Motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="badge mb-4 inline-block"
            >
              Ready when you are
            </Motion.span>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Ready to launch a
              <br />
              landing page people{' '}
              <span className="gradient-text">want immediately?</span>
            </h2>

            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              This version keeps the page modern, minimal, and premium without the pricing noise.
              It is built to make the product feel instantly high quality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#showcase"
                className="btn-primary text-white font-bold px-10 py-4 text-base w-full sm:w-auto"
              >
                <span>Browse the collection</span>
                <ArrowUpRight size={18} />
              </a>
              <a
                href="#highlights"
                className="btn-secondary font-semibold px-10 py-4 text-base w-full sm:w-auto"
              >
                See what is inside
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                'Product cover',
                'Editorial detail',
                'Launch-ready view',
              ].map((label, index) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/8 overflow-hidden bg-white/5 card-hover text-left"
                >
                  <div className="relative h-40">
                    {index === 0 ? (
                      <img
                        src={ctaArt}
                        alt={label}
                        className="h-full w-full object-cover object-center"
                      />
                    ) : (
                      <div
                        className={`h-full w-full ${index === 1
                          ? 'bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.75),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.55),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(15,23,42,0.55))]'
                          : 'bg-[linear-gradient(135deg,rgba(124,58,237,0.28),rgba(6,182,212,0.22)),radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_60%)]'
                        }`}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <p className="text-white font-semibold text-sm">{label}</p>
                    <p className="text-slate-400 text-xs mt-1">A visual anchor that closes the empty space.</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-500 text-xs">
              <span>Premium glass UI</span>
              <span>Responsive layout</span>
              <span>Smooth motion</span>
              <span>Clean Tailwind structure</span>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  )
}
