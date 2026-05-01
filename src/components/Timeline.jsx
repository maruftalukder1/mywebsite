import { useFadeUp } from '../hooks/useFadeUp'

const items = [
  {
    date: '2023 — PRESENT',
    title: 'Machine Learning Engineer',
    sub: 'Freelance & Research',
    desc: 'Developing end-to-end ML pipelines, deploying models to production, and conducting research in computer vision and NLP.',
  },
  {
    date: '2021 — PRESENT',
    title: 'B.Sc. in Computer Science & Engineering',
    sub: 'University Studies',
    desc: 'Core studies in algorithms, data structures, AI, and software engineering with focus on machine learning specialization.',
  },
  {
    date: '2022',
    title: 'Full Stack Developer',
    sub: 'Project-based',
    desc: 'Built production-ready web applications using React, Node.js, and cloud services for various clients and startups.',
  },
  {
    date: '2021',
    title: 'Certified Deep Learning Specialization',
    sub: 'Coursera — deeplearning.ai',
    desc: 'Completed the 5-course specialization covering neural networks, CNNs, RNNs, and sequence models.',
  },
]

export default function Timeline() {
  const ref = useFadeUp()

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="container">
        <div className="section-label fade-up">Journey</div>
        <h2 className="section-title fade-up delay-1">Experience & Education</h2>
        <div className="timeline">
          {items.map((item, i) => (
            <div key={i} className={`timeline-item fade-up delay-${(i % 4) + 1}`}>
              <div className="timeline-dot" />
              <div className="timeline-date">{item.date}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-sub">{item.sub}</p>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
