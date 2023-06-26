let width = window.innerWidth; // Initial value
const topNav = document.querySelector(".top_nav");
const ul = document.querySelector(".nav_links");
const leftBar = document.querySelector(".leftTopBar");
const bookButton = document.querySelector(".btn_nav");
const hamburguerButton = document.querySelector(".hamburguerButton");

// RESIZE PAGE WIDTH AND DISPLAY NAV BAR
window.addEventListener("load", handleWindowSizeChange);
window.addEventListener("resize", handleWindowSizeChange);

function handleWindowSizeChange() {
  width = window.innerWidth;
  if (width <= 770 && ul) {
    displayHamburguerMenu();
    hamburguerButton.className = "hamburguerButton display";
    ul.className = "noDisplayNav";
    bookButton.className = "noDisplayB";
  } else if (width > 770 && !document.querySelector(".nav_links")) {
    if (topNav.getAttribute("class") === "top_nav click") {
      topNav.className = "top_nav";
    }
    leftBar.className = "leftTopBar";
    hamburguerButton.className = "hamburguerButton";
    document.querySelector(".noDisplayNav").className = "nav_links";
    document.querySelector(".noDisplayB").className = "btn_nav";
  }
}

function displayHamburguerMenu() {
  hamburguerButton.addEventListener("click", () => {
    if (topNav.getAttribute("class") === "top_nav") {
      topNav.className = "top_nav click";
      document.querySelector(".noDisplayNav").className = "nav_links";
      leftBar.className = "leftBar col";
      document.querySelector(".nav_links").className = "nav_links col";
    } else if (topNav.getAttribute("class") === "top_nav click") {
      topNav.className = "top_nav";
      document.querySelector(".nav_links").className = "noDisplayNav";
      leftBar.className = "leftBar";
    }
  });
}
