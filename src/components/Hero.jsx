import { motion as Motion } from 'framer-motion'
import { ArrowUpRight, Layers, Monitor, Shield, Sparkles, Star, Zap } from 'lucide-react'
import heroArt from '../assets/hero-art.svg'
import heroDetailA from '../assets/hero-detail-a.svg'
import heroDetailB from '../assets/hero-detail-b.svg'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      <div className="glow-orb w-[560px] h-[560px] bg-violet-600/20 -top-48 -left-32" />
      <div className="glow-orb w-[420px] h-[420px] bg-cyan-500/16 top-1/4 right-[-8%]" />
      <div className="glow-orb w-[320px] h-[320px] bg-indigo-700/18 bottom-0 left-1/3" />

      <div className="absolute inset-0 grid-pattern opacity-35" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-10 xl:gap-14 items-center">
          <div className="text-center lg:text-left">
            <Motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="badge">
                <Sparkles size={11} />
                New season drop
              </span>
            </Motion.div>

            <Motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.03] tracking-tight mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Modern theme drops
              <br />
              that feel <span className="gradient-text">premium instantly</span>
            </Motion.h1>

            <Motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              A polished marketplace experience for digital products, UI kits, and landing page themes.
              Clean hierarchy, rich gradients, soft glass surfaces, and motion that feels expensive.
            </Motion.p>

            <Motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#showcase"
                className="btn-primary text-white font-semibold px-8 py-3.5 text-base w-full sm:w-auto"
              >
                <span>Explore collection</span>
                <ArrowUpRight size={18} />
              </a>
              <button className="btn-secondary font-semibold px-8 py-3.5 text-base w-full sm:w-auto">
                <span className="inline-flex items-center gap-2">
                  <Zap size={16} />
                  Watch preview
                </span>
              </button>
            </Motion.div>

            <Motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-10 flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              {[
                { value: '250+', label: 'Curated templates' },
                { value: '12k', label: 'Happy builders' },
                { value: '4.9/5', label: 'Average rating' },
              ].map((item) => (
                <div key={item.label} className="glass rounded-2xl px-4 py-3 min-w-[140px] text-left">
                  <p className="text-white font-bold text-lg">{item.value}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{item.label}</p>
                </div>
              ))}
            </Motion.div>
          </div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-3xl mx-auto lg:mx-0 float"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-400/10 blur-2xl" />

              <div className="surface rounded-[2rem] p-1 pulse-glow relative">
                <div className="glass rounded-[1.7rem] overflow-hidden">
                  <div className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b border-white/8">
                    <div className="w-3 h-3 rounded-full bg-red-500/75" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/75" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/75" />
                    <div className="ml-3 flex-1 glass rounded-lg px-3 py-1 text-xs text-slate-400">
                      themeforge.market / featured
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 bg-slate-950/65">
                    <div className="flex items-center justify-between mb-5">
                      <div className="space-y-2">
                        <div className="h-3 w-36 rounded-full bg-gradient-to-r from-violet-500/70 to-cyan-400/70 shimmer" />
                        <div className="h-2 w-56 rounded-full bg-white/10 shimmer" />
                      </div>
                      <div className="btn-primary px-4 py-1.5 text-xs text-white font-semibold">
                        <span>Launch</span>
                        <ArrowUpRight size={14} />
                      </div>
                    </div>

                    <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-4 mb-4">
                      <div className="rounded-3xl border border-white/8 bg-gradient-to-br from-violet-600/20 via-slate-900 to-cyan-500/10 p-4 sm:p-5">
                        <div className="flex items-start justify-between gap-4 mb-5">
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-200/70 mb-2">Featured release</p>
                            <h3 className="text-2xl font-bold leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                              Neon Commerce UI
                            </h3>
                          </div>
                          <div className="w-11 h-11 rounded-2xl bg-white/6 border border-white/10 flex items-center justify-center">
                            <Sparkles size={18} className="text-cyan-300" />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-4">
                              <div className="relative rounded-2xl overflow-hidden border border-white/8 bg-slate-950/60 min-h-[320px]">
                                <img
                                  src={heroArt}
                                  alt="Premium product showcase"
                                  className="absolute inset-0 h-full w-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                              <div className="flex items-end justify-between gap-4">
                                <div>
                                  <p className="text-xs uppercase tracking-[0.18em] text-white/70 mb-1">Drop 01</p>
                                  <p className="text-lg font-semibold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                    Product art that sells the story
                                  </p>
                                </div>
                                <div className="hidden sm:flex h-12 w-12 rounded-2xl bg-white/10 border border-white/15 items-center justify-center backdrop-blur">
                                  <ArrowUpRight size={18} className="text-white" />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="grid gap-4">
                            <div className="rounded-2xl border border-white/8 bg-white/5 p-4 card-hover overflow-hidden">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-2xl bg-violet-500/20 border border-violet-400/20 flex items-center justify-center">
                                  <Layers size={18} className="text-violet-300" />
                                </div>
                                <div>
                                  <p className="font-semibold text-white">Layered sections</p>
                                  <p className="text-xs text-slate-400">Built for quick customization</p>
                                </div>
                              </div>
                              <div className="relative rounded-xl overflow-hidden border border-white/8">
                                <img
                                  src={heroDetailA}
                                  alt="Product preview tile"
                                  className="h-36 w-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                              </div>
                            </div>

                            <div className="rounded-3xl border border-white/8 bg-white/5 p-4 card-hover">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400/20 flex items-center justify-center">
                                  <Monitor size={18} className="text-cyan-300" />
                                </div>
                                <div>
                                  <p className="font-semibold text-white">Responsive polish</p>
                                  <p className="text-xs text-slate-400">Looks sharp on every screen</p>
                                </div>
                              </div>
                              <div className="h-24 rounded-2xl bg-gradient-to-br from-cyan-500/16 via-white/5 to-violet-500/10 border border-white/8 overflow-hidden">
                                <div className="grid grid-cols-3 h-full">
                                  {['A', 'B', 'C'].map((letter, index) => (
                                    <div key={letter} className={`flex items-center justify-center text-white/70 text-sm font-bold border-r border-white/5 ${index === 2 ? 'border-r-0' : ''}`}>
                                      {letter}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="rounded-3xl border border-white/8 bg-white/5 p-4 card-hover">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/20 flex items-center justify-center">
                              <Zap size={18} className="text-emerald-300" />
                            </div>
                            <div>
                              <p className="font-semibold text-white">Fast to customize</p>
                              <p className="text-xs text-slate-400">Simple blocks and clear hierarchy</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-2xl border border-white/8 p-3 bg-gradient-to-br from-violet-500/25 to-transparent">
                              <div className="h-16 rounded-xl bg-white/5 mb-2 overflow-hidden">
                                <img
                                  src={heroDetailB}
                                  alt="Hero layout"
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <p className="text-xs text-slate-200 font-medium">Hero</p>
                            </div>
                            <div className="rounded-2xl border border-white/8 p-3 bg-gradient-to-br from-cyan-500/25 to-transparent">
                              <div className="h-16 rounded-xl bg-white/5 mb-2 overflow-hidden">
                                <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.85),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.7),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(15,23,42,0.55))]" />
                              </div>
                              <p className="text-xs text-slate-200 font-medium">Cards</p>
                            </div>
                            <div className="rounded-2xl border border-white/8 p-3 bg-gradient-to-br from-emerald-500/20 to-transparent">
                              <div className="h-16 rounded-xl bg-white/5 mb-2 overflow-hidden">
                                <div className="h-full w-full bg-[linear-gradient(135deg,rgba(124,58,237,0.28),rgba(6,182,212,0.28)),radial-gradient(circle_at_center,rgba(255,255,255,0.22),transparent_60%)]" />
                              </div>
                              <p className="text-xs text-slate-200 font-medium">Footer</p>
                            </div>
                            <div className="rounded-2xl border border-white/8 p-3 bg-gradient-to-br from-amber-500/20 to-transparent">
                              <div className="h-16 rounded-xl bg-white/5 mb-2 overflow-hidden">
                                <div className="h-full w-full bg-[linear-gradient(135deg,rgba(245,158,11,0.28),rgba(124,58,237,0.28))]" />
                              </div>
                              <p className="text-xs text-slate-200 font-medium">CTA</p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-3xl border border-white/8 bg-white/5 p-4 card-hover">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400/20 flex items-center justify-center">
                              <Monitor size={18} className="text-cyan-300" />
                            </div>
                            <div>
                              <p className="font-semibold text-white">Responsive polish</p>
                              <p className="text-xs text-slate-400">Looks sharp on every screen</p>
                            </div>
                          </div>
                          <div className="h-24 rounded-2xl bg-gradient-to-br from-cyan-500/16 via-white/5 to-violet-500/10 border border-white/8 overflow-hidden">
                            <div className="grid grid-cols-3 h-full">
                              {['A', 'B', 'C'].map((letter, index) => (
                                <div key={letter} className={`flex items-center justify-center text-white/70 text-sm font-bold border-r border-white/5 ${index === 2 ? 'border-r-0' : ''}`}>
                                  {letter}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { label: 'Curated drops', value: '18 live', icon: Zap },
                        { label: 'Design tokens', value: '100%', icon: Shield },
                        { label: 'Attention score', value: 'A+', icon: Star },
                      ].map((item) => (
                        <div key={item.label} className="glass rounded-2xl p-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                            <item.icon size={16} className="text-cyan-300" />
                          </div>
                          <div>
                            <p className="text-white font-semibold text-sm">{item.value}</p>
                            <p className="text-slate-400 text-xs">{item.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute -left-3 sm:-left-8 top-1/4 glass rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-xl"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-[10px] font-bold tracking-wide">NEW</div>
                <div>
                  <p className="text-xs font-semibold text-white">Fresh drop</p>
                  <p className="text-[10px] text-slate-400">Updated this week</p>
                </div>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -right-2 sm:-right-6 bottom-16 glass rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-xl"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="star fill-current" />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Top rated</p>
                  <p className="text-[10px] text-slate-400">4.9 average score</p>
                </div>
              </Motion.div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}
