'use client'

import Navbar from '@/components/ui/Navbar'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="bg-surface min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-surface-900 via-surface-800 to-surface-700">
        {/* Background depth layers */}
        <div className="absolute inset-0">
          {/* Primary ambient glow */}
          <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-brand-500/20 blur-[200px] pointer-events-none" />
          {/* Secondary glow */}
          <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-brand-500/5 blur-[150px] pointer-events-none" />
          {/* Dot grid texture */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          {/* Noise texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundRepeat: 'repeat',
              backgroundSize: '256px 256px',
            }}
          />
        </div>

        {/* Thin border divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border/50 to-transparent" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 py-24 lg:py-32">
          <div className="max-w-4xl">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-3 px-4 py-2 rounded-md border border-brand-500/20 bg-brand-500/5 mb-8"
              style={{ animation: 'fade-up 0.9s ease-out forwards' } as React.CSSProperties}
            >
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-sm font-body text-brand-500 tracking-wide">AI-Powered Enterprise Solutions</span>
            </div>

            {/* Main headline */}
            <h1 
              className="font-heading text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-content-primary mb-8"
              style={{ animation: 'fade-up 0.9s ease-out 0.1s both' } as React.CSSProperties}
            >
              Transform Your Business with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 via-brand-300 to-brand-500 bg-[length:200%_auto]">
                Intelligent AI Solutions
              </span>
            </h1>

            {/* Subheadline */}
            <p 
              className="font-body text-lg lg:text-xl text-content-secondary font-light leading-relaxed max-w-2xl mb-10"
              style={{ animation: 'fade-up 0.9s ease-out 0.2s both' } as React.CSSProperties}
            >
              We are an innovative AI Technology Platform company that empowers businesses to transform the way they operate through intelligent automation and data-driven solutions.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap gap-4"
              style={{ animation: 'fade-up 0.9s ease-out 0.3s both' } as React.CSSProperties}
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-primary-500/30 blur-xl rounded-md scale-110" />
                <a 
                  href="#contact" 
                  className="relative inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-body font-semibold rounded-md hover:bg-primary-600 transition-all duration-300"
                >
                  Start Transforming
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/80 font-body font-medium rounded-md hover:border-white/40 hover:text-white transition-all duration-300"
              >
                Explore Our Solutions
              </a>
            </div>

            {/* Trust indicators */}
            <div 
              className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10"
              style={{ animation: 'fade-up 0.9s ease-out 0.4s both' } as React.CSSProperties}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-heading font-semibold text-content-primary">Enterprise Security</div>
                  <div className="text-xs text-content-muted font-body">SOC 2 Compliant</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-heading font-semibold text-content-primary">99.9% Uptime</div>
                  <div className="text-xs text-content-muted font-body">Guaranteed SLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="relative py-12 bg-surface-raised border-y border-surface-border overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-center text-sm font-body text-content-muted mb-8 tracking-widest uppercase">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Meridian Capital', 'Vertex Systems', 'Nova Dynamics', 'Apex Ventures', 'Summit Partners'].map((partner) => (
              <div key={partner} className="font-heading text-xl text-content-secondary tracking-wide">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <About />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}