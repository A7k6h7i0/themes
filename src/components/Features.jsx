import { motion as Motion } from 'framer-motion'
import agencyCard from '../assets/agency-card.svg'
import agencyStrip from '../assets/agency-strip.svg'
import { featureItems } from '../data'
import { GlassCard, Reveal, SectionHeading } from './shared'

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <Motion.div
          animate={{ x: [0, 28, 0], y: [0, -16, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[-8%] top-[10%] h-[18rem] w-[18rem] rounded-full bg-orange-500/10 blur-[120px]"
        />
        <Motion.div
          animate={{ x: [0, -20, 0], y: [0, 22, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[-8%] top-[18%] h-[22rem] w-[22rem] rounded-full bg-cyan-500/10 blur-[120px]"
        />
      </div>

      <div className="content-shell relative">
        <Reveal>
          <SectionHeading
            eyebrow="Why it converts"
            title="Every section should look and move"
            accent="a little different"
            description="Instead of repeating the same card rhythm, this section mixes a large visual anchor, staggered stat blocks, and a feature mosaic."
            center
          />
        </Reveal>

        <div className="mt-14 grid gap-6 xl:grid-cols-[1fr_1fr]">
          <Reveal>
            <Motion.div
              initial={{ opacity: 0, x: -24, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#0b1220]/80 p-4"
            >
              <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[1.8rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.16),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.14),transparent_26%),linear-gradient(145deg,rgba(15,23,42,0.95),rgba(15,23,42,0.72))] p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-orange-100/80">Editorial frame</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    A visual anchor with just enough motion to feel alive.
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                    The reference feels strong because sections breathe and change pace. This panel acts like a pause before the feature details.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      ['Elegant spacing', 'Editorial rather than crowded'],
                      ['Layered depth', 'Cards sit in their own space'],
                      ['Motion accents', 'Small drift and hover cues'],
                      ['Visual rhythm', 'Different compositions per row'],
                    ].map(([title, copy], index) => (
                      <Motion.div
                        key={title}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <p className="text-sm font-semibold text-white">{title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
                      </Motion.div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  <Motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                    className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#08101b]"
                  >
                    <img src={agencyCard} alt="Feature preview" className="h-56 w-full object-cover" />
                  </Motion.div>
                  <Motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut' }}
                    className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#08101b]"
                  >
                    <img src={agencyStrip} alt="Feature strip" className="h-48 w-full object-cover" />
                  </Motion.div>
                </div>
              </div>
            </Motion.div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {featureItems.map((feature, index) => {
              const Icon = feature.icon

              return (
                <Reveal key={feature.title} delay={index * 0.04}>
                  <Motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -8, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <GlassCard className="h-full rounded-[1.7rem] border-white/10 p-5">
                      <div className="flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(249,115,22,0.95),rgba(6,182,212,0.9))] shadow-[0_15px_40px_rgba(249,115,22,0.22)]">
                          <Icon size={22} className="text-white" />
                        </div>
                        <span className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">{feature.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
                    </GlassCard>
                  </Motion.div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
