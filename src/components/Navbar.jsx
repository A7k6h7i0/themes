import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Highlights', href: '#highlights' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Why us', href: '#highlights' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full">
        <Motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="surface border-x-0 border-t-0 rounded-none px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between w-full"
        >
          <div className="flex w-full items-center justify-between gap-4">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center pulse-glow">
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-semibold text-lg tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <span className="gradient-text">Theme</span>Forge
              </span>
            </a>

            <ul className="hidden md:flex items-center gap-7">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-3">
              <a href="#showcase" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
                View demo
              </a>
              <a href="#contact" className="btn-primary text-white text-sm font-semibold px-5 py-2.5">
                <span>Browse drops</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            <button
              className="md:hidden text-slate-400 hover:text-white transition-colors"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </Motion.nav>

        <AnimatePresence>
          {open && (
            <Motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="surface border-x-0 rounded-none px-4 sm:px-6 lg:px-8 py-5 mt-0 w-full flex flex-col gap-4"
            >
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-white font-medium transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary text-white text-sm font-semibold px-5 py-2.5 text-center">
                <span>Browse drops</span>
                <ArrowUpRight size={16} />
              </a>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
