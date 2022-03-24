import ahoy from "ahoy.js";

ahoy.configure({
  urlPrefix:
    process.env.NODE_ENV !== "production"
      // ? "http://localhost:8000"
      // ? "http://localhost:3002"
      ? "https://api-staging.h5.games-workshop-china.com"
      : "https://api-staging.h5.games-workshop-china.com",
  visitDuration: 30, //4 * 60, // 4 hours
});

export default ahoy;
