import { useFadeUp } from '../hooks/useFadeUp'
import portrait from '../assets/maruf-portrait.jpg'

export default function About() {
  const ref = useFadeUp()

  const techs = ['Python', 'TensorFlow', 'PyTorch', 'React', 'Node.js', 'MongoDB', 'Docker', 'Git']

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="fade-up">
            <img src={portrait} alt="Maruf Talukder" className="about-image" />
          </div>
          <div className="about-text">
            <div className="section-label fade-up">About Me</div>
            <h2 className="section-title fade-up delay-1">Crafting the future<br />with code & AI</h2>
            <p className="fade-up delay-2">
              I'm a passionate Computer Science student and Machine Learning Engineer focused on building 
              real-world, impactful solutions. My work spans from deep learning research to full-stack 
              web applications — always driven by a desire to push boundaries.
            </p>
            <p className="fade-up delay-3">
              I believe in the power of AI to transform industries and improve lives. Whether it's 
              developing intelligent chatbot systems, computer vision applications, or scalable 
              platforms, I approach every project with precision and purpose.
            </p>
            <div className="tech-stack fade-up delay-4">
              {techs.map(t => <span key={t} className="tech-badge">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
