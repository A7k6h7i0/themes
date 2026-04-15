import { ArrowUpRight, Mail, Sparkles } from 'lucide-react'
import agencyStrip from '../assets/agency-strip.svg'
import { footerBadges, footerLinks, socialLinks } from '../data'
import { GlassCard } from './shared'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] bottom-[-12%] h-[20rem] w-[20rem] rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="content-shell relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <a href="#" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-rose-500 to-cyan-400 text-white shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                <Sparkles size={18} />
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">
                Nova<span className="hero-gradient-text">Market</span>
              </span>
            </a>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              A premium digital product and theme marketplace landing page built for strong first impressions,
              clarity, and conversion.
            </p>

            <div className="mt-6 overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0b1220]/80">
              <img src={agencyStrip} alt="Footer showcase preview" className="h-44 w-full object-cover" />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {footerBadges.map((badge) => {
                const Icon = badge.icon

                return (
                  <GlassCard key={badge.label} className="rounded-[1.4rem] border-white/10 p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-cyan-200">
                        <Icon size={16} />
                      </span>
                      <div>
                        <p className="text-lg font-semibold text-white">{badge.value}</p>
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{badge.label}</p>
                      </div>
                    </div>
                  </GlassCard>
                )
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">{group}</h3>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
                        <ArrowUpRight size={13} className="opacity-60" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">Copyright 2026 NovaMarket. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all hover:border-cyan-300/20 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@novamarket.io"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all hover:border-cyan-300/20 hover:text-white"
            >
              <Mail size={14} />
              hello@novamarket.io
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
