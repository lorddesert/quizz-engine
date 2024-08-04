import Choice from "./choice";
import Choices from "./choices";

export default function Questions({
  questions,
  correctChoice,
  currentQuestion
}) {
  return (
    <>
      {
        questions.map((question, i) => <li className="question" id={`question-${i}`}>
          <h4>{question.title}</h4>
          <fieldset>
            <legend>{question.description}</legend>

            <Choices choices={question.choices} questionIndex={i} correctChoice={correctChoice} />
          </fieldset>
        </li>)
      }
    </>
  )
}