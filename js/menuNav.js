let width = window.innerWidth; // Initial value
const topNav = document.querySelector(".top_nav");
const ul = document.querySelector("#nav_links");
const leftBar = document.querySelector("#leftTopBar");
const bookButton = document.querySelector("#btn_nav");
const hamburguerButton = document.querySelector(".hamburguerButton");

// RESIZE PAGE WIDTH AND DISPLAY NAV BAR
window.addEventListener("load", handleWindowSizeChange);
window.addEventListener("resize", handleWindowSizeChange);

function handleWindowSizeChange() {
  width = window.innerWidth;
  if (width <= 760 && document.querySelector("#nav_links")) {
    displayHamburguerMenu();
    hamburguerButton.className = "hamburguerButton display";
    leftBar.removeChild(ul);
    topNav.removeChild(bookButton);
  } else if (width > 760 && !document.querySelector("#nav_links")) {
    hamburguerButton.className = "hamburguerButton";
    leftBar.appendChild(ul);
    topNav.appendChild(bookButton);
  }
}

function displayHamburguerMenu() {
  hamburguerButton.addEventListener("click", () => {
    if (topNav.getAttribute("class") === "top_nav") {
      topNav.className = "top_nav col";
      topNav.appendChild(ul);
      topNav.appendChild(bookButton);
    } else if (topNav.getAttribute("class") === "top_nav col") {
      topNav.className = "top_nav";
    }
  });
}
