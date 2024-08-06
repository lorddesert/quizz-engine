# Quizz engine
**Demo: [https://quizz-engine.vercel.app](https://quizz-engine.vercel.app/)**

## Requirements:
You need to use a chromium-based browser, since the projects uses webGPU and it's not supported in all browsers.


## How to run the app:
* Clone this repo.
* Install the dependencies using npm or any alternatives
* Run the app with ```npm run dev```

## Notes
- The application will only work if ```claude-v3.json``` is used. It's already set by default. The rest of the files are for archive purposes.


## Example of data structure
The list of items were created using AI

The structure us designed thinking in linked-list's, so that to create/modify a list of questions, the only thing that we would need to do is change the references of the ```nextQuestion``` field.

```JSON
  {
    "id": "q25",
    "title": "French Luxury Brands",
    "question": "Which of these are famous French luxury brands?",
    "choices": [
      "Louis Vuitton",
      "Hermès",
      "Chanel",
      "Gucci"
    ], // On input questions this will be NULL.
    "correctChoice": [
      "Louis Vuitton",
      "Hermès",
      "Chanel"
    ],
    "nextQuestion": {
      "correct": "q27",
      "incorrect": "q26"
    },
    "image": "https://source.unsplash.com/1600x900/?luxury_brands", //The image is not provided, this is just an example.
    "description": "Select all the luxury brands that are of French origin.",
    "gameMode": "multiple-choice" // can be one-choice, multiple-choice, or input-question
  },
```

## Important notes:

This app in order to work correctly, you _need_ to use a chromium-based web browser, since it uses AI to answer input-type questions.

## TODO
* [x] Multiple choice is not working properly when giving the points.
* [x] Input questions are not answering correctly. It has it's limitations due to the AI power and temperature.
* [x] Multiple choice is not disabling the submit button.
* [x] Render an image, possibly random with unsplash API.

## Submission

* [x] Provide a link to a GitHub repository with the completed code.
* [x] Include a README file with instructions on how to run the application locally.
* [x] Provide 1-2 JSON files with quiz examples.
* [x] Optionally, provide a link to a live demo of the application.


## Constraints / points of improvement
* Design.
* A proper image for each question.
* Due to lack of resources, without using an external API, in input questions/answers we have to put in the JSON data the question, and a correct answer to use it as an example, so we can compare the answer of the user
    - Solution: Using an external API, or a LLM model to see if the answer is good enough can solve this problem.
