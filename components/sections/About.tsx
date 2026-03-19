import AnimateIn from '@/components/ui/AnimateIn'
import CountUp from '@/components/ui/CountUp'
import { CheckCircle, Award, Users, Globe, Zap } from 'lucide-react'

const CONTENT = {
  label: 'About WEQ',
  heading: 'Pioneering Intelligent AI Solutions',
  subheading: 'Empowering Business Transformation Through Advanced Technology',
  paragraphs: [
    'We are an innovative AI Technology Platform company that empowers businesses to transform the way they operate through intelligent automation and data-driven solutions. Our platform integrates advanced artificial intelligence, scalable cloud infrastructure, and seamless system integration.',
    'From predictive analytics to intelligent agents, we make AI accessible, practical, and powerful — enabling companies to move faster, reduce costs, and stay ahead in a rapidly evolving digital world.',
  ],
  values: [
    'Advanced AI Integration',
    'Scalable Cloud Infrastructure',
    'Seamless System Integration',
    'Data-Driven Decision Making',
    'Intelligent Automation',
    'Long-term Strategic Partnerships',
  ],
  stats: [
    { value: 150, suffix: '+', label: 'Enterprise Clients', icon: Globe },
    { value: 99.9, suffix: '%', label: 'Platform Uptime', icon: Zap, decimal: true },
    { value: 500, suffix: 'M+', label: 'Data Points Processed', icon: Users },
    { value: 8, suffix: '+', label: 'Years of Innovation', icon: Award },
  ],
  leadership: [
    {
      name: 'Jonathan Chen',
      role: 'Chief Executive Officer',
      bio: 'Former tech executive with 15+ years in enterprise AI solutions and digital transformation.',
    },
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Technology Officer',
      bio: 'PhD in Machine Learning from MIT. Pioneering researcher in natural language processing.',
    },
    {
      name: 'Marcus Thompson',
      role: 'Chief Operations Officer',
      bio: 'Operations veteran with expertise in scaling technology enterprises globally.',
    },
  ],
  certifications: [
    'ISO 27001 Certified',
    'SOC 2 Type II',
    'GDPR Compliant',
    'AWS Advanced Partner',
    'Microsoft Azure Partner',
  ],
  cta: { label: 'Get in Touch', href: '#contact' },
}

