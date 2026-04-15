import { motion as Motion } from 'framer-motion'
import agencyStrip from '../assets/agency-strip.svg'
import { testimonialItems } from '../data'
import { GlassCard, Reveal, SectionHeading } from './shared'

function RatingRow({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1 text-amber-300">
      {Array.from({ length: rating }).map((_, index) => (
        <span key={index} className="text-lg">
          ★
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [featured, ...rest] = testimonialItems

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <Motion.div
          animate={{ x: [0, -20, 0], y: [0, 16, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[-10%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]"
        />
      </div>

      <div className="content-shell relative">
        <Reveal>
          <SectionHeading
            eyebrow="Social proof"
            title="A testimonial layout with"
            accent="more range"
            description="One large quote, two supporting cards, and a proof strip create a different rhythm from the feature section."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <Motion.div
              initial={{ opacity: 0, x: -22, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
            >
              <GlassCard className="relative h-full rounded-[2rem] border-white/10 p-8">
                <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-orange-100/80">
                  Featured quote
                </div>
                <div className="flex items-start gap-5">
                  <Motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-16 w-16 rounded-[1.6rem] bg-gradient-to-br from-orange-500 to-cyan-400 shadow-[0_0_40px_rgba(249,115,22,0.22)]"
                  />
                  <div className="flex-1">
                    <RatingRow rating={featured.rating} />
                    <p className="mt-6 text-2xl font-semibold leading-[1.5] text-white sm:text-3xl">“{featured.quote}”</p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white">
                        {featured.name
                          .split(' ')
                          .map((part) => part[0])
                          .join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{featured.name}</p>
                        <p className="text-sm text-slate-400">{featured.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Motion.div>
          </Reveal>

          <div className="grid gap-6">
            {rest.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.05}>
                <Motion.div
                  initial={{ opacity: 0, x: 20, y: 12 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ x: -6 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <GlassCard className="rounded-[1.7rem] border-white/10 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="max-w-lg">
                        <RatingRow rating={item.rating} />
                        <p className="mt-4 text-base leading-8 text-slate-200">“{item.quote}”</p>
                      </div>
                      <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${item.accent} shadow-[0_0_36px_rgba(249,115,22,0.18)]`} />
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-white">
                        {item.name
                          .split(' ')
                          .map((part) => part[0])
                          .join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{item.name}</p>
                        <p className="text-sm text-slate-400">{item.role}</p>
                      </div>
                    </div>
                  </GlassCard>
                </Motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.08} className="mt-8">
          <Motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1220]/80"
          >
            <img src={agencyStrip} alt="Social proof strip" className="h-52 w-full object-cover" />
          </Motion.div>
        </Reveal>
      </div>
    </section>
  )
}
