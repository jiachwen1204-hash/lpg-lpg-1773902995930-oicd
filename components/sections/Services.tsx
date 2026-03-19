import AnimateIn from '@/components/ui/AnimateIn'
import { BrainCircuit, Cloud, Workflow, LineChart, Bot, Puzzle } from 'lucide-react'

const services = [
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'Transform raw data into actionable intelligence. Our advanced algorithms forecast trends, identify opportunities, and help you make decisions backed by real-time insights.',
  },
  {
    icon: Bot,
    title: 'Intelligent Agents',
    description: 'Deploy AI-powered agents that automate complex tasks, learn from interactions, and continuously improve. From customer service to data processing, our agents work around the clock.',
  },
  {
    icon: Cloud,
    title: 'Scalable Cloud Infrastructure',
    description: 'Enterprise-grade cloud solutions that grow with your business. We design, migrate, and manage cloud environments optimized for performance, security, and cost efficiency.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Streamline operations by eliminating manual bottlenecks. Our automation platforms orchestrate processes across departments, reducing costs while accelerating delivery times.',
  },
  {
    icon: Puzzle,
    title: 'System Integration',
    description: 'Connect your existing technology stack seamlessly. We build bridges between disparate systems, ensuring data flows freely and operations remain uninterrupted.',
  },
  {
    icon: BrainCircuit,
    title: 'Smart Applications',
    description: 'Custom AI-powered applications built for your unique needs. From concept to deployment, we create intelligent solutions that give your business a decisive competitive edge.',
  },
]

const stats = [
  { value: '10x', label: 'Faster Decision Making' },
  { value: '85%', label: 'Cost Reduction Potential' },
  { value: '24/7', label: 'AI-Powered Operations' },
]

const HEADING = 'Intelligent Solutions for Digital Transformation'
const SUBTEXT = 'From predictive analytics to intelligent agents, we make AI accessible, practical, and powerful — enabling companies to move faster, reduce costs, and stay ahead in a rapidly evolving digital world.'

export default function Services() {
  return (
    <section id="services" className="py-section bg-[#f8f9fb] border-t border-[#e2e5eb]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#c9a84c] mb-3 font-lato">
            Our Capabilities
          </p>
          <h2 className="font-heading font-bold text-display-lg text-[#0f1a27] mb-6 max-w-4xl mx-auto leading-tight">
            {HEADING}
          </h2>
          <p className="max-w-3xl mx-auto text-[#4a5568] text-lg leading-relaxed font-light font-lato">
            {SUBTEXT}
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 100}>
              <div className="group relative h-full p-8 rounded-lg bg-white border border-[#e2e5eb] hover:border-[#1a3a5c]/30 hover:shadow-xl transition-all duration-500 ease-expo-out overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
                <div className="w-14 h-14 rounded-lg bg-[#1a3a5c]/5 flex items-center justify-center mb-6 group-hover:bg-[#1a3a5c]/10 transition-colors duration-300">
                  <svc.icon className="w-7 h-7 text-[#c9a84c]" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#0f1a27] mb-3">
                  {svc.title}
                </h3>
                <p className="text-[#4a5568] leading-relaxed font-light font-lato">
                  {svc.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="relative">
          <div className="absolute inset-0 bg-[#1a3a5c]/3 rounded-xl blur-xl" />
          <div className="relative bg-[#0f1a27] rounded-xl p-12 border border-[#1a3a5c]/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <div key={stat.label} className={`text-center ${i !== 0 ? 'md:border-l md:border-[#1a3a5c]/30' : ''}`}>
                  <div className="font-heading font-bold text-5xl md:text-6xl text-[#c9a84c] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[#718096] text-sm tracking-wide uppercase font-lato">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}