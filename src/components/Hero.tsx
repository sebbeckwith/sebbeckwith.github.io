import { useState } from 'react'
import { ButtonLink, Container } from './SiteShell'
import { PlayIcon, VideoModal } from './VideoModal'
import { HeroProductMockup } from './HeroProductMockup'

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <Container>
          <div className="hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">Qualitative survey software</p>
              <h1 id="hero-title">We’ve reinvented <span>the survey.</span></h1>
              <p className="hero__lede">Gobby combines open questions, peer analysis and thematic analysis to help organisations understand what people think, experience and prioritise in their own words.</p>
              <div className="button-row">
                <ButtonLink href="#signup">Start free</ButtonLink>
                <button className="button button--secondary video-trigger" type="button" onClick={() => setVideoOpen(true)}>See how it works<PlayIcon circled /></button>
              </div>
              <p className="microcopy">No credit card required <span aria-hidden="true">·</span> 50 responses free</p>
            </div>
            <HeroProductMockup />
          </div>
        </Container>
      </section>
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </>
  )
}
