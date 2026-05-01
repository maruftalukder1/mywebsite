import { useFadeUp } from '../hooks/useFadeUp'

const achievements = [
  { icon: '🏆', title: 'Hackathon Winner', desc: 'First place in national AI hackathon for innovative chatbot solution.' },
  { icon: '📜', title: 'Deep Learning Certified', desc: 'Completed deeplearning.ai specialization with distinction.' },
  { icon: '⭐', title: 'Open Source Contributor', desc: 'Active contributor to major ML and web development repositories.' },
  { icon: '🎯', title: '50+ Projects Completed', desc: 'Delivered production-grade solutions across AI, web, and mobile platforms.' },
  { icon: '📊', title: 'Research Publication', desc: 'Published research on transformer-based architectures for NLP tasks.' },
  { icon: '🌍', title: 'Global Community', desc: 'Mentored 100+ developers through workshops and online communities.' },
]

export default function Achievements() {
  const ref = useFadeUp()

  return (
    <section className="section" id="achievements" ref={ref}>
      <div className="container">
        <div className="section-label fade-up">Recognition</div>
        <h2 className="section-title fade-up delay-1">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <div key={i} className={`achievement-card fade-up delay-${(i % 4) + 1}`}>
              <div className="achievement-icon">{a.icon}</div>
              <h3 className="achievement-title">{a.title}</h3>
              <p className="achievement-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
