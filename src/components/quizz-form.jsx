import { useState } from "react"
import questionsJSON from '../mock-data/one-choice.json'

// Components
import Choices from './choices'

export default function QuizzForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  // const [correctChoice, setCorrectChoice] = useState(questionsJSON[0].correctChoice)

  function nextQuestion() {
    if (currentQuestion === questionsJSON.length - 1) return

    setCurrentQuestion(currentQuestion + 1)
  }

  function handleSubmit() {
    
  }

  const { title, description, choices, correctChoice } = questionsJSON[currentQuestion]

  return (
    <form onSubmit={handleSubmit}>
      <div className="questions-container card p-0">
        <div className="question">
          <h4>{title}</h4>
          <fieldset>
            <legend>{description}</legend>

            <Choices choices={choices} questionIndex={i} correctChoice={correctChoice} />
          </fieldset>
        </div>
      </div>
      <button disabled={currentQuestion === questionsJSON.length - 1} onClick={nextQuestion}>Next</button>
    </form>
  )
}