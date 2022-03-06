import { post } from "./base";
import { USER_KEY, QUIZ_KEY } from "../assets/js/constant";
import storage from "good-storage";

export default async function submitAnswer({ questionId, choiceId }) {
  const headers = storage.session.get(USER_KEY);
  const quizId = storage.session.get(QUIZ_KEY);
  await post(
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
}
