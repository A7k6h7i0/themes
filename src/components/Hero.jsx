import { motion as Motion } from 'framer-motion'
import { ArrowUpRight, Download, PlayCircle, Sparkles } from 'lucide-react'
import heroArt from '../assets/hero-art.svg'
import heroDetailA from '../assets/hero-detail-a.svg'
import heroDetailB from '../assets/hero-detail-b.svg'
import { heroStats, trustPills } from '../data'
import { PrimaryButton, SecondaryButton, Reveal } from './shared'
import { floatTransition } from '../motion'

function StatTile({ value, label }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <p className="text-3xl font-semibold tracking-tight text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <Motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ ...floatTransition, duration: 9 }}
          className="absolute left-[-12%] top-[-8%] h-[30rem] w-[30rem] rounded-full bg-orange-500/18 blur-[120px]"
        />
        <Motion.div
          animate={{ y: [0, 16, 0], x: [0, -12, 0] }}
          transition={{ ...floatTransition, duration: 11 }}
          className="absolute right-[-10%] top-[8%] h-[26rem] w-[26rem] rounded-full bg-cyan-500/14 blur-[120px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.1),transparent_30%)]" />
      </div>

      <div className="content-shell relative pb-20 sm:pb-24 lg:pb-28">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="max-w-2xl">
            <Reveal className="inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-100/90">
                <Sparkles size={12} />
                New visual direction
              </div>
            </Reveal>

            <Reveal delay={0.05} className="mt-6">
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.96] tracking-tight text-white sm:text-6xl lg:text-7xl">
                A sharper hero that feels
                <span className="hero-gradient-text"> more editorial</span>
                , more focused, and more premium.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                This version drops the dashboard collage and replaces it with a cleaner launch composition:
                a bold headline, a single statement image, and supporting proof below.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton href="#pricing" className="px-7 py-4 text-base">
                  <Download size={18} />
                  Get the template
                  <ArrowUpRight size={18} />
                </PrimaryButton>
                <SecondaryButton href="#features" className="px-7 py-4 text-base">
                  <PlayCircle size={18} />
                  See the features
                </SecondaryButton>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <StatTile key={item.label} value={item.value} label={item.label} />
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                {trustPills.map((pill) => (
                  <span key={pill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
                    {pill}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.2),transparent_55%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_35%)] blur-2xl" />

            <Motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.76))] p-4 shadow-[0_30px_100px_rgba(2,6,23,0.55)]"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#08101b]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    launch / hero preview
                  </div>
                </div>

                <div className="grid gap-4 p-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.12),transparent_28%),linear-gradient(145deg,rgba(15,23,42,0.98),rgba(15,23,42,0.78))] p-5">
                    <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                      <span className="rounded-full border border-orange-300/20 bg-orange-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-100">
                        Featured launch
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                        New look
                      </span>
                    </div>

                    <img
                      src={heroArt}
                      alt="Editorial marketplace preview"
                      className="mt-8 h-[23rem] w-full rounded-[1.5rem] object-cover"
                    />

                    <div className="mt-4 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Main showcase</p>
                        <p className="mt-1 text-lg font-semibold text-white">Clean, centered, and easier to scan</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                        <ArrowUpRight size={18} className="text-cyan-200" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
                      <img src={heroDetailA} alt="Hero detail preview one" className="h-40 w-full rounded-[1.2rem] object-cover" />
                      <p className="mt-4 text-sm font-medium text-white">Soft detail card</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Replaces the busy dashboard stack with a quieter supporting visual.
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
                      <img src={heroDetailB} alt="Hero detail preview two" className="h-40 w-full rounded-[1.2rem] object-cover" />
                      <p className="mt-4 text-sm font-medium text-white">Utility preview</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Keeps the hero balanced without competing with the headline.
                      </p>
                    </div>

                    <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(249,115,22,0.16),rgba(15,23,42,0.48))] p-4">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-orange-100/75">Launch note</p>
                      <p className="mt-3 text-xl font-semibold text-white">New image, new frame, new hierarchy.</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        The section now reads like a premium hero rather than a mini app dashboard.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, x: -18, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.9, duration: 0.45 }}
              className="glass-card absolute -left-4 top-16 hidden w-48 rounded-3xl px-4 py-3 lg:block float"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Focus shift</p>
              <p className="mt-1 text-lg font-semibold text-white">One image, less clutter</p>
              <p className="mt-1 text-sm text-slate-300">Stronger hierarchy on every screen.</p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, x: 18, y: -16 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 1.02, duration: 0.45 }}
              className="glass-card absolute -right-4 bottom-14 hidden w-48 rounded-3xl px-4 py-3 lg:block float"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Hero refresh</p>
              <p className="mt-1 text-lg font-semibold text-white">Editorial layout</p>
              <p className="mt-1 text-sm text-slate-300">A cleaner composition.</p>
            </Motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
