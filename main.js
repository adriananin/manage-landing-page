// import "./style.css";
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'

const header = document.querySelector(".header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");

  header.toggleAttribute("data-overlay");
});
