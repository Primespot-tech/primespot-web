const burger = document.querySelector(".burger");
const navLinksContainer = document.querySelector(".nav-links-container");
const navLinks = document.querySelectorAll(".nav-link");
const navBar = document.querySelector(".navbar-container");

const navBarSlide = () => {
  burger.addEventListener("click", () => {
    navLinksContainer.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });
    burger.classList.toggle("cross");
  });
};

const navBarScroll = () => {
  window.addEventListener("scroll", function () {
    if (this.scrollY > 10) {
      navBar.classList.add("nav-scrolled");
    } else {
      navBar.classList.remove("nav-scrolled");
    }
  });
};

const mainApp = () => {
  navBarSlide();
  navBarScroll();
};

mainApp();
