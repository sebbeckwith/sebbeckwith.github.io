import { differentiators, journey } from '../data/homepage'
import { ClientLogoCarousel } from './ClientLogoCarousel'
import { JourneyFragment } from './ProductVisuals'
import { ButtonLink, Container } from './SiteShell'

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label">{children}</p>
}

export function TrustBand() {
  return (
    <section className="trust" aria-labelledby="trust-title">
      <Container>
        <div className="trust__heading"><h2 id="trust-title">Used by organisations listening differently.</h2></div>
        <ClientLogoCarousel />
      </Container>
    </section>
  )
}

export function Problem() {
  const problems = [
    {
      number: '01',
      title: <>Closed questions<br />limit truth.</>,
      text: <>Tick boxes and rating scales force people into answers that may not reflect how they really feel.</>,
      visual: (
        <div className="problem-card__survey">
          <strong>How satisfied are you?</strong>
          {['Very satisfied', 'Satisfied', 'Neither', 'Dissatisfied', 'Very dissatisfied'].map((answer) => (
            <span key={answer}><i className={answer === 'Satisfied' ? 'is-selected' : ''} />{answer}</span>
          ))}
        </div>
      ),
    },
    {
      number: '02',
      title: <>Open comments<br />get ignored.</>,
      text: <>People leave thoughtful feedback, but it gets buried in spreadsheets no one has time to read.</>,
      visual: (
        <div className="problem-card__comments" aria-hidden="true">
          <blockquote>“Communication could<br />be clearer ...”<i /></blockquote>
          <blockquote>“It would help if ...”<i /></blockquote>
          <blockquote>“There’s more to it than<br />that ...”<i /></blockquote>
        </div>
      ),
    },
    {
      number: '03',
      title: <>Data without context<br />leads nowhere.</>,
      text: <>Numbers alone cannot tell you why something is happening or what to do about it.</>,
      visual: (
        <div className="problem-card__data" aria-hidden="true">
          <div className="problem-chart">
            <span className="problem-chart__donut" />
            <span className="problem-chart__bar problem-chart__bar--one" />
            <span className="problem-chart__bar problem-chart__bar--two" />
            <span className="problem-chart__bar problem-chart__bar--three" />
            <span className="problem-chart__bar problem-chart__bar--four" />
            <i /><i /><i />
          </div>
          <svg className="problem-card__curve" viewBox="0 0 100 60" aria-hidden="true">
            <defs>
              <marker id="problem-arrowhead" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
                <path d="M0 0L8 4L0 8Z" />
              </marker>
            </defs>
            <path d="M4 5C18 49 58 55 94 19" markerEnd="url(#problem-arrowhead)" />
          </svg>
          <blockquote>“We know the score,<br />not the story.”</blockquote>
        </div>
      ),
    },
    {
      number: '04',
      title: <>One-way surveys<br />don’t build trust.</>,
      text: <>People share their views, but there is no visibility, no dialogue and no sign that anything changes.</>,
      visual: (
        <div className="problem-card__trust" aria-hidden="true">
          <div className="problem-card__bubbles">
            <blockquote>“We shared<br />our views.”</blockquote>
            <blockquote>“What changed?”</blockquote>
          </div>
          <div className="problem-card__people">
            <svg viewBox="0 0 80 80">
              <circle cx="40" cy="23" r="10" />
              <path d="M20 67c1-17 8-26 20-26s19 9 20 26M29 47c3 5 6 8 11 8s8-3 11-8" />
            </svg>
            <span>→</span>
            <svg viewBox="0 0 80 80">
              <path d="M17 68h46M23 68V19h34v49M31 29h5M44 29h5M31 39h5M44 39h5M31 49h5M44 49h5M37 68V57h6v11" />
            </svg>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className="problem" aria-labelledby="problem-title">
      <Container>
        <p className="problem__label">The problem with traditional surveys</p>
        <div className="problem__heading">
          <h2 id="problem-title">They ask questions.<br />But <span>they miss the point.</span></h2>
          <p>Traditional surveys are useful when you know what you need to measure. They are less useful when you need to discover what you have not thought to ask about yet.</p>
        </div>
        <div className="problem__cards">
          {problems.map((item) => (
            <article className="problem-card" key={item.number}>
              <span className="problem-card__number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="problem-card__visual">{item.visual}</div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function ProductJourney() {
  return (
    <section className="journey" id="how-it-works" aria-labelledby="journey-title">
      <Container>
        <div className="section-heading"><div><SectionLabel>How Gobby works</SectionLabel><h2 id="journey-title">From an open question<br />to a clear next step.</h2></div><p>Four stages take you from asking openly to evidence you can review and act on.</p></div>
        <ol className="journey__list">
          {journey.map((step) => <li key={step.number}><span className="journey__number">{step.number}</span><div className="journey__copy"><h3>{step.title}</h3><p>{step.text}</p></div><JourneyFragment step={step.number} /></li>)}
        </ol>
      </Container>
    </section>
  )
}

export function Differentiators() {
  return (
    <section className="difference" id="product" aria-labelledby="difference-title">
      <Container>
        <div className="section-heading difference__heading"><div><SectionLabel>Why Gobby is different</SectionLabel><h2 id="difference-title">Start with what people<br />actually say.</h2></div></div>
        <div className="difference__list">
          {differentiators.map((item) => <article key={item.index}><span className="difference__index">{item.index}</span><div className="difference__copy"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
        </div>
      </Container>
    </section>
  )
}

export function Manifesto() {
  return (
    <section className="manifesto" aria-labelledby="manifesto-title">
      <Container>
        <SectionLabel>A point of view</SectionLabel>
        <h2 id="manifesto-title">Built for change makers.<br /><span>Not box tickers.</span></h2>
        <div className="manifesto__words"><blockquote>More answers.<br />Fewer questions.</blockquote><p>The point is not fewer numbers. It is fewer assumptions. Good research leaves room for surprise, takes people’s words seriously and creates a visible route from feedback to action.</p></div>
      </Container>
    </section>
  )
}

export function Pricing() {
  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-title">
      <Container>
        <div><SectionLabel>Start listening</SectionLabel><h2 id="pricing-title">Try the question you actually want answered.</h2></div>
        <div className="pricing__action"><p>Start with up to <strong>50 responses</strong>. No credit card required.</p><div className="button-row"><ButtonLink href="#signup">Start free</ButtonLink><ButtonLink href="#contact" variant="secondary">Talk to us</ButtonLink></div><small>Need more than a first survey? Talk to us about the right next step.</small></div>
      </Container>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="final-cta" id="signup" aria-labelledby="final-title">
      <Container><h2 id="final-title">Ask better questions.<br />Hear better answers.</h2><ButtonLink href="#signup" variant="light">Start free</ButtonLink></Container>
    </section>
  )
}
