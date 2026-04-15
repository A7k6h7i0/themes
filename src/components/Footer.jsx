import { ArrowUpRight, Globe, Mail, Sparkles, Zap } from 'lucide-react'
import footerArt from '../assets/footer-art.svg'

const footerLinks = {
  Explore: ['Featured drops', 'New releases', 'Best sellers', 'Collections'],
  Product: ['Landing pages', 'UI kits', 'Dashboard themes', 'Brand systems'],
  Company: ['About', 'Careers', 'Partners', 'Contact'],
  Legal: ['Privacy policy', 'Terms of use', 'Licensing', 'Cookies'],
}

const socials = [
  { Icon: Mail, href: '#', label: 'Email' },
  { Icon: Globe, href: '#', label: 'Website' },
  { Icon: Sparkles, href: '#', label: 'Updates' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      <div className="glow-orb w-[420px] h-[220px] bg-violet-900/10 left-0 top-0" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
                <Zap size={18} className="text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <span className="gradient-text">Theme</span>Forge
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              A premium landing page experience for digital product marketplaces,
              built to feel sharp, modern, and immediately worth exploring.
            </p>
            <div className="mb-6 rounded-3xl overflow-hidden border border-white/8 bg-white/5 max-w-sm">
              <img
                src={footerArt}
                alt="Preview of the marketplace artwork"
                className="h-40 w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {socials.map((social) => {
                const SocialIcon = social.Icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="glass rounded-xl px-3 py-2 flex items-center gap-2 text-slate-300 hover:text-white hover:border-cyan-400/30 transition-all duration-200"
                  >
                    <SocialIcon size={14} />
                    <span className="text-xs font-medium">{social.label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1"
                    >
                      {link}
                      <ArrowUpRight size={12} className="opacity-60" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
