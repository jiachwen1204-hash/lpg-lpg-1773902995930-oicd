import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  eyebrow: 'Transform Your Future',
  heading: 'Start Your Intelligent Transformation Today',
  subtext: 'Partner with WEQ to unlock the power of AI-driven automation, predictive analytics, and scalable intelligence that propels your business forward.',
  cta: { label: 'Start Transforming', href: '#contact' },
  secondary: { label: 'Explore Our Solutions', href: '#services' },
}

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#070e17]">
      {/* Ambient glow orbs */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#1a3a5c]/30 blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#c9a84c]/8 blur-[120px]" />
      </div>

      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top border accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
        <AnimateIn animation="fade-up" duration={900}>
          <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#c9a84c] mb-6">
            <span className="w-8 h-px bg-[#c9a84c]/50" />
            {CONTENT.eyebrow}
            <span className="w-8 h-px bg-[#c9a84c]/50" />
          </p>
        </AnimateIn>

        <AnimateIn animation="fade-up" delay={100} duration={900}>
          <h2 className="font-heading font-bold text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-white leading-[1.1] tracking-[-0.02em] mb-6">
            Ready to{' '}
            <span className="relative inline-block">
              <span className="text-[#c9a84c]">Transform</span>
              <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />
            </span>
            {' '}Your Business?
          </h2>
        </AnimateIn>

        <AnimateIn animation="fade-up" delay={200} duration={900}>
          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            {CONTENT.subtext}
          </p>
        </AnimateIn>

        <AnimateIn animation="fade-up" delay={300} duration={900}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#c9a84c]/20 blur-xl rounded-md scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <a
                href={CONTENT.cta.href}
                className="relative inline-flex items-center gap-3 px-8 py-4 font-body font-semibold bg-[#1a3a5c] text-white rounded-md border border-[#1a3a5c] hover:bg-[#1a3a5c]/90 hover:border-[#c9a84c]/40 transition-all duration-300 active:scale-[0.98]"
              >
                <span>{CONTENT.cta.label}</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <a
              href={CONTENT.secondary.href}
              className="px-8 py-4 font-body font-medium text-white/70 border border-white/15 rounded-md hover:border-white/30 hover:text-white transition-all duration-300"
            >
              {CONTENT.secondary.label}
            </a>
          </div>
        </AnimateIn>

        <AnimateIn animation="fade-up" delay={400} duration={900}>
          <p className="mt-10 text-sm text-white/40 font-light">
            Join leading enterprises already leveraging WEQ's intelligent platform
          </p>
        </AnimateIn>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1a3a5c]/60 to-transparent" />
    </section>
  )
}