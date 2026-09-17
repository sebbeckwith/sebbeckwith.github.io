import { useState, type ReactNode } from 'react'
import { solutionNavGroups } from '../data/solutions'
import gobbyLogo from '../assets/brand/gobby-logo.png'
import gobbyHeaderLogo from '../../gobby logo no bg.png'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`container ${className}`}>{children}</div>
}

export function ButtonLink({ href, children, variant = 'primary' }: { href: string; children: ReactNode; variant?: 'primary' | 'secondary' | 'light' }) {
  return <a className={`button button--${variant}`} href={href}>{children}<span aria-hidden="true">↗</span></a>
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const closeNavigation = () => {
    setOpen(false)
    setSolutionsOpen(false)
  }

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <Container className="site-header__inner">
        <a className="wordmark wordmark--header" href="/" aria-label="Gobby home"><img src={gobbyHeaderLogo} alt="" /></a>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>
          <span>{open ? 'Close' : 'Menu'}</span><span aria-hidden="true">{open ? '×' : '≡'}</span>
        </button>
        <nav id="primary-nav" className={open ? 'nav nav--open' : 'nav'} aria-label="Primary">
          <ul>
            <li><a href="/#how-it-works" onClick={closeNavigation}>How it works</a></li>
            <li
              className={`solutions-menu${solutionsOpen ? ' solutions-menu--open' : ''}`}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setSolutionsOpen(false)
              }}
            >
              <button type="button" aria-expanded={solutionsOpen} aria-controls="solutions-dropdown" onClick={() => setSolutionsOpen((current) => !current)}>
                Solutions <span aria-hidden="true" />
              </button>
              <div className="solutions-dropdown" id="solutions-dropdown">
                {solutionNavGroups.map((group) => (
                  <div key={group.label}>
                    <p>{group.label}</p>
                    {group.items.map(([label, href]) => <a href={href} key={href} onClick={closeNavigation}>{label}<span aria-hidden="true">→</span></a>)}
                  </div>
                ))}
              </div>
            </li>
            <li><a href="/pricing" onClick={closeNavigation}>Pricing</a></li>
          </ul>
          <div className="nav__actions"><a href="/#login">Log in</a><ButtonLink href="/pricing#signup">Start free</ButtonLink></div>
        </nav>
      </Container>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top"><a className="wordmark wordmark--light" href="/" aria-label="Gobby home"><img src={gobbyLogo} alt="" /></a><p>Qualitative survey software for open answers, peer analysis and thematic insight.</p></div>
        <div className="site-footer__links">
          <div><h2>Product</h2><a href="/#how-it-works">How it works</a><a href="/#difference-title">Features</a><a href="/pricing">Pricing</a></div>
          <div><h2>Solutions</h2><a href="/solutions/service-feedback">Services & lived experience</a><a href="/solutions/employee-listening">Employees</a><a href="/solutions/consultation">Consultation & co-production</a><a href="/solutions/qualitative-research">Research</a></div>
          <div><h2>Resources</h2><a href="/#guides">Guides</a><a href="/#faq">FAQ</a></div>
          <div><h2>Company</h2><a href="#about">About</a><a href="#contact">Contact</a></div>
          <div><h2>Legal</h2><a href="#privacy">Privacy</a><a href="#terms">Terms</a><a href="#cookies">Cookies</a></div>
        </div>
        <div className="site-footer__bottom">
          <small>© {new Date().getFullYear()} Gobby. Prototype content requires verification before launch.</small>
          <div className="site-footer__social">
            <a href="https://uk.linkedin.com/company/gobby" target="_blank" rel="noreferrer" aria-label="Follow Gobby on LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.4H3.2V19h3.3V8.4ZM4.85 3A1.92 1.92 0 1 0 4.85 6.84 1.92 1.92 0 0 0 4.85 3ZM19.8 12.92c0-3.2-1.7-4.69-3.98-4.69a3.43 3.43 0 0 0-3.1 1.7V8.4H9.4V19h3.32v-5.25c0-1.38.26-2.72 1.98-2.72 1.7 0 1.72 1.59 1.72 2.81V19h3.32l.06-6.08Z" /></svg>
              <span>LinkedIn</span>
            </a>
            <a href="mailto:info@gobby.io" aria-label="Email Gobby">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3V5Zm2 2v.6l7 4.9 7-4.9V7H5Zm14 10V10l-7 4.9L5 10v7h14Z" /></svg>
              <span>Email</span>
            </a>
          </div>
          <a href="#main">Back to top ↑</a>
        </div>
      </Container>
    </footer>
  )
}
