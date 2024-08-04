import Choice from "./choice";

export default function Choices({ choices, questionIndex, correctChoice }) {
  return (
    <ul className="choice-container card">
      {choices.map(choice => <Choice
        choice={choice}
        name={`choice-group-${questionIndex}`}
        correctChoice={correctChoice}
      />)}
    </ul>
  )
}