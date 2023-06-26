const navBarLi = document.querySelectorAll(".links_menu");
const bookNow = document.querySelector(".btn_nav");
bookNow.addEventListener("click", () => {
  window.location.href = "/html/rooms.html";
});

navBarLi.forEach((a) => {
  a.addEventListener("click", () => {
    console.log("working");
    switch (a.textContent) {
      case "home":
        window.location.href = "/index.html";
        break;
      case "about":
        window.location.href = "/html/AboutPage.html";
        break;
      case "rooms":
        window.location.href = "/html/rooms.html";
        break;
      case "bookings":
        window.location.href = "/html/contact.html";
        break;
      case "blog":
        window.location.href = "/html/BlogsPage.html";
        break;
      case "contact":
        window.location.href = "/html/contact.html";
        break;
      default:
        break;
    }
  });
});
