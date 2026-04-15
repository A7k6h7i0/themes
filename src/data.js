import {
  ArrowUpRight,
  BadgeCheck,
  Box,
  Layers3,
  MonitorSmartphone,
  MousePointer2,
  Palette,
  Sparkles,
  Star,
  Wand2,
  Zap,
} from 'lucide-react'

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { value: '240+', label: 'curated products' },
  { value: '4.9/5', label: 'customer rating' },
  { value: '12k+', label: 'happy creators' },
]

export const trustPills = ['Dark premium UI', 'Tailwind CSS', 'Framer Motion', 'Reusable components']

export const featureItems = [
  {
    icon: Palette,
    title: 'Premium visual system',
    description: 'Soft shadows, cinematic gradients, and clear hierarchy make every block feel expensive.',
  },
  {
    icon: Layers3,
    title: 'Reusable section blocks',
    description: 'A flexible layout structure that helps you launch fast without sacrificing polish.',
  },
  {
    icon: MousePointer2,
    title: 'Conversion-first flow',
    description: 'Strong CTAs, trust signals, and deliberate spacing keep the page focused on action.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive by design',
    description: 'The layout stays elegant on mobile, tablet, and desktop with no awkward collapse points.',
  },
  {
    icon: Sparkles,
    title: 'Micro-interactions',
    description: 'Hover lifts, glow states, and subtle motion create a premium feel without visual noise.',
  },
  {
    icon: BadgeCheck,
    title: 'Launch-ready details',
    description: 'Typography, contrast, and spacing are tuned to feel trustworthy at a glance.',
  },
]

export const testimonialItems = [
  {
    name: 'Avery Quinn',
    role: 'Founder, MonoCart',
    quote: 'This layout feels like the kind of marketplace I would trust instantly. The motion is tasteful and the hierarchy is spot on.',
    rating: 5,
    accent: 'from-orange-500 to-cyan-400',
  },
  {
    name: 'Mina Patel',
    role: 'Product Designer',
    quote: 'The glass panels and gradients make the page feel premium, but the spacing keeps it easy to scan. That balance is rare.',
    rating: 5,
    accent: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Jordan Lee',
    role: 'Indie Maker',
    quote: 'It looks immediate, modern, and expensive. The kind of page that turns curiosity into action before people second-guess it.',
    rating: 5,
    accent: 'from-rose-500 to-cyan-400',
  },
]

export const pricingPlans = [
  {
    name: 'Starter',
    price: '$49',
    note: 'For a first premium launch',
    description: 'Best for solo creators validating a polished product page.',
    features: ['Hero, features, testimonials', 'Responsive Tailwind sections', 'Basic motion effects', 'Lifetime updates'],
    cta: 'Start simple',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$89',
    note: 'Most chosen by teams',
    description: 'Perfect for digital product stores that need stronger conversion polish.',
    features: ['Everything in Starter', 'Pricing and CTA blocks', 'Enhanced motion system', 'Priority support'],
    cta: 'Get Pro',
    popular: true,
  },
  {
    name: 'Studio',
    price: '$149',
    note: 'For a full brand rollout',
    description: 'Ideal for founders who want a fully branded marketplace-ready experience.',
    features: ['Everything in Pro', 'Custom section variants', 'Design handoff notes', 'Extended support'],
    cta: 'Go Studio',
    popular: false,
  },
]

export const footerLinks = {
  Explore: ['Home', 'Features', 'Testimonials', 'Pricing'],
  Product: ['UI Kits', 'Landing Pages', 'Theme Packs', 'Templates'],
  Company: ['About', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Licensing', 'Cookies'],
}

export const footerBadges = [
  { value: '12k+', label: 'creators reached', icon: Wand2 },
  { value: '240+', label: 'digital products', icon: Box },
  { value: '4.9', label: 'average rating', icon: Star },
  { value: '24/7', label: 'support access', icon: Zap },
]

export const socialLinks = [
  { label: 'Dribbble', href: '#', icon: ArrowUpRight },
  { label: 'Instagram', href: '#', icon: ArrowUpRight },
  { label: 'X / Twitter', href: '#', icon: ArrowUpRight },
]
