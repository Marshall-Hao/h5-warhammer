import ahoy from "ahoy.js";

ahoy.configure({
  urlPrefix:
    process.env.NODE_ENV !== "production"
      // ? "http://localhost:8000"
      // ? "https://api-staging.h5.games-workshop-china.com"
      ? "http://localhost:3002"
      : "https://api-staging.h5.games-workshop-china.com",
  visitDuration: 30, //4 * 60, // 4 hours
});

// ahoy.track("landingPage", {
//   url: "http://localhost:8080/",
//   title: "landing",
//   time: Date.now(),
//   page: "/landing",
// });

export default ahoy;
