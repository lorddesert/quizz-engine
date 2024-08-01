import { useState } from 'react'
import './App.css'
import QUIZ_SET from './mock-data/one-choice.json'

function App() {
  const questions = QUIZ_SET
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0)
  const { title, choices, description, image } = questions[selectedQuestionIndex]

  const gamemode = ''
  return (
    <>
      <h1>Quizzork (Quizz engine)</h1>
      <div className="card">
        <ul className='gamemode-selector'>
          <li className="card"><a href="/one-choice">One choice</a></li>
          <li className="card"><a href="/multiple-choice">Multiple choice</a></li>
          <li className="card"><a href="/input-choice">Input choice</a></li>
        </ul>
        <form onSubmit={e => {
          e.preventDefault()
        }}>
          <input type="text" />
          <button>Next</button>
          <h3>{title}</h3>
          <figure>
            <img src={image} alt="Image for the question" />
          </figure>
          <legend>{description}</legend>
          <progress max={questions.length} value={selectedQuestionIndex + 1} />
          <ul>
            {choices.map(choice => <li className='card' key={`choice-${choice}`}>
              <label htmlFor={`choice-${choice}`}>
                <input type="radio" name="choice" id={`choice-${choice}`} />
                {choice}
              </label>
            </li>)}
          </ul>
          <button onClick={e => {
            if (selectedQuestionIndex <= 0) return
            setSelectedQuestionIndex(selectedQuestionIndex - 1)
          }}>Previous question</button>
          <button onClick={e => {
            if (selectedQuestionIndex === questions.length - 1) return
            setSelectedQuestionIndex(selectedQuestionIndex + 1)
          }}>Next question</button>
        </form>
      </div>
    </>

  )
}

export default App
