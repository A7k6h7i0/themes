import { motion as Motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Globe, Layers, Monitor, Shield, Sparkles, Star, Zap } from 'lucide-react'

const features = [
  {
    icon: Layers,
    title: 'Curated by hand',
    desc: 'Only polished, production-ready themes make it into the marketplace. No filler, no clutter.',
    color: 'from-violet-500 to-cyan-400',
  },
  {
    icon: Zap,
    title: 'Fast to customize',
    desc: 'Make it yours with simple blocks, clear structure, and thoughtful defaults.',
    color: 'from-cyan-500 to-sky-400',
  },
  {
    icon: Shield,
    title: 'Trusted foundation',
    desc: 'Designed to feel high-end, readable, and confident across every breakpoint.',
    color: 'from-emerald-500 to-cyan-400',
  },
  {
    icon: Monitor,
    title: 'Responsive first',
    desc: 'Large-screen drama, mobile clarity, and layouts that reflow without losing impact.',
    color: 'from-fuchsia-500 to-violet-400',
  },
  {
    icon: Sparkles,
    title: 'Micro interactions',
    desc: 'Hover states, glow, depth, and motion that make the UI feel alive without becoming noisy.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: Star,
    title: 'Editorial spacing',
    desc: 'The layout breathes on purpose, making the whole page feel cleaner and more expensive.',
    color: 'from-rose-400 to-fuchsia-500',
  },
  {
    icon: Globe,
    title: 'Global-ready vibe',
    desc: 'A polished visual system that reads beautifully across devices, widths, and screen densities.',
    color: 'from-sky-400 to-cyan-500',
  },
  {
    icon: ArrowUpRight,
    title: 'Conversion flow',
    desc: 'Calls to action stay obvious, supportive, and visually elevated without feeling aggressive.',
    color: 'from-violet-400 to-indigo-500',
  },
]

function FeatureCard({ feature, index }) {
  const Icon = feature.icon
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="surface rounded-3xl p-6 card-hover group cursor-default"
    >
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
        <Icon size={22} className="text-white" />
      </div>

      <h3 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {feature.title}
      </h3>
      <p className="text-slate-300 text-sm leading-relaxed">
        {feature.desc}
      </p>

      <div className={`mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${feature.color} rounded-full transition-all duration-500`} />
    </Motion.div>
  )
}

export default function Features() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section id="highlights" className="relative py-24 sm:py-28 overflow-hidden">
      <div className="glow-orb w-[620px] h-[620px] bg-violet-900/12 left-1/2 -translate-x-1/2 top-0" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <Motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4 inline-flex">Why it stands out</span>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Designed to feel{' '}
            <span className="gradient-text">expensive from first glance</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            The layout keeps everything focused on hierarchy, clarity, and visual drama.
            It looks premium, but it still reads cleanly and works on every screen.
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          id="showcase"
          className="mt-16 surface rounded-3xl p-6 sm:p-8 grid lg:grid-cols-[1.08fr_0.92fr] gap-6 items-center"
        >
          <div>
            <span className="badge mb-4 inline-flex">Showcase</span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Built like a premium product, not a template dump.
            </h3>
            <p className="text-slate-300 leading-relaxed max-w-xl">
              Every surface is designed to create trust: generous spacing, deep contrast,
              subtle glow, and consistent motion that guides attention instead of fighting it.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Elegant spacing', 'High contrast', 'Fast scanning', 'Responsive polish'].map((item) => (
                <span key={item} className="glass rounded-full px-4 py-2 text-xs font-medium text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Template feel', value: 'Luxury', icon: Star },
              { label: 'Animation style', value: 'Smooth', icon: Sparkles },
              { label: 'Layout rhythm', value: 'Balanced', icon: Monitor },
              { label: 'Trust factor', value: 'High', icon: Shield },
            ].map((item) => (
              <div key={item.label} className="glass rounded-2xl p-4">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <item.icon size={16} className="text-cyan-300" />
                  </div>
                  <ArrowUpRight size={15} className="text-slate-400" />
                </div>
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="text-xl font-bold text-white mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  )
}
