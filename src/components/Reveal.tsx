'use client'

import { useEffect, useRef } from 'react'

/**
 * 进场淡入:唯一的客户端 JS。IntersectionObserver 触发一次即断开,
 * 不引入 Framer Motion 等重依赖,保 Lighthouse 95+。
 */
export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="fade-up">
      {children}
    </div>
  )
}
