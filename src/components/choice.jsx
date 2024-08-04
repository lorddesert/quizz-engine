
export default function Choice({ choice, name, correctChoice }) {
  function handleClick() {
    const input = document.querySelector(`#choice-${choice}`)
    const allChoices = document.querySelectorAll('.choice')
    allChoices.forEach(choice => {
      console.log(choice.textContent)
      // if (choice.textContent === correctChoice)
      //   choice.classList.add('correct')

      // choice.classList.add('incorrect')
    })

    input.checked = true
  }

  return (
    <li className="choice" onClick={handleClick}>
      <input type="radio" name={name} id={`choice-${choice}`} />
      <label htmlFor={`choice-${choice}`}>{choice}</label>
    </li>
  )
}