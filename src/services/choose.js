import { post } from "./base";
import { QUIZ_KEY } from "../assets/js/constant";
import storage from "good-storage";

export default async function quizStart(categoryNum, headers) {
  const quizCategory = await post(
    "/user_quizzes",
    {
      user_quiz: {
        category_id: categoryNum,
      },
    },
    headers
  );
  storage.session.set(QUIZ_KEY, quizCategory.id);
  console.log(quizCategory);
}
