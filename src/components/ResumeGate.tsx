import type { FormEvent } from 'react'

interface Problem {
  question: string
  answer: number
}

interface ResumeGateProps {
  input: string

  setInput: React.Dispatch<
    React.SetStateAction<string>
  >

  incorrect: boolean

  setIncorrect: React.Dispatch<
    React.SetStateAction<boolean>
  >

  handleSubmit: (
    e: FormEvent<HTMLFormElement>
  ) => void

  problem: Problem
}

export default function ResumeGate({
  input,
  setInput,
  incorrect,
  setIncorrect,
  handleSubmit,
  problem
}: ResumeGateProps) {
  return (
    <div className="resume-gate">
      <p className="resume-gate-description">
        Please answer the question below to proceed.
      </p>

      <p className="resume-gate-question">
        What is {problem.question}?
      </p>


      <form onSubmit={handleSubmit}>
        <div className="resume-gate-row">
          <input
            type="text"
            value={input}
            onChange={(e) => {
                setInput(e.target.value)
                setIncorrect(false)
            }}
            placeholder="Enter answer"
          />

          <button type="submit">
            Unlock
          </button>
        </div>
      </form>

      {incorrect && (
        <p className="resume-gate-error">
          Incorrect answer.
        </p>
      )}
    </div>
  )
}