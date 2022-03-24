import { post } from "./base";
import { QUIZ_KEY } from "../assets/js/constant";
import storage from "good-storage";
import ahoy from "./ahoy";

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
  console.log({quizCategory});
  if (quizCategory) {
    ahoy.track("Started Quiz", {
      category: (categoryNum === 1 ? "40k" : "AOS"),
      user_quiz_id: quizCategory.id
    });
  }
}
