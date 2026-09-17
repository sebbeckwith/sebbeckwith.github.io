import type { CSSProperties } from 'react'
import postOfficeLogo from '../../Post_Office_Logo.svg'
import { caseStudyPlaceholder, useCases } from '../data/homepage'
import { Container } from './SiteShell'

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label">{children}</p>
}

export function ProofAndUses() {
  return (
    <section className="evidence" id="uses" aria-labelledby="uses-title">
      <Container>
        <article className="evidence__proof">
          <img className="evidence__stamp" src={postOfficeLogo} alt="Post Office" />
          <p className="proof-label">{caseStudyPlaceholder.label}</p>
          <h2>{caseStudyPlaceholder.organisation}</h2>
          <blockquote>“{caseStudyPlaceholder.quote}”</blockquote>
          <p>{caseStudyPlaceholder.context}</p>
          <footer>{caseStudyPlaceholder.attribution}</footer>
        </article>
        <div className="uses">
          <h2 id="uses-title">Different questions.<br />The same need to understand.</h2>
          <p className="uses__intro">Use Gobby wherever people need room to explain what they think, feel or experience.</p>
          <ul>{useCases.map((item) => <li key={item.number}><span>{item.number}</span><a href="#contact"><span><strong>{item.title}</strong><small>{item.text}</small></span><b aria-hidden="true">↗</b></a></li>)}</ul>
        </div>
      </Container>
    </section>
  )
}

export function ThematicInsight() {
  return (
    <section className="analysis" id="analysis" aria-labelledby="analysis-title">
      <Container>
        <div className="analysis__heading">
          <div><SectionLabel>Thematic analysis</SectionLabel><h2 id="analysis-title">From raw answers<br />to themes you can inspect.</h2></div>
          <p>Code and organise open-text responses, review the evidence behind each theme and compare what different participant groups are saying.</p>
        </div>

        <div className="analysis-flow" aria-label="Illustrative thematic analysis from raw responses to reporting">
          <div className="analysis-flow__stage analysis-flow__responses">
            <span>01 · Raw responses</span>
            <blockquote>“Communication was unclear.”</blockquote>
            <blockquote>“I never knew what was happening next.”</blockquote>
            <blockquote>“We heard about changes too late.”</blockquote>
            <blockquote>“Updates were inconsistent.”</blockquote>
          </div>
          <i aria-hidden="true">→</i>
          <div className="analysis-flow__stage analysis-flow__codes">
            <span>02 · Codes</span>
            <b>Communication</b><b>Timeliness</b><b>Transparency</b>
          </div>
          <i aria-hidden="true">→</i>
          <div className="analysis-flow__stage analysis-flow__theme">
            <span>03 · Theme</span>
            <strong>Communication & information</strong>
            <small>4 linked source responses</small>
          </div>
          <i aria-hidden="true">→</i>
          <div className="analysis-flow__stage analysis-flow__report">
            <span>04 · Review & report</span>
            <p><b>Evidence</b><small>Responses attached</small></p>
            <p><b>Review</b><small>Human-reviewed</small></p>
            <p><b>Output</b><small>Insight summary</small></p>
          </div>
        </div>
        <p className="analysis__assistance"><strong>Optional AI assistance</strong> can help identify and organise possible themes. People remain responsible for reviewing the evidence and deciding what the findings mean.</p>

        <div className="representation">
          <div>
            <SectionLabel>Compare participant groups</SectionLabel>
            <h3>Don’t let the majority hide the minority.</h3>
            <p>A theme does not have to be the biggest to matter. Compare patterns across demographic or participant groups to see where experiences align and where smaller, less visible patterns differ from the average.</p>
            <small>This illustrative comparison does not imply statistical representativeness.</small>
          </div>
          <div className="representation__chart" aria-label="Illustrative theme comparison across three age groups">
            <p><span>Theme prevalence · illustrative</span><strong>Communication & information</strong></p>
            <div><span>Age 18–34</span><i style={{ '--bar-size': '74%' } as CSSProperties} /><b>Higher</b></div>
            <div><span>Age 35–54</span><i style={{ '--bar-size': '48%' } as CSSProperties} /><b>Mid</b></div>
            <div><span>Age 55+</span><i style={{ '--bar-size': '27%' } as CSSProperties} /><b>Lower</b></div>
            <footer>Inspect each group → Review linked responses</footer>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function UseCasesSection() {
  return (
    <section className="use-cases" id="uses" aria-labelledby="uses-title">
      <Container>
        <div className="use-cases__heading"><SectionLabel>Ways to use Gobby</SectionLabel><h2 id="uses-title">What are you trying<br />to understand?</h2><p>Sectors describe who Gobby serves. These use cases describe the listening work teams are doing.</p></div>
        <ul>{useCases.map((item) => <li key={item.number}><span>{item.number}</span><a href="#contact"><span><strong>{item.title}</strong><small>{item.text}</small></span><b aria-hidden="true">↗</b></a></li>)}</ul>
      </Container>
    </section>
  )
}

export function CaseStudySection() {
  return (
    <section className="case-study" aria-labelledby="case-study-title">
      <Container>
        <div className="case-study__intro"><SectionLabel>Customer proof</SectionLabel><h2 id="case-study-title">Evidence over<br />empty praise.</h2><p>This structure is ready for an approved customer story focused on the research problem, approach, learning and result.</p></div>
        <article className="case-study__paper">
          <img className="evidence__stamp" src={postOfficeLogo} alt="Post Office" />
          <p className="proof-label">{caseStudyPlaceholder.label}</p>
          <h3>{caseStudyPlaceholder.organisation}</h3>
          <blockquote>“{caseStudyPlaceholder.quote}”</blockquote>
          <p>{caseStudyPlaceholder.context}</p>
          <footer>{caseStudyPlaceholder.attribution}</footer>
        </article>
      </Container>
    </section>
  )
}

export function TrustInfrastructure() {
  return (
    <section className="trust-infrastructure" aria-labelledby="trust-infrastructure-title">
      <Container>
        <div className="trust-infrastructure__heading"><SectionLabel>Trust infrastructure</SectionLabel><h2 id="trust-infrastructure-title">Serious listening<br />needs serious trust.</h2></div>
        <div className="trust-infrastructure__grid">
          <article><span>01</span><h3>Participant handling</h3><p>Peer interactions can present relevant responses without participant names. Open text should still be reviewed for details that could identify an individual.</p></article>
          <article><span>02</span><h3>Security & data</h3><p>Hosting location, retention controls and security assurances need confirmed product documentation before they are published as customer claims.</p><small>Development placeholder · verification required</small></article>
          <article><span>03</span><h3>Optional AI</h3><p>AI can support coding and theme organisation. It remains optional, and people review the underlying evidence and decide what the analysis means.</p></article>
        </div>
      </Container>
    </section>
  )
}

