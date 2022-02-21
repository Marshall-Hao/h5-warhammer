import { post } from "./base";
import { USER_KEY } from "../assets/js/constant";
import storage from "good-storage";

export default async function quizStart(categoryNum) {
  const headers = storage.session.get(USER_KEY);
  const quizCategory = await post(
    "/user_quizzes",
    {
      user_quiz: {
        category_id: categoryNum,
      },
    },
    headers
  );
  console.log(quizCategory);
}
