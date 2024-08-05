import { useRef } from "react"

export default function MultipleChoice({
  choice,
  name,
  choiceSelected,
}) {
  const ref = useRef()

  function handleClick(e) {
    if (choiceSelected) return
    
    const input = ref.current

    input.checked = !input.checked
  }

  return (
    <li className="choice" onClick={handleClick}>
      <input
        type='checkbox'
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