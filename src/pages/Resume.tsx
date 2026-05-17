import PageContainer from '../components/PageContainer'
import ResumeGate from '../components/ResumeGate'
import Timeline from '../components/Timeline'


import { useState } from 'react'
import type { FormEvent } from 'react'

function generateProblem() {
  const type = Math.floor(Math.random() * 4)

  if (type == 0) {
    const a = Math.floor(Math.random() * 20)
    const b = Math.floor(Math.random() * 20)
    return {
      question: `${a} + ${b}`,
      answer: a + b
    }
  }

  if (type === 1) {
    const a = Math.floor(Math.random() * 20) + 5
    const b = Math.floor(Math.random() * 5)

    return {
      question: `${a} - ${b}`,
      answer: a - b
    }
  }

  if (type === 2) {
    const a = Math.floor(Math.random() * 10)
    const b = Math.floor(Math.random() * 10)

    return {
      question: `${a} × ${b}`,
      answer: a * b
    }
  }

  const base = Math.floor(Math.random() * 4) + 2
  const exp = 2

  return {
    question: `${base}^${exp}`,
    answer: base ** exp
  }
}

export default function Resume() {
  const [authorized, setAuthorized] = 
    useState(
      sessionStorage.getItem('resumeAuthorized') == 'true'
    )
  const [problem] = useState(() => generateProblem())
  const [input, setInput] = useState('')
  const [incorrect, setIncorrect] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    sessionStorage.setItem(
      'resumeAuthorized',
      'true'
    )
    e.preventDefault()

    if (Number(input) === problem.answer) {
      setAuthorized(true)
    } else {
      setIncorrect(true)
      setInput('')
    }
  }

  if (!authorized) {
    return (
      <PageContainer>
        <ResumeGate
          input={input}
          setInput={setInput}
          incorrect={incorrect}
          setIncorrect={setIncorrect}
          handleSubmit={handleSubmit}
          problem={problem}
        />
      </PageContainer>
    )
  }
  
  return (
    <PageContainer>
      <h2 className='resume-category work-title'>Work Experience</h2>
      <Timeline />
    </PageContainer>
  )
}
