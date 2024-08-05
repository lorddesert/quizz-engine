import { useState } from "react"
import questionsJSON from '../mock-data/claude-v2.json'
// Components
import Choices from './choices'
import Navigation from "./navigation"
import { GAMEMODES, verifyInputQuestion } from "../utils"
import Button from "./button"
import CreditedImage from "./credited-image"

export default function QuizzForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [choiceSelected, setChoiceSelected] = useState(false)
  const [score, setScore] = useState(0)
  const [loadingLLM, setLoadingLLM] = useState('')
  const [LLMResponse, setLLMResponse] = useState('')
  const [answerWasCorrect, setAnswerWasCorrect] = useState(false)
  const [hasFinished, setHasFinised] = useState(false)
  const { title = '', description = '', choices = [], correctChoice = [], gameMode = '', image = '' } = questionsJSON[currentQuestion] || {}

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

    // setCurrentQuestion(currentQuestion + 1)
    console.log(nextQuestion)
    setCurrentQuestion(nextQuestion)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit')
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

    const result = await verifyInputQuestion(title, userAnswer, setLoadingLLM)
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
      <form onSubmit={handleSubmit} className="card box-shadow">
        <div className="questions-container">
          <div className="question">
            <div style={{ display: 'grid' }}>
              <label htmlFor="quizz-progress"></label>
              <progress id="quizz-progress" max={questionsJSON.length} value={currentQuestion} />
              <span className="text-center">Score: {score}</span>
            </div>
            <h4>{title}</h4>
            <CreditedImage image={image} />
            {gameMode === GAMEMODES.INPUT_QUESTION
              ? <>
                <textarea rows={10} placeholder="Your answer..." style={{ width: '100%' }} name="answer" id="answer"></textarea>
                <span className="llm-response">Is correct: {LLMResponse}</span>
              </>
              :
              <fieldset>
                <Choices
                  {...{
                    choices,
                    correctChoice,
                    setChoiceSelected,
                    choiceSelected,
                    setScore,
                    score,
                    gamemode: gameMode
                  }}
                />

                {gameMode === GAMEMODES.INPUT_QUESTION && <>
                  <textarea style={{ width: '100%' }} name="answer" id="answer"></textarea>
                  <span className="llm-response">Is correct: {LLMResponse}</span>
                </>
                }

                <legend>{description}</legend>
              </fieldset>
            }
          </div>
        </div>
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
      </form>
      {loadingLLM && <span className="llm-response toast card box-shadow">{loadingLLM}</span>
      }
    </>
  )
}