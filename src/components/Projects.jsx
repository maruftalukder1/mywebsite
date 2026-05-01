import { useFadeUp } from '../hooks/useFadeUp'

const projects = [
  {
    icon: '🤖',
    title: 'AI Chatbot System',
    desc: 'An intelligent conversational AI powered by NLP and transformer models, capable of understanding context and providing human-like responses.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    github: '#',
    demo: '#',
  },
  {
    icon: '👁️',
    title: 'Face Recognition App',
    desc: 'Real-time face detection and recognition system using deep learning with high accuracy across diverse lighting conditions.',
    tech: ['Python', 'OpenCV', 'PyTorch', 'Flask'],
    github: '#',
    demo: '#',
  },
  {
    icon: '🛒',
    title: 'Full-stack E-commerce Platform',
    desc: 'A scalable e-commerce solution with payment integration, real-time inventory management, and AI-powered product recommendations.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    demo: '#',
  },
  {
    icon: '💬',
    title: 'Real-time Messaging App',
    desc: 'End-to-end encrypted messaging platform with WebSocket-based real-time communication and rich media support.',
    tech: ['React', 'Socket.io', 'Express', 'Redis'],
    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  const ref = useFadeUp()

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <div className="section-label fade-up">Portfolio</div>
        <h2 className="section-title fade-up delay-1">Selected Projects</h2>
        <p className="section-subtitle fade-up delay-2">
          A curated collection of projects showcasing my expertise in AI, full-stack development, and system design.
        </p>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className={`project-card fade-up delay-${(i % 4) + 1}`}>
              <div className="project-icon">{p.icon}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map(t => <span key={t}>{t}</span>)}
              </div>
              <div className="project-links">
                <a href={p.github} className="project-link">↗ GitHub</a>
                <a href={p.demo} className="project-link">◉ Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
