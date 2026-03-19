import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  badge: 'Pioneering AI Innovation',
  headline: 'Transform Your Business with',
  highlight: 'Intelligent AI Solutions',
  subline: 'We are an innovative AI Technology Platform company that empowers businesses to transform the way they operate through intelligent automation and data-driven solutions. Our platform integrates advanced artificial intelligence, scalable cloud infrastructure, and seamless system integration.',
  cta: { label: 'Start Transforming', href: '#contact' },
  secondary: { label: 'Explore Solutions', href: '#services' },
  stats: [
    { value: '50+', label: 'Enterprise Deployments', accent: false },
    { value: '85%', label: 'Average Cost Reduction', accent: true },
    { value: '3x', label: 'Faster Time to Market', accent: false },
  ],
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#070e17] pt-nav"
    >
      {/* Background depth layers */}
      <div className="absolute inset-0">
        {/* Primary ambient glow */}
        <div
          aria-hidden
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#1a3a5c]/30 blur-[200px] pointer-events-none animate-float"
        />
        {/* Secondary glow orb */}
        <div
          aria-hidden
          className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#122842]/40 blur-[160px] pointer-events-none animate-float [animation-delay:2.5s]"
        />
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
      </div>

      {/* Thin top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Content column */}
          <div className="lg:col-span-8 lg:col-start-1">
            {/* Badge */}
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#e2e5eb]/10 bg-[#1a3a5c]/40 backdrop-blur-sm text-sm text-[#c9a84c] mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
                {CONTENT.badge}
              </div>
            </AnimateIn>

            {/* Headline with gradient highlight */}
            <AnimateIn delay={100}>
              <h1 className="font-heading font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-tight text-[#ffffff] mb-8">
                {CONTENT.headline}{' '}
                <span className="bg-gradient-to-r from-[#c9a84c] via-[#d4b86a] to-[#c9a84c] bg-clip-text text-transparent">
                  {CONTENT.highlight}
                </span>
              </h1>
            </AnimateIn>

            {/* Subline */}
            <AnimateIn delay={200}>
              <p className="max-w-2xl text-lg md:text-xl text-[#8fa3b1] leading-relaxed mb-12">
                {CONTENT.subline}
              </p>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn delay={300}>
              <div className="flex flex-col sm:flex-row items-start gap-5 mb-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#c9a84c]/20 blur-xl rounded-lg scale-110" />
                  <a
                    href={CONTENT.cta.href}
                    className="relative inline-flex items-center px-8 py-4 font-body font-medium bg-[#c9a84c] text-[#070e17] rounded-md hover:bg-[#d4b86a] transition-all ease-expo-out active:scale-[0.97] shadow-lg shadow-[#c9a84c]/20"
                  >
                    {CONTENT.cta.label}
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
                <a
                  href={CONTENT.secondary.href}
                  className="group inline-flex items-center px-8 py-4 font-body font-medium border border-[#e2e5eb]/20 text-[#ffffff] rounded-md hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-all ease-expo-out"
                >
                  {CONTENT.secondary.label}
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </div>
            </AnimateIn>

            {/* Stats row with gold accents */}
            <AnimateIn delay={400}>
              <div className="flex flex-wrap gap-12 pt-10 border-t border-[#e2e5eb]/10">
                {CONTENT.stats.map((stat, index) => (
                  <div key={stat.label} className="relative group">
                    {/* Large background number */}
                    <span
                      className="absolute -top-6 -left-2 font-heading font-bold text-[4rem] text-[#1a3a5c]/40 leading-none select-none pointer-events-none"
                      style={{ opacity: 0.3 }}
                    >
                      0{index + 1}
                    </span>
                    <div className="relative">
                      <div
                        className={`font-heading font-bold text-4xl mb-1 ${
                          stat.accent ? 'text-[#c9a84c]' : 'text-[#ffffff]'
                        }`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm text-[#718096] tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Visual column - abstract AI visualization */}
          <div className="lg:col-span-4 lg:col-start-9 hidden lg:block">
            <AnimateIn delay={200}>
              <div className="relative">
                {/* Main visual container */}
                <div className="relative rounded-xl border border-[#e2e5eb]/10 bg-[#1a3a5c]/30 backdrop-blur-sm p-8 overflow-hidden">
                  {/* Glow accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />

                  {/* Abstract node network */}
                  <div className="relative h-64">
                    {/* Central node */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#d4b86a] shadow-lg shadow-[#c9a84c]/30 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-[#070e17]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

                    {/* Orbiting nodes */}
                    {[
                      { top: '5%', left: '20%', delay: '0s', label: 'ML Models' },
                      { top: '10%', right: '15%', delay: '0.5s', label: 'Analytics' },
                      { bottom: '15%', left: '15%', delay: '1s', label: 'Automation' },
                      { bottom: '10%', right: '20%', delay: '1.5s', label: 'Integration' },
                    ].map((node, i) => (
                      <div
                        key={i}
                        className="absolute w-12 h-12 rounded-full bg-[#122842] border border-[#e2e5eb]/20 flex items-center justify-center animate-float"
                        style={{
                          ...(node.top && { top: node.top }),
                          ...(node.bottom && { bottom: node.bottom }),
                          ...(node.left && { left: node.left }),
                          ...(node.right && { right: node.right }),
                          animationDelay: node.delay,
                        }}
                      >
                        <div className="w-3 h-3 rounded-full bg-[#c9a84c]/60" />
                      </div>
                    ))}

                    {/* Connection lines */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <line
                        x1="50%"
                        y1="50%"
                        x2="30%"
                        y2="15%"
                        stroke="#c9a84c"
                        strokeWidth="0.3"
                        strokeOpacity="0.4"
                      />
                      <line
                        x1="50%"
                        y1="50%"
                        x2="75%"
                        y2="15%"
                        stroke="#c9a84c"
                        strokeWidth="0.3"
                        strokeOpacity="0.4"
                      />
                      <line
                        x1="50%"
                        y1="50%"
                        x2="25%"
                        y2="80%"
                        stroke="#c9a84c"
                        strokeWidth="0.3"
                        strokeOpacity="0.4"
                      />
                      <line
                        x1="50%"
                        y1="50%"
                        x2="75%"
                        y2="85%"
                        stroke="#c9a84c"
                        strokeWidth="0.3"
                        strokeOpacity="0.4"
                      />
                    </svg>
                  </div>

                  {/* Labels */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {[
                      'Predictive Analytics',
                      'Intelligent Agents',
                      'Cloud Integration',
                      'Workflow Automation',
                    ].map((label, i) => (
                      <div
                        key={i}
                        className="text-xs text-[#718096] text-center py-1.5 px-2 rounded bg-[#122842]/50 border border-[#e2e5eb]/5"
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-[#122842] border border-[#e2e5eb]/20 rounded-lg px-4 py-3 shadow-xl">
                  <div className="text-xs text-[#718096] mb-1">Processing</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-heading font-bold text-[#ffffff]">
                      Real-time
                    </span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>

      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e2e5eb]/10 to-transparent" />
    </section>
  )
}