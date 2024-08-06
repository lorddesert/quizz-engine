import { useRef } from "react"

export default function Choice({
  choice,
  name,
  correctChoice,
  setChoiceSelected,
  choiceSelected,
  setScore,
  score,
  setAnswerWasCorrect
}) {
  const ref = useRef()
  function handleClick() {
    if (choiceSelected) return

    const input = ref.current
    const allChoices = document.querySelectorAll('.choice')

    allChoices.forEach((item) => {
      if (input.value === correctChoice) {
        setScore(score + 1)
        setAnswerWasCorrect(true)
      }

      if (item.textContent === correctChoice) {
        item.classList.add('correct')
      }

      if (item.textContent === choice && choice !== correctChoice) {
        item.classList.add('incorrect')
      }

      setChoiceSelected(true)
    })

    input.checked = true
  }

  return (
    <li className="choice" onClick={handleClick}>
      <input
        type='radio'
        name={name}
        disabled={choiceSelected}
        ref={ref}
        id={`choice-${choice}`}
        value={choice}
      />
      <label htmlFor={`choice-${choice}`}>{choice}</label>
    </li>
  )
}