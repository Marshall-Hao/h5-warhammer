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
    console.log(
      loginRes["categories"]["40k"]["questions"],
      loginRes["categories"]["aos"]["questions"]
    );
    save40kQSession(loginRes["categories"]["40k"]["questions"]);
    saveAosQSession(loginRes["categories"]["aos"]["questions"]);
    return loginRes;
  } else {
    loginRes = await post("/login");
    storage.session.set(USER_KEY, loginRes["headers"]);
    console.log(loginRes);

    return loginRes;
  }
}

function save40kQSession(list) {
  list.forEach((element) => {
    console.log("123");
    storage.session.set(
      `__40kquestion${element.page_template_number}__`,
      element
    );
  });
}

function saveAosQSession(list) {
  list.forEach((element) => {
    console.log("123");
    storage.session.set(
      `__aosquestion${element.page_template_number}__`,
      element
    );
  });
}
