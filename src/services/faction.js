import { post } from "./base";
import { QUIZ_KEY } from "../assets/js/constant";
import storage from "good-storage";
import ahoy from "./ahoy";

export default async function faction(headers) {
  const quizId = storage.session.get(QUIZ_KEY);
  console.log(quizId);
  const faction = await post(
    `user_quizzes/${quizId}/reveal_faction`,
    {},
    headers
  );
  console.log(faction);
  ahoy.track("Completed Quiz", {
    category: faction.category.name,
    faction_revealed: faction.name_en,
    faction_revealed_cn: faction.name
  })
  return faction;
}
