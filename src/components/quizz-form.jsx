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

  function handleMultipleChoiceClick() {
    const allChoices = document.querySelectorAll('.choice')
    const checkedChoices = [...allChoices]
      .filter(choice => choice.children[0].checked)
      .map(choice => choice.children[0].value)

    setChoiceSelected(true)
    
    if (!checkedChoices.length) {
      setChoiceSelected(false)
      return
    }

    allChoices.forEach(el => {
      if (correctChoice.includes(el.children[0].value))
        el.classList.add('correct')
      else if (el.children[0].checked)
        el.classList.add('incorrect')
    })

    if (checkedChoices.length !== correctChoice.length) return

    let correctUserChoiceCount = 0

    checkedChoices.forEach(choice => {
      if (correctChoice.includes(choice))
        correctUserChoiceCount++
    })

    if (correctUserChoiceCount === correctChoice.length) {
      setScore(score + 1)
    }
  }

  async function handleInputQuestion() {
    const userAnswer = document.querySelector('#answer').value

    const result = await verifyInputQuestion(title, userAnswer, setLoadingLLM)
    const message = result.choices[0].message.content
    console.log(result.choices[0].message.content)
    setLLMResponse(message)
    setChoiceSelected(true)

    if (result.choices[0].message.content === "True") {
      setScore(score + 1)
    }
  }


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