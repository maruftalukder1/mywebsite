import { useEffect, useRef } from 'react'

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', pct: 90 },
      { name: 'JavaScript / TypeScript', pct: 88 },
      { name: 'HTML / CSS', pct: 95 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js / Express', pct: 85 },
      { name: 'Python / FastAPI', pct: 90 },
      { name: 'MongoDB / PostgreSQL', pct: 80 },
    ],
  },
  {
    title: 'AI / Machine Learning',
    skills: [
      { name: 'TensorFlow / PyTorch', pct: 88 },
      { name: 'Computer Vision', pct: 82 },
      { name: 'NLP / Transformers', pct: 78 },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git / GitHub', pct: 92 },
      { name: 'Docker / K8s', pct: 70 },
      { name: 'Linux / CLI', pct: 85 },
    ],
  },
]

export default function Skills() {
  const ref = useRef()

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up')
    if (!els) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          e.target.querySelectorAll('.skill-fill').forEach(bar => bar.classList.add('animate'))
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.05 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <div className="section-label fade-up">Expertise</div>
        <h2 className="section-title fade-up delay-1">Skills & Technologies</h2>
        <p className="section-subtitle fade-up delay-2">
          A comprehensive toolkit refined through years of building production-grade systems.
        </p>
        <div className="skills-categories fade-up delay-3">
          {categories.map(cat => (
            <div key={cat.title} className="skill-category">
              <h3>{cat.title}</h3>
              {cat.skills.map(s => (
                <div key={s.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-percent">{s.pct}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ '--w': `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
