import { useState, useEffect, useRef } from 'react'

interface CountUpProps {
  end: number
  suffix?: string
  decimal?: boolean
  duration?: number
}

export default function CountUp({ end, suffix = '', decimal = false, duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = end * easeOutQuart
      
      setCount(decimal ? currentCount : Math.floor(currentCount))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, decimal, duration])

  return (
    <div ref={ref}>
      {decimal ? count.toFixed(1) : count}{suffix}
    </div>
  )
}