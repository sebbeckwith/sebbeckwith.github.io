export function JourneyFragment({ step }: { step: string }) {
  if (step === '01') {
    return (
      <div className="product-fragment product-fragment--question">
        <span>Open-ended question</span>
        <p>What would make this service work better for you?</p>
        <i aria-hidden="true">Your answer…</i>
      </div>
    )
  }

  if (step === '02') {
    return (
      <div className="product-fragment product-fragment--match">
        <span>Related response</span>
        <p>“Tell us before decisions are final.”</p>
        <b>I relate to this <i aria-hidden="true">＋</i></b>
      </div>
    )
  }

  if (step === '03') {
    return (
      <div className="product-fragment product-fragment--theme">
        <span>Illustrative thematic analysis</span>
        <strong>Communication & information</strong>
        <div><b>4 responses</b><b>2 codes</b><b>Source evidence</b></div>
        <small>Compare groups: 18–34 ↑ · 35–54 → · 55+ ↓</small>
      </div>
    )
  }

  return (
    <div className="product-fragment product-fragment--report">
      <span>Review and report</span>
      <p><b>Theme</b> Earlier communication</p>
      <p><b>Evidence</b> Source responses attached</p>
      <p><b>Next step</b> Assign and revisit</p>
    </div>
  )
}

export function DifferenceFragment({ type }: { type: 'qualitative' | 'peer' | 'human' }) {
  if (type === 'qualitative') {
    return (
      <div className="difference-fragment difference-fragment--compare">
        <p><span>Preset answer</span><b>3 / 5</b></p>
        <blockquote><span>Answer in their own words</span>“The staff were helpful, but I had no idea what was happening next.”</blockquote>
      </div>
    )
  }

  if (type === 'peer') {
    return (
      <div className="difference-fragment difference-fragment--peer">
        <blockquote>“Changes happen before we hear about them.”</blockquote>
        <i aria-hidden="true">↓ related answer</i>
        <p>“Tell us while there is still time to respond.”</p>
        <b>This reflects my experience</b>
      </div>
    )
  }

  return (
    <div className="difference-fragment difference-fragment--human">
      <span>Illustrative analysis</span>
      <div><b>4 responses</b><i aria-hidden="true">→</i><b>2 codes</b><i aria-hidden="true">→</i><b>1 theme</b></div>
      <strong>Communication & information</strong>
      <small>Compare groups: 18–34 ↑ · 35–54 → · 55+ ↓</small>
    </div>
  )
}
