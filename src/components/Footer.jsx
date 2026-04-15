import { ArrowUpRight, Globe, Mail, Sparkles, Zap } from 'lucide-react'

const footerLinks = {
  Explore: ['Featured drops', 'New releases', 'Best sellers', 'Collections'],
  Product: ['Landing pages', 'UI kits', 'Dashboard themes', 'Brand systems'],
  Company: ['About', 'Careers', 'Partners', 'Contact'],
  Legal: ['Privacy policy', 'Terms of use', 'Licensing', 'Cookies'],
}

const socials = [
  { Icon: Mail, href: 'mailto:hello@themeforge.market', label: 'Email' },
  { Icon: Globe, href: '#', label: 'Website' },
  { Icon: Sparkles, href: '#highlights', label: 'Updates' },
]

const footerStats = [
  { value: '18', label: 'curated drops' },
  { value: '4', label: 'content pillars' },
  { value: '1', label: 'clear voice' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      <div className="glow-orb w-[520px] h-[260px] bg-violet-900/12 left-0 top-0" />
      <div className="glow-orb w-[340px] h-[340px] bg-cyan-600/10 right-0 top-24" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 xl:gap-14 items-start">
          <div className="space-y-8">
            <a href="#" className="flex items-center gap-2.5 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center pulse-glow">
                <Zap size={18} className="text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <span className="gradient-text">Theme</span>Forge
              </span>
            </a>

            <div className="max-w-2xl">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                A premium landing page experience for digital product marketplaces, built to feel sharp,
                modern, and worth exploring from the first scroll to the last click.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
              {footerStats.map((item) => (
                <div key={item.label} className="glass rounded-2xl px-4 py-4">
                  <p className="text-white font-bold text-2xl">{item.value}</p>
                  <p className="text-slate-400 text-xs mt-1 uppercase tracking-[0.16em]">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[1.75rem] border border-white/8 bg-white/5 p-5 sm:p-6 max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-200/70 mb-3">Footer note</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Built to close the page with confidence.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xl">
                Removing the image keeps the footer cleaner, so the closing section now leans on spacing,
                stronger type, and a clearer hierarchy instead of another visual block.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#showcase"
                  className="btn-primary text-white text-sm font-semibold px-5 py-2.5"
                >
                  <span>Review showcase</span>
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="mailto:hello@themeforge.market"
                  className="btn-secondary text-sm font-semibold px-5 py-2.5"
                >
                  <Mail size={15} />
                  Say hello
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {socials.map((social) => {
                const SocialIcon = social.Icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="glass rounded-xl px-3.5 py-2.5 flex items-center gap-2 text-slate-300 hover:text-white hover:border-cyan-400/30 transition-all duration-200"
                  >
                    <SocialIcon size={14} />
                    <span className="text-xs font-medium">{social.label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-[0.16em]">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1.5 group"
                      >
                        <span>{link}</span>
                        <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            Copyright 2026 ThemeForge. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-500 text-xs">Live and ready</span>
          </div>
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            Crafted with
            <span className="text-violet-400 mx-1">care</span>
            for modern creators
          </div>
        </div>
      </div>
    </footer>
  )
}
