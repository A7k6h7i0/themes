import { useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { ArrowUpRight, Menu, Sparkles, X } from 'lucide-react'
import { navLinks } from '../data'
import { PrimaryButton } from './shared'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="content-shell pt-4">
        <Motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card flex w-full items-center justify-between rounded-3xl px-4 py-3 shadow-[0_20px_60px_rgba(2,6,23,0.3)]"
        >
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-rose-500 to-cyan-400 text-white shadow-[0_0_30px_rgba(249,115,22,0.35)]">
              <Sparkles size={18} />
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">
              Nova<span className="hero-gradient-text">Market</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#pricing" className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
              View pricing
            </a>
            <PrimaryButton href="#contact" className="px-5 py-3">
              Get it now
              <ArrowUpRight size={16} />
            </PrimaryButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-100 md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </Motion.div>

        <AnimatePresence>
          {open ? (
            <Motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.25 }}
              className="glass-card mt-3 overflow-hidden rounded-3xl px-4 py-4 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <PrimaryButton href="#contact" className="justify-center">
                  Get it now
                  <ArrowUpRight size={16} />
                </PrimaryButton>
              </div>
            </Motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  )
}
