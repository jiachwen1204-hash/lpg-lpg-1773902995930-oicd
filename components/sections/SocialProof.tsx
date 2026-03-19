import AnimateIn from '@/components/ui/AnimateIn'

const clients = [
  'Meridian Financial',
  'Apex Industries',
  'Stratos Global',
  'Nexus Dynamics',
  'Vertex Solutions',
  'Pinnacle Systems',
]

const testimonials = [
  {
    quote: 'WEQ\'s AI platform revolutionized our workflow automation, delivering measurable efficiency gains within the first quarter. The predictive analytics capabilities have given us a decisive competitive edge.',
    author: 'Sarah Chen',
    role: 'Chief Technology Officer, Meridian Financial',
  },
  {
    quote: 'The implementation was seamless, and the results exceeded every expectation. WEQ has become an indispensable partner in our digital transformation journey.',
    author: 'Michael Torres',
    role: 'VP of Operations, Apex Industries',
  },
]

const stats = [
  { value: '500+', label: 'Enterprise Clients', suffix: '' },
  { value: '40', label: 'Average Cost Reduction', suffix: '%' },
  { value: '3', label: 'Faster Time-to-Market', suffix: 'x' },
  { value: '99.9', label: 'Platform Uptime', suffix: '%' },
]

const certifications = [
  { name: 'ISO 27001 Certified', badge: '🔒' },
  { name: 'SOC 2 Type II', badge: '✓' },
  { name: 'GDPR Compliant', badge: '🇪🇺' },
]

export default function SocialProof() {
  return (
    <section className="relative py-section overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-surface" />
      
      {/* Noise texture for depth */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimateIn className="text-center mb-16">
          <p className="text-sm text-content-muted uppercase tracking-[0.2em] font-body">
            Trusted by Industry Leaders
          </p>
        </AnimateIn>

        {/* Client Logo Marquee */}
        <div className="relative mb-20 overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-16 animate-marquee w-max">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="whitespace-nowrap grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              >
                <span className="font-heading text-lg font-semibold text-content-secondary tracking-wide">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 150} className="h-full">
              <div className="relative h-full p-10 rounded-card-lg bg-surface-raised border border-surface-border overflow-hidden group hover:border-[var(--brand-500)]/30 transition-all duration-500">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-500)/40] to-transparent" />
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[var(--brand-900)]/0 group-hover:bg-[var(--brand-900)]/5 transition-colors duration-500" />
                
                <div className="relative">
                  {/* Quote icon */}
                  <div className="font-heading text-6xl text-[var(--brand-500)/20] leading-none mb-4 select-none">
                    &ldquo;
                  </div>
                  
                  <p className="font-body text-content-primary leading-relaxed mb-8 italic text-lg">
                    {t.quote}
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-surface-border">
                    {/* Avatar placeholder */}
                    <div className="w-12 h-12 rounded-full bg-[var(--brand-900)] flex items-center justify-center">
                      <span className="text-content-inverse font-heading font-semibold text-lg">
                        {t.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-content-primary text-lg">
                        {t.author}
                      </div>
                      <div className="text-sm text-content-muted font-body">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Certifications */}
        <AnimateIn className="mb-20">
          <div className="py-10 border-y border-surface-border">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {certifications.map((cert, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-3 px-5 py-3 rounded-md bg-surface-raised border border-surface-border"
                >
                  <span className="text-lg">{cert.badge}</span>
                  <span className="text-sm font-body font-medium text-content-secondary tracking-wide">
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Stats Row */}
        <AnimateIn className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center relative">
                {/* Background number */}
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-heading font-bold text-[6rem] md:text-[8rem] text-[var(--brand-900)]/5 leading-none select-none pointer-events-none">
                  {i + 1}
                </span>
                
                <div className="relative pt-8">
                  <div className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-content-primary mb-3">
                    {stat.value}<span className="text-[var(--brand-500)]">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-[var(--brand-500)] uppercase tracking-[0.15em] font-body font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Bottom CTA Band */}
        <AnimateIn>
          <div className="relative rounded-card-lg overflow-hidden">
            {/* Dark navy background */}
            <div className="absolute inset-0 bg-[var(--brand-950)]" />
            
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[var(--brand-900)]/30 blur-[120px] pointer-events-none" />
            
            {/* Content */}
            <div className="relative py-16 md:py-20 px-8 text-center">
              <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-content-inverse mb-6">
                Ready to Transform Your Business?
              </h3>
              
              <p className="font-body text-content-inverse/70 max-w-2xl mx-auto leading-relaxed mb-10">
                Join 500+ organizations leveraging WEQ&apos;s intelligent automation platform 
                to streamline operations, reduce costs, and unlock new growth opportunities 
                through data-driven decision making.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-[var(--brand-500)]/20 blur-xl rounded-md scale-110" />
                  <a 
                    href="#contact"
                    className="relative inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[var(--brand-500)] text-[var(--brand-950)] font-body font-semibold text-base hover:bg-[var(--brand-400)] transition-colors duration-300"
                  >
                    Start Transforming
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-content-inverse/20 text-content-inverse font-body font-medium text-base hover:border-[var(--brand-500)]/40 hover:text-[var(--brand-500)] transition-colors duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}