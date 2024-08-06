import { useState } from "react"
import questionsJSON from '../mock-data/claude-v3.json'

// Components
import Navigation from "./navigation"
import { verifyInputQuestion } from "../utils"
import Button from "./button"
import CreditedImage from "./credited-image"
import QuizzProgress from "./quizz-progress"
import QuizzInputs from "./quizz-inputs"

export default function QuizzForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [choiceSelected, setChoiceSelected] = useState(false)
  const [score, setScore] = useState(0)
  const [loadingLLM, setLoadingLLM] = useState('')
  const [LLMResponse, setLLMResponse] = useState('')
  const [answerWasCorrect, setAnswerWasCorrect] = useState(false)
  const [hasFinished, setHasFinised] = useState(false)

  const {
    title = '',
    description = '',
    choices = [],
    correctChoice = [],
    gameMode = '',
    image = '',
    question = ''
  } = questionsJSON[currentQuestion] || {}

  function nextQuestion() {
    if (currentQuestion === questionsJSON.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      return setHasFinised(true)
    }

    const form = document.querySelector('form')
    let nextQuestion
    const currentFormQuestion = questionsJSON[currentQuestion]

    document.querySelector('.correct')?.classList?.remove('correct')
    document.querySelector('.incorrect')?.classList?.remove('incorrect')

    form.reset()
    setLLMResponse('')
    setChoiceSelected(false)

    nextQuestion = questionsJSON.findIndex(question => {
      const nextCorrectQuestion = questionsJSON.find(question => {
        if (answerWasCorrect)
          return currentFormQuestion.nextQuestion.correct === question.id
        else
          return currentFormQuestion.nextQuestion.incorrect === question.id
      })

      return question.id === nextCorrectQuestion.id
    })

    setAnswerWasCorrect(false)
    setCurrentQuestion(nextQuestion)
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
      setAnswerWasCorrect(true)
    }
  }

  async function handleInputQuestion() {
    const userAnswer = document.querySelector('#answer').value

    setChoiceSelected(true)

    const result = await verifyInputQuestion(question, userAnswer, setLoadingLLM)
    const message = result.choices[0].message.content
    setLLMResponse(message)

    if (result.choices[0].message.content === 'Yes') {
      setScore(score + 1)
      setAnswerWasCorrect(true)
    }

    document.querySelector('.toast').classList.add('correct')
    setTimeout(() => {
      document.querySelector('.toast').classList.remove('correct')
      setLoadingLLM('')
    }, 1000)
  }

  async function restartGame() {
    setCurrentQuestion(0)
    setLLMResponse('')
    setChoiceSelected(false)
    setHasFinised(false)
    setScore(0)
  }

  if (hasFinished) {
    return (
      <div className="card">
        <h1>You finished!</h1>
        <h2>Score: {score}</h2>
        <Button onClick={restartGame}>Restart</Button>
      </div>
    )
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="card box-shadow">
        <QuizzProgress max={questionsJSON.length} value={currentQuestion} />
        <hgroup>
          <h3>{title}</h3>
          <h4>{question}</h4>
        </hgroup>
        <CreditedImage image={image} id={questionsJSON[currentQuestion].id} />

        <QuizzInputs
          {...{
            gameMode,
            LLMResponse,
            choices,
            correctChoice,
            setChoiceSelected,
            choiceSelected,
            setScore,
            score,
            setAnswerWasCorrect,
            description
          }}
        />

        <div style={{ marginTop: '10px' }}>
          <Navigation {
            ...{
              currentQuestion,
              nextQuestion,
              questions: questionsJSON,
              choiceSelected,
              gamemode: gameMode,
              handleMultipleChoiceClick,
              handleInputQuestion,
              LLMResponse
            }
          } />
        </div>
      </form>
      {loadingLLM && <span className="llm-response toast card">{loadingLLM}</span>}
    </>
  )
}