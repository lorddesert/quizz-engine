import { useState } from "react"
import questionsJSON from '../mock-data/one-choice.json'

// Components
import Choices from './choices'

export default function QuizzForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  // const [correctChoice, setCor ectChoice] = useState(questionsJSON[0].correctChoice)
  const [choiceSelected, setChoiceSelected] = useState(false)
  const [score, setScore] = useState(0)


  function nextQuestion() {
    if (currentQuestion === questionsJSON.length - 1) return

    const form = document.querySelector('form')

    document.querySelector('.correct').classList.remove('correct')
    document.querySelector('.incorrect')?.classList?.remove('incorrect')

    form.reset()

    setChoiceSelected(false)
    setCurrentQuestion(currentQuestion + 1)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  const { title, description, choices, correctChoice } = questionsJSON[currentQuestion]

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="questions-container">
        <div className="question">
          <progress max={questionsJSON.length} />
          <span className="text-center">Score: {score}</span>
          <h4>{title}</h4>
          <fieldset>
            <Choices
              {...{
                choices,
                correctChoice,
                setChoiceSelected,
                choiceSelected,
                setScore,
                score
              }}
            />
            <legend>{description}</legend>
          </fieldset>
        </div>
      </div>
      <button disabled={
        currentQuestion === questionsJSON.length - 1
        || !choiceSelected
      } onClick={nextQuestion}
        style={{
          width: '100%'
        }}
      >
        Next
      </button>
    </form>
  )
}