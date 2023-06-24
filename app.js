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

// CHANGE HEADER BACKGROUND IMAGE WITH USER CLICK OR EACH 10SECONDS.

const firstImg = "/img/gallery/slide-1.jpg";
const secondImg = "/img/gallery/slide-2.jpg";
const thirdImg = "/img/gallery/slide-4.jpg";
const fourthImg = "/img/gallery/slide-3.jpg";
const header = document.querySelector("header");
let currentImg = 2;
const changeImgButton = document.querySelectorAll(".headerB");

// STORE EACH IMG INSIDE AN ARRAY
const imgArray = [];
imgArray.push(firstImg, secondImg, thirdImg, fourthImg);

// EACH CLICK CHANGE BACKGROUND IMAGE
changeImgButton.forEach((button) => {
  button.addEventListener("click", () => {
    currentImg = button.getAttribute("data-index");
    //CHANGE BACKGROUND IMAGE
    header.style.backgroundImage = `url(${
      imgArray[button.getAttribute("data-index")]
    })`;

    //CHANGE CLASS
    changeImgButton.forEach((button) => {
      if (button.getAttribute("data-index") === currentImg) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  });
});

// CHANGE BACKGROUND IMAGe EACH 10 SEC
function changeImgEachTenS() {
  let i = currentImg + 1;
  currentImg++;
  currentImg === 3 ? (currentImg = -1) : (currentImg = currentImg);

  header.style.backgroundImage = `url(${imgArray[i]})`;

  // CHANGE CLASS OF BUTTONS
  for (let j = 0; j < changeImgButton.length; j++) {
    if (parseInt(changeImgButton[j].getAttribute("data-index")) !== i) {
      changeImgButton[j].classList.remove("active");
    } else {
      changeImgButton[j].classList.add("active");
    }
  }
}
setInterval(changeImgEachTenS, 10000);
