import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const MOCK_DATA = {
  title: 'Sacha super quizz app',
  description: '', //???
  question: 'Como se le dice en Argentina coloquialmente al automovil? ',
  maxChoicesAmount: 1,

}


// This will come from the server.
const choicesList = {
  id: '',
  text: '',
  choices: [
    'Carro',
    'Auto',
    'Coche',
    'Caballo'
  ],
  // The answer will be the correct string, it needs to makes sense to the user that he's not choosing A or B, but
  // it's content. Therefore, can be in _any_ given order. 
  correctChoice: 'Auto', 
  nextQuestion: {
    correct: '',
    incorrect: ''
  }, //Reference ID of the next question, if it's undefined, then it's the last question
}

function App() {
  const [choicesProgress, setChoicesProgress] = useState(0)
  const { title, description, choices, correctChoice, maxChoicesAmount } = MOCK_DATA

  return (
    <>
      <h1>{title}</h1>
      <form action="">
        <progress max={maxChoicesAmount} value={choicesProgress} />
        <ul>
          {choices.map((choice, i) => <li key={`choice-${i}`}>
            <label htmlFor={`choice-${i}`}>{choice}</label>
            <input type="radio" name={`choice-${i}`} id={`choice-${i}`} />
          </li>)}

        </ul>
        <legend>{description}</legend>
        <button>Next</button>
      </form>
    </>
  )
}

export default App
