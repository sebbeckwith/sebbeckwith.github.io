import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { clientLogos } from '../data/clientLogos'

type LogoStyle = CSSProperties & {
  '--logo-x': string
  '--visible-logos': number
}

export function ClientLogoCarousel() {
  const [index, setIndex] = useState(2)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [manualPause, setManualPause] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [visibleLogos, setVisibleLogos] = useState(5)
  const manualPauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const paused = hovered || focused || manualPause || reducedMotion

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    function updateVisibleLogos() {
      if (window.innerWidth <= 400) setVisibleLogos(1)
      else if (window.innerWidth <= 640) setVisibleLogos(2)
      else if (window.innerWidth <= 900) setVisibleLogos(3)
      else setVisibleLogos(5)
    }

    updateVisibleLogos()
    window.addEventListener('resize', updateVisibleLogos)
    return () => window.removeEventListener('resize', updateVisibleLogos)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % clientLogos.length), 5000)
    return () => window.clearInterval(timer)
  }, [paused])

  useEffect(() => () => {
    if (manualPauseTimer.current) clearTimeout(manualPauseTimer.current)
  }, [])

  function pauseAfterManualNavigation() {
    setManualPause(true)
    if (manualPauseTimer.current) clearTimeout(manualPauseTimer.current)
    manualPauseTimer.current = setTimeout(() => setManualPause(false), 8000)
  }

  function next() {
    pauseAfterManualNavigation()
    setIndex((current) => (current + 1) % clientLogos.length)
  }

  function previous() {
    pauseAfterManualNavigation()
    setIndex((current) => (current - 1 + clientLogos.length) % clientLogos.length)
  }

  function relativePosition(logoIndex: number) {
    const rawPosition = (logoIndex - index + clientLogos.length) % clientLogos.length
    return rawPosition > clientLogos.length / 2 ? rawPosition - clientLogos.length : rawPosition
  }

  const minimumVisiblePosition = -Math.floor((visibleLogos - 1) / 2)
  const maximumVisiblePosition = minimumVisiblePosition + visibleLogos - 1

  return (
    <div
      className="client-carousel"
      role="region"
      aria-label="Client organisations"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false)
      }}
    >
      <button className="client-carousel__control client-carousel__control--previous" type="button" onClick={previous} aria-label="Show previous client logo">
        <span aria-hidden="true">←</span>
      </button>
      <div className="client-carousel__stage" aria-live="off">
          {clientLogos.map((logo, logoIndex) => {
            const position = relativePosition(logoIndex)
            const visible = position >= minimumVisiblePosition && position <= maximumVisiblePosition
            return (
            <div
              className={`client-carousel__logo${visible ? ' client-carousel__logo--visible' : ''}${position === 0 ? ' client-carousel__logo--active' : ''}`}
              key={logo.name}
              aria-hidden={!visible}
              style={{ '--logo-x': `${(position * 100) - 50}%`, '--visible-logos': visibleLogos } as LogoStyle}
            >
              <img
                src={logo.src}
                alt={visible ? logo.alt : ''}
                loading={logoIndex < visibleLogos ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
          )})}
      </div>
      <button className="client-carousel__control client-carousel__control--next" type="button" onClick={next} aria-label="Show next client logo">
        <span aria-hidden="true">→</span>
      </button>
    </div>
  )
}
