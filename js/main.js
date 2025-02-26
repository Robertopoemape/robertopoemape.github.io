// tooggle navbar

let menuIcon = document.querySelector("#menu-icon");
let nav = document.querySelector(".navbar");

if (menuIcon && nav) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    nav.classList.toggle("active");
  };
}

// scroll reveal
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// scroll section active link

window.onscroll = () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  //sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar link (scroll)

  menuIcon.classList.remove("fa-xmark");
  nav.classList.remove("active");
};

//typed js
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Web Developer", "Mobile Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

document
  .getElementById("read-more-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const skillsContainer = document.querySelector(".skills");
    skillsContainer.classList.toggle("active");
    this.textContent = skillsContainer.classList.contains("active")
      ? "Leer menos"
      : "Leer mas";
  });
