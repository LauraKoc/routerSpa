import { sayHi, sayBye } from "./about.js";

console.log("says", sayHi);
console.log("says", sayBye);

const ruRoute = window.location.href + `${"/ru/about"}`;
const ruBtn = document.querySelector(".ruBtn");
ruBtn.addEventListener("click", function() {
  route()
  if (window.location.href) {
    if (window.location.href === ruRoute) {
      console.log("ru/about");
    } else {
      console.log("false");
    }
  }
});

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/pages/404.html",
  "/": "/pages/home.html",
  "/lv": "/pages/home.html",
  "/ru": "/pages/home.html",
  "/lv/about": "/pages/about.html",
  "/ru/about": "/pages/about.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
