```jsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

const BRAND_NAME = 'WEQ'
const CTA = { label: 'Start Transforming', href: '#contact' }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-[var(--shadow-sm)]'
          : 'bg-transparent',
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <img 
            src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773902994346-ai-artificial-intelligence-improves-emai-600nw-2655586379.webp" 
            alt="WEQ logo" 
            className="h-10 w-auto object-contain" 
          />
          <span className="font-heading font-bold text-2xl tracking-tight text-[var(--color-heading)] group-hover:text-[var(--color-brand-500)] transition-colors duration-300">
            {BRAND_NAME}
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-5 py-2.5 text-sm font-body font-normal text-[var(--color-body)] hover:text-[var(--color-heading)] rounded-md hover:bg-[var(--color-muted-bg)] transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute bottom-2 left-5 right-5 h-px bg-[var(--color-brand-600)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={CTA.href}
            className="relative px-6 py-3 text-sm font-body font-semibold text-white bg-[var(--color-brand-500)] rounded-md hover:bg-[var(--color-brand-600)] shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] transition-all duration-300"
          >
            {CTA.label}
          </a>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden p-2.5 rounded-md text-[var(--color-body)] hover:text-[var(--color-heading)] hover:bg-[var(--color-muted-bg)] transition-colors duration-200"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-b border-[var(--color-border)] animate-fade-up">
          <ul className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3.5 text-sm font-body text-[var(--color-body)] hover:text-[var(--color-heading)] rounded-md hover:bg-[var(--color-muted-bg)] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3 mt-1 border-t border-[var(--color-border)]">
              <a
                href={CTA.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-3.5 text-sm font-body font-semibold text-center text-white bg-[var(--color-brand-500)] rounded-md hover:bg-[var(--color-brand-600)] transition-colors duration-200"
              >
                {CTA.label}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
```