import { useId, useState } from 'react'
import { faqs } from '../data/homepage'
import { Container } from './SiteShell'

function FaqItem({ answer, index, question }: { answer: string; index: number; question: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const answerId = useId()

  return (
    <div className={`faq__item${isOpen ? ' faq__item--open' : ''}`}>
      <button type="button" aria-controls={answerId} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
        <span>{String(index + 1).padStart(2, '0')}</span>
        {question}
        <i aria-hidden="true">+</i>
      </button>
      <div className="faq__answer" id={answerId} aria-hidden={!isOpen}>
        <div><p>{answer}</p></div>
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <Container>
        <div className="faq__intro"><p className="section-label">Useful answers</p><h2 id="faq-title">Before you ask.</h2><p>Clear answers about the approach, without the software fog.</p></div>
        <div className="faq__list">
          {faqs.map(([question, answer], index) => (
            <FaqItem answer={answer} index={index} key={question} question={question} />
          ))}
        </div>
      </Container>
    </section>
  )
}
