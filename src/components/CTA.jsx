import { motion as Motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import agencyHero from '../assets/agency-hero.svg'
import { PrimaryButton, SecondaryButton, Reveal } from './shared'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <Motion.div
          animate={{ x: [0, 22, 0], y: [0, -18, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/18 blur-[120px]"
        />
        <div className="absolute right-0 top-10 h-[20rem] w-[20rem] rounded-full bg-cyan-400/12 blur-[120px]" />
      </div>

      <div className="content-shell relative">
        <Reveal>
          <Motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(249,115,22,0.18)_45%,rgba(6,182,212,0.12))] shadow-[0_30px_90px_rgba(2,6,23,0.4)]"
          >
            <div className="grid lg:grid-cols-[1fr_1fr]">
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-100/80">
                  <Sparkles size={12} />
                  Final push
                </div>

                <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Make your marketplace feel
                  <span className="hero-gradient-text"> premium enough to buy now</span>.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                  This closing section now uses a softer split layout, so the ending feels more cinematic and less like a standard CTA block.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <PrimaryButton href="#pricing" className="px-7 py-4 text-base">
                    Start with Pro
                    <ArrowUpRight size={18} />
                  </PrimaryButton>
                  <SecondaryButton href="#features" className="px-7 py-4 text-base">
                    Revisit features
                  </SecondaryButton>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {['Instant download', 'Lifetime access', 'Free updates'].map((item, index) => (
                    <Motion.div
                      key={item}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"
                    >
                      {item}
                    </Motion.div>
                  ))}
                </div>
              </div>

              <div className="relative border-t border-white/10 lg:border-l lg:border-t-0">
                <Motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 opacity-70"
                >
                  <img src={agencyHero} alt="Final CTA preview" className="h-full w-full object-cover" />
                </Motion.div>
                <div className="relative z-10 grid h-full gap-4 p-8 sm:p-12 lg:p-16">
                  <div className="rounded-[1.8rem] border border-white/10 bg-[#0b1220]/80 p-5">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-orange-100/75">What you get</p>
                    <div className="mt-4 space-y-3">
                      {[
                        'Hero mockup with layered motion',
                        'Mosaic features and testimonial layout',
                        'Split pricing and cinematic CTA ending',
                      ].map((item, index) => (
                        <Motion.div
                          key={item}
                          initial={{ opacity: 0, x: 12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.45, delay: index * 0.05 }}
                          className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                        >
                          <span className="text-sm text-slate-200">{item}</span>
                          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(6,182,212,0.85)]" />
                        </Motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      ['Conversion first', 'Clear action and trust cues'],
                      ['Motion rich', 'Hover states and reveal layers'],
                      ['Premium feel', 'Glass cards and glowing accents'],
                      ['Responsive', 'Smooth on every screen size'],
                    ].map(([title, copy]) => (
                      <div key={title} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-semibold text-white">{title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>
        </Reveal>
      </div>
    </section>
  )
}
