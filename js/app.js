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
    console.log("working");
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

// CHANGE BACKGROUND IMAGE EACH 10 SEC
function changeImgEachTenS() {
  let i = parseInt(currentImg) + 1;
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
setInterval(changeImgEachTenS, 3000);
