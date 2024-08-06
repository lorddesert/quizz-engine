import { GAMEMODES } from '../utils'

// Components
import Choice from "./choice";
import MultipleChoice from "./multiple-choice";

export default function Choices({
  choices,
  correctChoice,
  setChoiceSelected,
  choiceSelected,
  setScore,
  score,
  gamemode,
  answer,
  setAnswer,
  setAnswerWasCorrect
}) {

  if (gamemode === GAMEMODES.ONE_CHOICE)
    return (
      <ul>
        {choices.map((choice, i) => <Choice
          key={`choice-${i}`}
          {...{
            choice,
            name: `choices`,
            correctChoice,
            setChoiceSelected,
            choiceSelected,
            setScore,
            score,
            setAnswerWasCorrect
          }}
        />)}
      </ul>
    )

  if (gamemode === GAMEMODES.MULTIPLE_CHOICE)
    return (
      <ul>
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