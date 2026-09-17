function PeopleIcon() {
  return (
    <svg viewBox="0 0 56 56" aria-hidden="true">
      <circle cx="28" cy="17" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="13" cy="22" r="5" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="43" cy="22" r="5" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M18 43v-7c0-6 4-10 10-10s10 4 10 10v7M4 43v-6c0-5 3-8 8-8 3 0 5 1 7 3m33 11v-6c0-5-3-8-8-8-3 0-5 1-7 3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function HeroProductMockup() {
  return (
    <div
      className="hero-mockup"
      role="img"
      aria-label="Gobby product example showing an open response, a related response and an agreement action."
    >
      <div className="hero-mockup__paper" aria-hidden="true">
        <header className="mockup-question">
          <div className="mockup-question__icon">?</div>
          <div>
            <div className="mockup-question__title">What is one thing we could do<br />to improve your experience?</div>
          </div>
        </header>

        <div className="mockup-answer">
          <p>I wish we had clearer communication when changes<span className="mockup-cursor" /></p>
        </div>
        <div className="mockup-meta"><span>You&nbsp; • &nbsp;Just now</span><span>56/500</span></div>

        <div className="mockup-match">
          <div className="mockup-match__person"><PeopleIcon /></div>
          <div className="mockup-match__content">
            <span>Related response</span>
            <blockquote>“We often find out about important changes too late. Better communication would make day-to-day work easier.”</blockquote>
          </div>
          <div className="mockup-match__action">
            <button type="button" tabIndex={-1}><b aria-hidden="true">✓</b> Agree with this answer</button>
            <small>Your agreement helps surface shared views.</small>
          </div>
        </div>
      </div>
    </div>
  )
}
