import { post } from "./base";
import { USER_KEY } from "../assets/js/constant";
import storage from "good-storage";

export default async function login() {
  const loginUser = storage.session.get(USER_KEY);
  let loginRes;
  if (loginUser) {
    loginRes = await post("/login", {
      email: loginUser["X-USER-EMAIL"],
    });
    return loginRes;
  } else {
    loginRes = await post("/login");
    storage.session.set(USER_KEY, loginRes["headers"]);
    return loginRes;
  }
}
