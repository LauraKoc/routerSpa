import { sayHi, sayBye } from "./components/about.js";

import foo from "./components/navigation.js";
 // hello!

// console.log("says", sayHi);
// console.log("says", sayBye);

const home = document.querySelector('header')


const ruRoute = window.location.href + `${"ru"}`;
console.log("ruRoute", ruRoute);


const ruBtn = document.querySelector(".ruBtn");
ruBtn.addEventListener("click", function() {

  route()
  document.querySelector('body').removeChild(home)
  if (window.location.href) {
    if (window.location.href === ruRoute) {
      const navMenu = document.getElementById('nav-menu');

      console.log("hello!", navMenu) 
      console.log("ru");
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
  "/": "index.html",
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
