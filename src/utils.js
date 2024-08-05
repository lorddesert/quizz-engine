import { CreateMLCEngine } from "@mlc-ai/web-llm";

export const GAMEMODES = {
  ONE_CHOICE: 'one-choice',
  MULTIPLE_CHOICE: 'multiple-choice',
  INPUT_QUESTION: 'input-question'
}

async function initLLM(setLoadingLLM) {
  const selectedModel = 'Qwen2-1.5B-Instruct-q4f32_1-MLC'

  // Callback function to update model loading progress
  const initProgressCallback = (initProgress) => {
    console.log(initProgress.text);
    setLoadingLLM(initProgress.text)
  }

  return await CreateMLCEngine(
    selectedModel,
    { initProgressCallback: initProgressCallback }, // engineConfig
  );
}


export async function verifyInputQuestion(question, userAnswer, setLoadingLLM) {
  console.log(question, userAnswer)
  const messages = [
    // { role: "system", content: "You are a Quizz engine that answers true or false to the given question." },
    { role: "system", content: "You are a Quizz engine that answers if the given question is correct or not." },
    { role: "user", content: `Is this answer: ${userAnswer} correct for the question: ${question}?` },
  ]


  const engine = await initLLM(setLoadingLLM)
  const reply = await engine.chat.completions.create({
    messages,
  });

  return reply
}