import { GAMEMODES } from '../utils'

// Components
import Choice from "./choice";
import MultipleChoice from "./multiple-choice";

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
  gamemode,
  answer,
  setAnswer
}) {

  if (gamemode === GAMEMODES.ONE_CHOICE)
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

  if (gamemode === GAMEMODES.MULTIPLE_CHOICE)
    return (
      <ul className="choice-container">
        {choices.map((choice, i) => <MultipleChoice
          key={`choice-${i}`}
          {...{
            choice,
            name: `choices`,
            correctChoice,
            setChoiceSelected,
            choiceSelected,
            setScore,
            score,
            answer,
            setAnswer
          }}
        />)}
      </ul>
    )


}