import { useFadeUp } from '../hooks/useFadeUp'

export default function Hero() {
  const ref = useFadeUp()

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="container">
        <div className="hero-centered">
          <div className="hero-content" style={{ textAlign: 'center' }}>
            <div className="hero-badge fade-up" style={{ justifyContent: 'center' }}>
              <span className="dot" /> Available for opportunities
            </div>
            <h1 className="hero-name fade-up delay-1">
              Maruf<br />Talukder<span className="accent">.</span>
            </h1>
            <p className="hero-role fade-up delay-2">
              Machine Learning Engineer &nbsp;|&nbsp; CSE Student
            </p>
            <p className="hero-tagline fade-up delay-3" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              Building intelligent systems and scalable digital experiences.
            </p>
            <div className="hero-buttons fade-up delay-4" style={{ justifyContent: 'center' }}>
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#" className="btn-outline">Download CV</a>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
