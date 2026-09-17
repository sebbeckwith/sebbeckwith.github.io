import { solutionPages, type SolutionSlug } from '../data/solutions'
import { ButtonLink, Container } from './SiteShell'

export function SolutionPage({ slug }: { slug: SolutionSlug }) {
  const solution = solutionPages[slug]

  return (
    <main id="main" className="solution-page">
      <section className="solution-hero" aria-labelledby="solution-title">
        <Container>
          <p className="section-label">Solutions · {solution.eyebrow}</p>
          <h1 id="solution-title">{solution.title}</h1>
          <p>{solution.intro}</p>
          <div className="button-row"><ButtonLink href="/pricing#signup">Start free</ButtonLink><ButtonLink href="/#how-it-works" variant="secondary">See how it works</ButtonLink></div>
        </Container>
      </section>
      <section className="solution-fit" aria-labelledby="solution-fit-title">
        <Container>
          <div><p className="section-label">Where Gobby helps</p><h2 id="solution-fit-title">Ask openly.<br />Understand more.</h2></div>
          <ol>{solution.points.map((point, index) => <li key={point}><span>{String(index + 1).padStart(2, '0')}</span><strong>{point}</strong></li>)}</ol>
        </Container>
      </section>
      <section className="solution-cta">
        <Container><h2>Start with the question<br />you need answered.</h2><ButtonLink href="/pricing#signup" variant="light">View pricing</ButtonLink></Container>
      </section>
    </main>
  )
}
