'use client'
import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'

// @lpg: Realistic AI technology platform metrics for WEQ
const stats = [
  { value: 847,  suffix: '+', label: 'AI Solutions Deployed' },
  { value: 99,   suffix: '%', label: 'Client Retention Rate' },
  { value: 12,   suffix: '+', label: 'Years of Innovation'   },
  { value: 2500, suffix: '+', label: 'Enterprise Clients'    },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.unobserve(el)
      const duration = 1800
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * target))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="relative py-[96px] bg-[#f8f9fb] border-y border-[#e2e5eb]">
      {/* Subtle noise texture for depth */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <AnimateIn 
              key={stat.label} 
              delay={i * 150} 
              animation="fade-up"
              className="text-center group"
            >
              <div className="relative inline-block">
                {/* Gold accent line above number */}
                <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-6 opacity-80 group-hover:opacity-100 group-hover:w-16 transition-all duration-500" />
                
                {/* Large serif stat number with gold accent */}
                <div className="font-heading font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1] text-[#1a3a5c] tracking-tight">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
              </div>
              
              {/* Muted label in body font */}
              <div className="mt-4 text-sm md:text-base text-[#718096] font-body font-normal tracking-wide uppercase">
                {stat.label}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}