import ahoy from "ahoy.js";

ahoy.configure({
  urlPrefix: "https://wh-staging.papercranetech.cn",
  visitDuration: 30 //4 * 60, // 4 hours
});

// ahoy.track("landingPage", {
//   url: "http://localhost:8080/",
//   title: "landing",
//   time: Date.now(),
//   page: "/landing",
// });

export default ahoy
