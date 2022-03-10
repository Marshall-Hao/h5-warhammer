import { post } from "./base";
import { QUIZ_KEY } from "../assets/js/constant";
import storage from "good-storage";

export default async function submitAnswer({ questionId, choiceId }, headers) {
  const quizId = storage.session.get(QUIZ_KEY);
  const answer = await post(
    `/user_quizzes/${quizId}/user_answers
    `,
    {
      user_answer: {
        question_id: questionId,
        choice_id: choiceId,
      },
    },
    headers
  );
  console.log(answer);
}
