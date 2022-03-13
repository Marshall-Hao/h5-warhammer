import { post } from "./base";
import { QUIZ_KEY } from "../assets/js/constant";
import storage from "good-storage";

export default async function faction(headers) {
  const quizId = storage.session.get(QUIZ_KEY);
  const faction = await post(
    `user_quizzes/${quizId}/reveal_faction`,
    {},
    headers
  );
  console.log(faction);
  return faction;
}
