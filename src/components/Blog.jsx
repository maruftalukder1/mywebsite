import { useFadeUp } from '../hooks/useFadeUp'

const posts = [
  {
    date: 'MAR 2025',
    title: 'Understanding Transformer Architectures from Scratch',
    excerpt: 'A deep dive into attention mechanisms, positional encoding, and how transformers revolutionized NLP.',
  },
  {
    date: 'JAN 2025',
    title: 'Building Production ML Pipelines',
    excerpt: 'Best practices for deploying machine learning models with CI/CD, monitoring, and auto-scaling.',
  },
  {
    date: 'NOV 2024',
    title: 'React Performance Optimization Guide',
    excerpt: 'Practical techniques to reduce bundle size, optimize rendering, and improve user experience.',
  },
]

export default function Blog() {
  const ref = useFadeUp()

  return (
    <section className="section" id="blog" ref={ref}>
      <div className="container">
        <div className="section-label fade-up">Insights</div>
        <h2 className="section-title fade-up delay-1">Latest Articles</h2>
        <div className="blog-grid">
          {posts.map((p, i) => (
            <div key={i} className={`blog-card fade-up delay-${i + 1}`}>
              <div className="blog-date">{p.date}</div>
              <h3 className="blog-title">{p.title}</h3>
              <p className="blog-excerpt">{p.excerpt}</p>
              <a href="#" className="blog-read">Read more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
