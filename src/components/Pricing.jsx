import { motion as Motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { pricingPlans } from '../data'
import { GlassCard, PrimaryButton, Reveal, SectionHeading } from './shared'

const pricingHighlights = [
  'Lifetime access with free updates',
  'Responsive sections for every plan',
  'Built-in motion and polished hierarchy',
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <Motion.div
          animate={{ x: [0, 24, 0], y: [0, -14, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[-10%] top-[8%] h-[22rem] w-[22rem] rounded-full bg-orange-500/10 blur-[120px]"
        />
        <Motion.div
          animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[-8%] bottom-[8%] h-[18rem] w-[18rem] rounded-full bg-cyan-500/10 blur-[120px]"
        />
      </div>

      <div className="content-shell relative">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple pricing that"
            accent="reads instantly"
            description="A cleaner card grid keeps the section scannable, with a clear hierarchy for the most popular plan."
            center
          />
        </Reveal>

        <Reveal delay={0.05} className="mt-10">
          <div className="grid gap-3 rounded-[2rem] border border-white/10 bg-white/5 p-4 sm:grid-cols-3">
            {pricingHighlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1220]/60 px-4 py-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-200">
                  <Sparkles size={14} />
                </span>
                <span className="text-sm leading-6 text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 xl:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.06}>
              <Motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <GlassCard
                  className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-6 ${
                    plan.popular
                      ? 'border-orange-300/25 bg-[linear-gradient(180deg,rgba(249,115,22,0.16),rgba(15,23,42,0.82))] shadow-[0_28px_80px_rgba(249,115,22,0.14)] xl:-translate-y-2'
                      : 'border-white/10 bg-white/5'
                  }`}
                >
                  {plan.popular ? (
                    <div className="absolute right-6 top-6 rounded-full border border-orange-300/20 bg-orange-400/15 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-100">
                      Most popular
                    </div>
                  ) : null}

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">{plan.name}</p>
                      <p className="mt-3 text-sm font-medium text-orange-100/80">{plan.note}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-slate-300">
                      Lifetime
                    </div>
                  </div>

                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-5xl font-semibold tracking-tight text-white">{plan.price}</span>
                    <span className="pb-2 text-sm text-slate-400">/ license</span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-300">{plan.description}</p>

                  <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[#0b1220]/70 p-4">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Includes</p>
                    <ul className="mt-4 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-200">
                            <Check size={12} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-orange-100/75">Best for</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {plan.popular
                        ? 'Teams that want the strongest visual hierarchy and conversion emphasis.'
                        : 'Creators who want a polished launch with a lower-friction entry point.'}
                    </p>
                  </div>

                  <PrimaryButton
                    href="#contact"
                    className={`mt-6 w-full justify-center ${
                      plan.popular ? 'shadow-[0_18px_40px_rgba(249,115,22,0.18)]' : ''
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={16} />
                  </PrimaryButton>
                </GlassCard>
              </Motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
