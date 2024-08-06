import { GAMEMODES } from "../utils"

// Components
import Choices from "./choices"
export default function QuizzInputs({
  LLMResponse,
  choices,
  correctChoice,
  setChoiceSelected,
  choiceSelected,
  setScore,
  score,
  gameMode,
  setAnswerWasCorrect,
  description
}) {
  return (
    <>
      {gameMode === GAMEMODES.INPUT_QUESTION
        ? <>
          <textarea rows={10} placeholder="Your answer..." name="answer" id="answer"></textarea>
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
              gamemode: gameMode,
              setAnswerWasCorrect
            }}
          />
          <legend>{description}</legend>
        </fieldset>
      }
    </>
  )
}