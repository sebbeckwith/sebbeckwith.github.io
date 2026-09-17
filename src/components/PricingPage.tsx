import { ButtonLink, Container } from './SiteShell'

const plans = [
  {
    name: 'Free',
    audience: 'Individual with optional PAYG',
    price: '£0',
    cadence: 'per month',
    description: 'Try Gobby properly before deciding whether you need more.',
    features: ['50 responses free', 'Try before you buy', 'All survey creation capabilities', 'Analyse responses using Gobby’s tools', 'Flexible PAYG pricing for occasional survey needs'],
    action: 'Try now',
    href: '#signup',
  },
  {
    name: 'Monthly',
    audience: 'Individual or team',
    price: '£42',
    cadence: 'per seat / month',
    description: 'Flexible monthly access for regular surveys and collaborative work.',
    features: ['2,500 responses per seat / month', 'Create teams and collaborate on surveys', 'All survey creation capabilities', 'Analyse responses using Gobby’s tools', 'Additional responses can be purchased if required'],
    action: 'Buy monthly',
    href: '#pricing-contact',
  },
  {
    name: 'Yearly',
    audience: 'Individual or team',
    originalPrice: '£504',
    price: '£378',
    cadence: 'per seat / year',
    description: 'A full year of Gobby with a 25% saving on the monthly price.',
    features: ['30,000 responses per seat / year', 'Full capabilities of a monthly subscription for a whole year', 'Additional responses can be purchased if required', 'Save 25% on the monthly price'],
    action: 'Buy yearly',
    href: '#pricing-contact',
  },
] as const

const pricingQuestions = [
  ['What is included in the free plan?', 'The free plan includes 50 responses, all survey creation capabilities and access to Gobby’s analysis tools. No credit card is required.'],
  ['How does monthly pricing work?', 'Monthly access costs £42 per seat and includes 2,500 responses per seat each month. Additional responses can be purchased when required.'],
  ['How much does yearly billing save?', 'Yearly access costs £378 per seat instead of £504, saving 25% compared with paying monthly for a full year.'],
  ['What are response credits?', 'Response credits are a pay-as-you-go option for occasional survey needs. Credits can be added to your account and used toward a Gobby survey.'],
] as const

const creditPacks = [
  ['300 response credits', '£15'],
  ['600 response credits', '£25'],
  ['1,250 response credits', '£40'],
  ['2,500 response credits', '£60'],
] as const

export function PricingPage() {
  return (
    <main id="main" className="pricing-page">
      <section className="pricing-hero" aria-labelledby="pricing-page-title">
        <Container>
          <p className="section-label">Simple, flexible pricing</p>
          <h1 id="pricing-page-title">Choose what<br /><span>works for you.</span></h1>
          <p>Start free, pay monthly or save with a yearly plan. Pay-as-you-go response credits are available when you only need an occasional top-up.</p>
        </Container>
      </section>

      <section className="pricing-plans" aria-label="Pricing plans">
        <Container>
          <div className="pricing-plans__grid">
            {plans.map((plan, index) => (
              <article className={`pricing-plan${index === 1 ? ' pricing-plan--featured' : ''}${index === 2 ? ' pricing-plan--dark' : ''}`} id={index === 0 ? 'signup' : undefined} key={plan.name}>
                <p className="pricing-plan__name">{plan.name}</p>
                <p className="pricing-plan__audience">{plan.audience}</p>
                <h2>{'originalPrice' in plan && <del>{plan.originalPrice}</del>}{plan.price}</h2>
                <p className="pricing-plan__cadence">{plan.cadence}</p>
                <p className="pricing-plan__description">{plan.description}</p>
                <ul>{plan.features.map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
                <ButtonLink href={plan.href} variant={index === 2 ? 'light' : 'primary'}>{plan.action}</ButtonLink>
              </article>
            ))}
          </div>
          <section className="payg" aria-labelledby="payg-title">
            <div className="payg__heading"><div><p className="section-label">Pay as you go</p><h2 id="payg-title">Only need a top-up?</h2></div><p>Response credits can contribute to one of your Gobby surveys. Add credits to your account whenever you need them.</p></div>
            <div className="payg__packs">{creditPacks.map(([credits, price]) => <a href="#pricing-contact" key={credits}><strong>{credits}</strong><span>{price}</span></a>)}</div>
            <small>Choose a subscription if you work as part of a team or create surveys regularly.</small>
          </section>
        </Container>
      </section>

      <section className="pricing-principles" aria-labelledby="pricing-principles-title">
        <Container>
          <div>
            <p className="section-label">What stays consistent</p>
            <h2 id="pricing-principles-title">The plan changes.<br />The principles don’t.</h2>
          </div>
          <ul>
            <li><span>01</span><strong>People answer in their own words.</strong></li>
            <li><span>02</span><strong>Choose free, monthly, yearly or occasional top-ups.</strong></li>
            <li><span>03</span><strong>AI assists; people remain responsible for judgement.</strong></li>
          </ul>
        </Container>
      </section>

      <section className="pricing-faq" aria-labelledby="pricing-faq-title">
        <Container>
          <div><p className="section-label">Pricing questions</p><h2 id="pricing-faq-title">Before you choose.</h2></div>
          <div>{pricingQuestions.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
        </Container>
      </section>

      <section className="pricing-contact" id="pricing-contact" aria-labelledby="pricing-contact-title">
        <Container>
          <div><p className="section-label">Need a larger plan?</p><h2 id="pricing-contact-title">Tell us what you need to hear.</h2></div>
          <div><p>Share your expected response volume, team size and project goals. We’ll use that context to shape the right next step.</p><ButtonLink href="/#contact" variant="light">Start a conversation</ButtonLink></div>
        </Container>
      </section>
    </main>
  )
}
