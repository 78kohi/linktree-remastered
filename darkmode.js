let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

let banner = document.querySelector(".banner");
const bannerWhite = document.querySelector(".bWhite");
const bannerBlack = document.querySelector(".bBlack");

const enableDarkmode = () => {
  bannerWhite.style.display = "none"
  document.body.classList.add("darkmode");
  bannerBlack.style.display = "initial"
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  bannerBlack.style.display = "none"
  document.body.classList.remove("darkmode");
  bannerWhite.style.display = "initial"
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
