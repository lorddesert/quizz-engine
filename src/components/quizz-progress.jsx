export default function QuizzProgress({ max, value }) {
  return (
    <>
      <label htmlFor="quizz-progress">Quizz progress</label>
      <progress id="quizz-progress" max={max} value={value} />
    </>
  )
}