import { useEffect } from 'react'
import { Faq } from './components/Faq'
import { Hero } from './components/Hero'
import { Differentiators, FinalCta, Manifesto, Problem, ProductJourney, TrustBand } from './components/HomeSections'
import { ProofAndUses } from './components/InsightSections'
import { PricingPage } from './components/PricingPage'
import { SiteFooter, SiteHeader } from './components/SiteShell'
import { SolutionPage } from './components/SolutionPage'
import { solutionPages, type SolutionSlug } from './data/solutions'

function App() {
  const pricingPage = window.location.pathname === '/pricing'
  const possibleSolution = window.location.pathname.replace(/^\/solutions\//, '')
  const solutionSlug = window.location.pathname.startsWith('/solutions/') && possibleSolution in solutionPages ? possibleSolution as SolutionSlug : null

  useEffect(() => {
    document.title = pricingPage ? 'Pricing | Gobby' : solutionSlug ? `${solutionPages[solutionSlug].title} | Gobby` : 'Gobby | Qualitative Survey Software for Open-Text Insight'
  }, [pricingPage, solutionSlug])

  return (
    <>
      <SiteHeader />
      {pricingPage ? <PricingPage /> : solutionSlug ? <SolutionPage slug={solutionSlug} /> : (
        <main id="main">
          <Hero />
          <TrustBand />
          <Differentiators />
          <ProductJourney />
          <Problem />
          <ProofAndUses />
          <Manifesto />
          <Faq />
          <FinalCta />
        </main>
      )}
      <SiteFooter />
    </>
  )
}

export default App
