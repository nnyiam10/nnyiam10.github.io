import PageContainer from '../components/PageContainer'
import { useState } from 'react'
import ResumeGate from './ResumeGate'

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
  const [authorized, setAuthorized] = useState(false)
  const [problem] = useState(() => generateProblem())
  const [input, setInput] = useState('')
  const [incorrect, setIncorrect] = useState(false)
  const [showFlatiron, setShowFlatiron] = useState(false)
  const [showDoorDash, setShowDoorDash] = useState(false)
  const [showAmazon, setShowAmazon] = useState(false)
  const [showHadrius, setShowHadrius] = useState(false)
  const [showSilna, setShowSilna] = useState(false)
  const [showRamp, setShowRamp] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    if (Number(input) == problem.answer) {
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
      <h2 className='resume-category'>Work Experience</h2>

      <section className="resume-section">
        <div
          className="resume-header"
          onClick={() => setShowHadrius(prev => !prev)}
        >
          <h2>
            <span className={`dropdown-icon ${showHadrius ? 'open' : ''}`}>
              ▶
            </span>
            
            {' '}
            Software Engineer at{' '}
            <a
              href="https://www.hadrius.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Hadrius
            </a>
          </h2>
          <p className="resume-meta">
            March 2026 – Present • New York, NY
          </p>
        </div>
        
        {showHadrius && (
          <ul>
            <li>Currently working on marketing review!</li>
          </ul>
        )}
      </section>

      <section className="resume-section">
        <div
          className="resume-header"
          onClick={() => setShowSilna(prev => !prev)}
        >
          <h2>
            <span className={`dropdown-icon ${showSilna ? 'open' : ''}`}>
              ▶
            </span>
            
            {' '}
            Software Engineer at{' '}
            <a
              href="https://www.silnahealth.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Silna Health
            </a>
          </h2>
          <p className="resume-meta">
            April 2025 – March 2026 • New York, NY
          </p>
        </div>
        
        {showSilna && (
          <ul>
            <li>Founding team member (engineer #6, employee #15), contributing to core platform development over a period of 3x ARR growth.</li>
            <li>Mocked up and implemented state-transition for prior authorizations, allowing us to trace changes and form auditable chains of authorization updates.</li>
            <li>Built and maintained  prior authorization automation pipelines. Including:</li>
            <ul>
              <li>A pre-submission OCR workflow using Azure Document Intelligence and LLM-based field extraction.</li>
              <li>Rule based overrides for said extraced fields and customizable prompting based on payor, provider, specialty, etc.</li>
              <li>Backtesting against existing completed prior authorizaitons (ground truth) to identify systematic errors.</li>
            </ul>
          </ul>
        )}
      </section>

      <section className="resume-section">
        <div
          className="resume-header"
          onClick={() => setShowRamp(prev => !prev)}
        >
          <h2>
            <span className={`dropdown-icon ${showRamp ? 'open' : ''}`}>
              ▶
            </span>
            
            {' '}
            Software Engineer at{' '}
            <a
              href="https://ramp.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Ramp
            </a>
          </h2>

          <p className="resume-meta">
            May 2024 – April 2025 • New York, NY
          </p>
        </div>

        {showRamp && (
          <ul>
            <li>Developed a check name verification system to counter check washing fraud, processing hundreds of checks per day and improving verification accuracy from ~90% to 99.5%.</li>
            <li>Built a large portion of the backed for Ramp Business Accounts, specifcally allowing pushing and pulling via ACH Credit, Wire, or Real Time Payment.</li>
            <li>Built out real-time check tracking by surfacing status and location transitions to users as they occured.</li>
            <li>Developed an automated balance top-up system for delinquent accounts, using Celery to schedule daily asynchronous balance replenishment worflows.</li>
          </ul>
        )}
      </section>

      <section className="resume-section">
        <div
          className="resume-header"
          onClick={() => setShowFlatiron(prev => !prev)}
        >
          <h2>
            <span className={`dropdown-icon ${showFlatiron ? 'open' : ''}`}>
              ▶
            </span>
            
            {' '}
            Software Engineering Intern at{' '} 
            <a
              href="https://www.doordash.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Flatiron Health
            </a>
          </h2>
          <p className="resume-meta">
            June 2023 – August 2023 • New York, NY
          </p>
        </div>

        {showFlatiron && (
          <ul>
            <li>Worked with the Enhanced Datamart (EDM) team on an automated AWS key rotation system for enterprise healthcare data clients, replacing a manual credential rotation workflow.</li>
            <li>Added frontend enhancements to internal React-based subscription management tooling, including feature flagged UI support for automated key rotation controls.</li>
            <li>Worked on a hackathon project to improve the speed and accuracy of medical data abstraction workflows.</li>
          </ul>
        )}
      </section>
      
      <section className="resume-section">
        <div
          className="resume-header"
          onClick={() => setShowDoorDash(prev => !prev)}
        >
          <h2>
            <span className={`dropdown-icon ${showDoorDash ? 'open' : ''}`}>
              ▶
            </span>
            
            {' '}
            Software Engineering Intern at{' '}
            
            <a
              href="https://www.doordash.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              DoorDash
            </a>
          </h2>

          <p className="resume-meta">
            May 2022 – August 2022 • San Francisco, CA
          </p>
        </div>

        {showDoorDash && (
          <ul>
            <li>Automated group and user management for the internal engineering platform using a scheduled, asynchronous Kotlin workflow that ingested data from multiple APIs into CockroachDB.</li>
            <li>Resolved collision issues on the CockroachDB table for group data, decreasing the latency of fetching group info from ~700ms to ~80ms.</li>
          </ul>
        )}
      </section>

      <section className="resume-section">
        <div
          className="resume-header"
          onClick={() => setShowAmazon(prev => !prev)}
        >
          <h2>
            <span className={`dropdown-icon ${showAmazon ? 'open' : ''}`}>
              ▶
            </span>
            
            {' '}
            Software Engineering Intern at{' '}
            
            <a
              href="https://amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Amazon
            </a>
          </h2>

          <p className="resume-meta">
            June 2021 – September 2021 • Seattle, WA
          </p>
        </div>

        {showAmazon && (
          <ul>
            <li>Developed a full-stack admin tool to manage employee account access in fulfillment centers using React, Node.js, and serverless AWS infrastructure.</li>
          </ul>
        )}
      </section>

      {/* <h2 className="resume-category">Education</h2> */}
    </PageContainer>
  )
}
