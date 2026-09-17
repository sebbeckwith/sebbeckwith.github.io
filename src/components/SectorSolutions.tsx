import { useEffect, useState } from 'react'
import { sectorSolutions } from '../data/homepage'
import { Container } from './SiteShell'

function SectorIcon({ type }: { type: string }) {
  if (type === 'charities') {
    return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M13 31c0-6 7-8 11-3l8 9 8-9c4-5 11-3 11 3 0 9-11 16-19 22-8-6-19-13-19-22Z" /><path d="M7 54V36m50 18V36M7 43l10 11m40-11L47 54" /></svg>
  }
  if (type === 'healthcare') {
    return <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="18" r="8" /><path d="M15 52c1-14 7-22 17-22s16 8 17 22M8 28h12m-6-6v12m30-6h12m-6-6v12" /></svg>
  }
  if (type === 'research') {
    return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="m6 23 26-13 26 13-26 13L6 23Z" /><path d="M17 30v13c8 7 22 7 30 0V30m11-7v21" /><circle cx="58" cy="47" r="3" /></svg>
  }
  if (type === 'business') {
    return <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="29" cy="31" r="23" /><circle cx="29" cy="31" r="14" /><circle cx="29" cy="31" r="5" /><path d="m29 31 25-21m-8 2 8-2-1 8" /></svg>
  }
  return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M7 23 32 9l25 14H7Zm5 0v29m10-29v29m20-29v29m10-29v29M6 52h52" /><path d="M28 34h8v18" /></svg>
}

export function SectorSolutions() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % sectorSolutions.length)
    }, 4800)
    return () => window.clearInterval(interval)
  }, [isPaused])

  function moveBy(direction: number) {
    setActiveIndex((current) => (current + direction + sectorSolutions.length) % sectorSolutions.length)
  }

  function positionFor(index: number) {
    const difference = (index - activeIndex + sectorSolutions.length) % sectorSolutions.length
    const offset = difference > Math.floor(sectorSolutions.length / 2) ? difference - sectorSolutions.length : difference
    return ['far-left', 'left', 'center', 'right', 'far-right'][offset + 2]
  }

  return (
    <section className="sector-solutions" id="solutions" aria-labelledby="solutions-title">
      <Container>
        <div className="sector-solutions__heading">
          <p className="section-label">Solutions by sector</p>
          <h2 id="solutions-title">Different sectors.<br /><span>The same need to understand.</span></h2>
          <p>Whether you work in healthcare, academia, local government or social impact, Gobby helps collect open-text feedback and organise what different groups are saying.</p>
        </div>
        <div className="sector-solutions__carousel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocusCapture={() => setIsPaused(true)} onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false)
        }}>
          <button className="sector-solutions__arrow sector-solutions__arrow--previous" type="button" aria-label="Show previous sector" onClick={() => moveBy(-1)}>←</button>
          <div className="sector-solutions__stage">
            {sectorSolutions.map((sector, index) => (
              <article className={`sector-card sector-card--${positionFor(index)}`} aria-hidden={positionFor(index).startsWith('far')} key={sector.title}>
                <div className="sector-card__icon"><SectorIcon type={sector.icon} /></div>
                <p>Solution {String(index + 1).padStart(2, '0')}</p>
                <h3>{sector.title}</h3>
                <p>{sector.description}</p>
                <a href="#contact" tabIndex={positionFor(index).startsWith('far') ? -1 : undefined}>{sector.linkLabel}<span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
          <button className="sector-solutions__arrow sector-solutions__arrow--next" type="button" aria-label="Show next sector" onClick={() => moveBy(1)}>→</button>
        </div>
        <div className="sector-solutions__dots" aria-label="Choose a sector">
          {sectorSolutions.map((sector, index) => <button className={index === activeIndex ? 'is-active' : ''} type="button" aria-label={`Show ${sector.title}`} aria-current={index === activeIndex ? 'true' : undefined} key={sector.title} onClick={() => setActiveIndex(index)} />)}
        </div>
        <p className="sector-solutions__footer">Every voice matters. Every insight counts. Gobby helps you listen better and act with confidence.</p>
      </Container>
    </section>
  )
}
