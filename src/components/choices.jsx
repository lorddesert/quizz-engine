import Choice from "./choice";

/**
 * 
 * @param {{
 * choices: string[]
 * }} param0 
 * @returns React Element
 */
export default function Choices({
  choices,
  correctChoice,
  setChoiceSelected,
  choiceSelected,
  setScore,
  score,
  gamemode = 'one-choice'
}) {
  return (
    <ul className="choice-container">
      {choices.map((choice, i) => <Choice
        key={`choice-${i}`}
        {...{
          choice,
          name: `choices`,
          correctChoice,
          setChoiceSelected,
          choiceSelected,
          setScore,
          score
        }}
      />)}
    </ul>
  )
}