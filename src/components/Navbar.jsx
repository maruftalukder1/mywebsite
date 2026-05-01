import { useState, useEffect } from 'react'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleClick = () => setMobileOpen(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#" className="nav-logo">M<span>.</span></a>
          <div className="nav-links">
            {links.map(l => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
          <div className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            <span /><span /><span />
          </div>
        </div>
      </nav>
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={handleClick}>{l.label}</a>
        ))}
        <button className="theme-toggle" onClick={toggleTheme} style={{ alignSelf: 'flex-start' }}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </>
  )
}
