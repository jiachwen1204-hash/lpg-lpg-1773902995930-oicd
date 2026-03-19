import Link from 'next/link'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'

const BRAND = {
  name: 'WEQ',
  tagline: 'Transform Your Business with Intelligent AI Solutions',
  email: 'jiachwen99@gmail.com',
  address: '854 TAMPINES STREET 82\n12-227',
  description: 'We are an innovative AI Technology Platform company that empowers businesses to transform the way they operate through intelligent automation and data-driven solutions.',
}

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  { label: 'AI Consulting', href: '#ai-consulting' },
  { label: 'Intelligent Automation', href: '#automation' },
  { label: 'Data Analytics', href: '#analytics' },
  { label: 'Cloud Integration', href: '#cloud' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

const certifications = [
  'ISO 27001 Certified',
  'SOC 2 Compliant',
  'GDPR Ready',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[var(--surface-900)] border-t border-[var(--border-subtle)]">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-500)] to-transparent" />
      
      {/* Subtle glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--surface-700)]/20 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block group">
              <img 
                src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773902994346-ai-artificial-intelligence-improves-emai-600nw-2655586379.webp" 
                alt="WEQ logo" 
                className="h-12 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-500" 
              />
            </Link>
            <p className="mt-6 text-base text-[var(--text-secondary)] leading-relaxed max-w-md font-body font-light">
              {BRAND.description}
            </p>
            <p className="mt-4 text-sm text-[var(--brand-500)] font-heading italic tracking-wide">
              {BRAND.tagline}
            </p>
            
            {/* Contact info */}
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--brand-500)] transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-md bg-[var(--surface-700)]/50 flex items-center justify-center group-hover:bg-[var(--brand-500)]/20 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[var(--brand-500)]/70" />
                </div>
                {BRAND.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                <div className="w-8 h-8 rounded-md bg-[var(--surface-700)]/50 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[var(--brand-500)]/70" />
                </div>
                <span className="whitespace-pre-line">{BRAND.address}</span>
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h3 className="font-heading text-[var(--text-primary)] text-sm font-semibold tracking-wider uppercase mb-6 relative">
                Services
                <span className="absolute -bottom-2 left-0 w-8 h-px bg-[var(--brand-500)]/60" />
              </h3>
              <ul className="space-y-3 mt-4">
                {services.map(l => (
                  <li key={l.href}>
                    <a 
                      href={l.href} 
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 font-body inline-flex items-center gap-1 group"
                    >
                      {l.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-[var(--brand-500)]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-heading text-[var(--text-primary)] text-sm font-semibold tracking-wider uppercase mb-6 relative">
                Company
                <span className="absolute -bottom-2 left-0 w-8 h-px bg-[var(--brand-500)]/60" />
              </h3>
              <ul className="space-y-3 mt-4">
                {links.map(l => (
                  <li key={l.href}>
                    <a 
                      href={l.href} 
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 font-body inline-flex items-center gap-1 group"
                    >
                      {l.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-[var(--brand-500)]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-heading text-[var(--text-primary)] text-sm font-semibold tracking-wider uppercase mb-6 relative">
                Legal
                <span className="absolute -bottom-2 left-0 w-8 h-px bg-[var(--brand-500)]/60" />
              </h3>
              <ul className="space-y-3 mt-4">
                {legal.map(l => (
                  <li key={l.href}>
                    <Link 
                      href={l.href} 
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 font-body"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications row */}
        <div className="pt-8 border-t border-[var(--border-subtle)] mb-12">
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-xs text-[var(--text-secondary)] tracking-wider uppercase font-body">Certifications</span>
            <div className="flex flex-wrap gap-4">
              {certifications.map(cert => (
                <div 
                  key={cert}
                  className="px-4 py-1.5 rounded-sm border border-[var(--surface-700)]/50 bg-[var(--surface-700)]/20 text-xs text-[var(--text-secondary)] font-body"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--border-subtle)]">
          <div className="text-sm text-[var(--text-secondary)] font-body">
            © {year} {BRAND.name}. All rights reserved.
          </div>
          <div className="text-sm text-[var(--text-muted)] italic font-heading">
            Authored with precision. Delivered with excellence.
          </div>
        </div>
      </div>
    </footer>
  )
}