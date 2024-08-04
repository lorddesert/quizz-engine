import natural from 'natural'
const TfIdf = natural.TfIdf;

export async function calculateSimilarity(answer, userInput) {
  const tfidf = new TfIdf();
  const sanitizedAnswer = sanitizeInput(userInput)

  tfidf.addDocument(answer)

  return tfidf.tfidfs(sanitizedAnswer);
}

export function sanitizeInput(input) {
  let sanitized = input.trim(); // Remove leading/trailing whitespace
  sanitized = sanitized.replace(/\s+/g, ' '); // Normalize spaces
  sanitized = sanitized.replace(/[\\'"]/g, '\\$&'); // Escape special characters
  sanitized = sanitized.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags
  return sanitized;
}

export async function calculateSimilarity(answer, userInput) {
  const tfidf = new TfIdf();
  const sanitizedAnswer = sanitizeInput(userInput)

  tfidf.addDocument(answer)

  return tfidf.tfidfs(sanitizedAnswer);
}


export const GAMEMODES = {
  ONE_CHOICE: 'one-choice',
  MULTIPLE_CHOICE: 'multiple-choice',
  INPUT_QUESTION: 'input-question'
}