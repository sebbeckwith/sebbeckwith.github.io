import { useEffect, useRef } from 'react'

type VideoModalProps = {
  onClose: () => void
}

export function PlayIcon({ circled = false }: { circled?: boolean }) {
  return (
    <svg className={`icon icon--play${circled ? ' icon--play-circled' : ''}`} viewBox="0 0 24 24" aria-hidden="true">
      {circled && <circle cx="12" cy="12" r="10.25" fill="none" stroke="currentColor" strokeWidth="1.75" />}
      <path d="M9.25 7.5v9l7-4.5-7-4.5Z" fill="currentColor" />
    </svg>
  )
}

export function VideoModal({ onClose }: VideoModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], iframe, [tabindex]:not([tabindex="-1"])',
        ),
      )
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <div ref={dialogRef} className="video-modal" role="dialog" aria-modal="true" aria-labelledby="video-modal-title" aria-describedby="video-modal-description">
        <header className="video-modal__header">
          <div>
            <p className="section-label">Product demonstration</p>
            <h2 id="video-modal-title">See how Gobby works</h2>
          </div>
          <button ref={closeRef} className="modal-close" type="button" onClick={onClose}>
            <span>Close</span><b aria-hidden="true">×</b>
          </button>
        </header>
        <div className="video-placeholder" id="video-modal-description">
          <PlayIcon />
          <strong>Product demo coming soon</strong>
          <p>This area is ready for the approved YouTube demonstration. No placeholder video has been embedded.</p>
        </div>
      </div>
    </div>
  )
}
