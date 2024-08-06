import { GAMEMODES } from "../utils";
import Button from "./button";

export default function Navigation({
  currentQuestion,
  questions,
  nextQuestion,
  choiceSelected,
  gamemode,
  handleMultipleChoiceClick,
  handleInputQuestion,
  LLMResponse
}) {

  if (gamemode === GAMEMODES.INPUT_QUESTION)
    return (<div style={{
      display: "grid",
      gap: "5px"
    }}>
      <Button
        onClick={handleInputQuestion}
        disabled={choiceSelected}
        fallback={'Loading LLM'}
      >
        Verify answer
      </Button>
      {choiceSelected && LLMResponse &&
        <Button
          onClick={nextQuestion}
          disabled={!choiceSelected}
        >
          Next
        </Button>
      }
    </div>)

  if (gamemode === GAMEMODES.MULTIPLE_CHOICE)
    return (
      <div style={{ display: 'flex', gap: '.5rem' }}>
        <Button
          disabled={choiceSelected}
          onClick={handleMultipleChoiceClick}
        >
          Submit
        </Button>
        <Button
          disabled={
            currentQuestion === questions.length
            || !choiceSelected
          } onClick={nextQuestion}
        >
          Next
        </Button>
      </div>
    )


  if (gamemode === GAMEMODES.MULTIPLE_CHOICE)
    return (
      <>
        <Button
          onClick={handleInputQuestion}
          disabled={choiceSelected}
        >
          Submit
        </Button>
      </>
    )


  return (
    <Button
    disabled={
      currentQuestion === questions.length
      || !choiceSelected
    } onClick={nextQuestion}
  >
    Next
  </Button>
  )
}