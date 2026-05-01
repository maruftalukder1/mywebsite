import { useEffect, useRef } from 'react'

export function useFadeUp() {
  const ref = useRef()

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up')
    if (!els) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.05 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return ref
}
