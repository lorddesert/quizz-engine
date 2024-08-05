# Quizz engine

## Data structure

## Important notes:

This app in order to work correctly, you _need_ to use a chromium-based web browser, since it uses AI to answer input-type questions.


## TODO
* [x] Multiple choice is not working properly when giving the points.
* [x] Input questions are not answering correctly. It has it's limitations due to the AI power and temperature.
* [ ] Multiple choice is not disabling the submit button.
* [ ] Render an image, possibly random with unsplash API.

## Bonus
* [ ] Smooth animations.
* [x] A progress bar indicating the state of the quizz.
* [x] Conditional navigation between questions based on user answers.


## Evaluation Criteria
* [x] JSON structure (clean, easy to extend)
* [ ] Code quality
* [ ] Styles, accessibility, and optional animations

## Submission

* [ ] Provide a link to a GitHub repository with the completed code.
* [ ] Include a README file with instructions on how to run the application locally.
* [ ] Provide 1-2 JSON files with quiz examples.
* [ ] Optionally, provide a link to a live demo of the application.

```Javascript
const choicesList = {
  id: '',
  text: '',
  choices: [
    'Carro',
    'Auto',
    'Coche',
    'Caballo'
  ],
  // The answer will be the correct string, it needs to makes sense to the user that he's not choosing A or B, but
  // it's content. Therefore, can be in _any_ given order. 
  correctChoice: 'Auto', 
  nextQuestion: {
    correct: '',
    incorrect: ''
  }, //Reference ID of the next question, if it's undefined, then it's the last question
}
```
## Constraints / points of improvement

* Due to lack of resources, without using an external API, in input questions/answers we have to put in the JSON data the question, and a correct answer to use it as an example, so we can compare the answer of the user.
  Solution: Using an external API, or a LLM model to see if the answer is good enough can solve this problem.