export default function About() {
  return (
    <section id="about" className="relative bg-[#f8f9fb]">
      {/* Top border divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#e2e5eb] to-transparent" />
      
      {/* Hero Content Block */}
      <div className="relative py-24 lg:py-32 bg-[#ffffff] overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
               backgroundRepeat: 'repeat',
               backgroundSize: '256px 256px',
             }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <AnimateIn>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#c9a84c] mb-4 font-body">
                {CONTENT.label}
              </p>
            </AnimateIn>
            
            <AnimateIn delay={100}>
              <h1 className="font-heading font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-[#0f1a27] mb-4 tracking-tight">
                {CONTENT.heading}
              </h1>
            </AnimateIn>
            
            <AnimateIn delay={200}>
              <h2 className="font-heading font-normal text-xl lg:text-2xl text-[#4a5568] mb-8 italic">
                {CONTENT.subheading}
              </h2>
            </AnimateIn>
            
            <AnimateIn delay={300}>
              {CONTENT.paragraphs.map((p, i) => (
                <p key={i} className="text-[#4a5568] text-lg leading-relaxed mb-6 font-body font-light max-w-2xl">
                  {p}
                </p>
              ))}
            </AnimateIn>
          </div>
        </div>
      </div>

      {/* Stats Section - Dark Navy */}
      <div className="relative py-20 bg-[#0f1a27] overflow-hidden">
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
        
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#1a3a5c]/30 blur-[180px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {CONTENT.stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#c9a84c]/10 mb-4">
                    <stat.icon className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div className="font-heading font-bold text-[clamp(2.5rem,4vw,3.5rem)] text-[#ffffff] leading-none mb-2">
                    <CountUp 
                      end={stat.value} 
                      suffix={stat.suffix}
                      decimal={stat.decimal}
                      duration={2000}
                    />
                  </div>
                  <div className="text-sm font-medium tracking-wide text-[#c9a84c] uppercase">
                    {stat.label}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Content */}
            <AnimateIn direction="right">
              <div>
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1a3a5c] mb-4 font-body">
                  Our Core Values
                </p>
                <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] text-[#0f1a27] mb-6 leading-tight">
                  Principles That Drive Our Work
                </h2>
                <p className="text-[#4a5568] text-lg leading-relaxed mb-8 font-body font-light max-w-xl">
                  These foundational principles guide every solution we build and every partnership we form. They represent our commitment to delivering excellence through intelligent innovation.
                </p>
              </div>
            </AnimateIn>
            
            {/* Values Grid */}
            <AnimateIn direction="left" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CONTENT.values.map((value, i) => (
                  <div 
                    key={value} 
                    className="relative p-5 rounded-lg bg-[#f8f9fb] border border-[#e2e5eb] hover:border-[#1a3a5c]/20 hover:bg-[#ffffff] transition-all duration-300 group"
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/0 to-transparent group-hover:via-[#c9a84c]/40 transition-all duration-300" />
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1a3a5c] shrink-0 mt-0.5" />
                      <span className="text-[#0f1a27] font-medium">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimateIn>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1a3a5c] mb-4 font-body">
                Leadership Team
              </p>
              <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] text-[#0f1a27] mb-4">
                Meet Our Executive Team
              </h2>
              <p className="text-[#4a5568] text-lg font-body font-light max-w-2xl mx-auto">
                Industry veterans committed to driving innovation and delivering transformative AI solutions.
              </p>
            </AnimateIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CONTENT.leadership.map((member, i) => (
              <AnimateIn key={member.name} delay={i * 150}>
                <div className="relative group">
                  {/* Card */}
                  <div className="relative rounded-lg bg-[#ffffff] border border-[#e2e5eb] p-6 transition-all duration-300 hover:border-[#1a3a5c]/30 hover:shadow-lg">
                    {/* Gold accent line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/0 to-transparent group-hover:via-[#c9a84c]/60 transition-all duration-300" />
                    
                    {/* Avatar placeholder */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1a3a5c] to-[#122842] mb-4 flex items-center justify-center">
                      <span className="text-[#ffffff] font-heading font-bold text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <h3 className="font-heading font-bold text-xl text-[#0f1a27] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-[#c9a84c] mb-3 uppercase tracking-wide">
                      {member.role}
                    </p>
                    <p className="text-[#4a5568] text-sm leading-relaxed font-body font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-12">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1a3a5c] mb-4 font-body">
                Trust & Compliance
              </p>
              <h2 className="font-heading font-bold text-2xl text-[#0f1a27]">
                Certified Excellence
              </h2>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={200}>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
              {CONTENT.certifications.map((cert) => (
                <div 
                  key={cert}
                  className="flex items-center gap-2 px-5 py-3 rounded-md bg-[#f8f9fb] border border-[#e2e5eb]"
                >
                  <Award className="w-4 h-4 text-[#c9a84c]" />
                  <span className="text-sm font-medium text-[#0f1a27]">{cert}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* CTA Section - Dark Navy */}
      <div className="relative py-24 bg-[#070e17] overflow-hidden">
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
        
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#1a3a5c]/20 blur-[200px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimateIn>
            <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] text-[#ffffff] mb-6">
              Ready to Transform Your Business?
            </h2>
          </AnimateIn>
          
          <AnimateIn delay={200}>
            <p className="text-[#8fa3b1] text-lg font-body font-light mb-10 max-w-2xl mx-auto">
              Partner with WEQ to unlock the full potential of intelligent automation and data-driven solutions. Let us help you build smarter applications and optimize your workflows.
            </p>
          </AnimateIn>
          
          <AnimateIn delay={300}>
            <div className="relative inline-block">
              {/* Button glow */}
              <div className="absolute inset-0 bg-[#c9a84c]/20 blur-xl rounded-lg scale-110" />
              <a
                href={CONTENT.cta.href}
                className="relative inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-[#ffffff] text-[#0f1a27] rounded-md hover:bg-[#c9a84c] hover:text-[#ffffff] transition-all duration-300"
              >
                {CONTENT.cta.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={400}>
            <div className="mt-8 text-sm text-[#4a5568]">
              <p>854 TAMPINES STREET 82, 12-227</p>
              <p className="mt-1">jiachwen99@gmail.com</p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}