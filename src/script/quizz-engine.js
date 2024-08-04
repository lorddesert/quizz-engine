/**
 * 
 * @param {string} correctChoice 
 * @param {string} userChoice 
 * @returns {boolean} The result of the comparison as a boolean
 */
function verifyOneChoice(correctChoice, userChoice) {
  return correctChoice === userChoice
}

/**
 * 
 * @param {string[]} choices 
 * @param {string[]} userChoices 
 * @returns { boolean }
 */
function verifyMultipleChoice(choices, userChoices) {
  for (let userChoice of userChoices) {
    if (!choices.includes(userChoice))
      return false
  }

  return true
}

function verifyInputChoice(question, answer) {
  p
}