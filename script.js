// let features = document.querySelector(".features");

let aboutPart = document.querySelector(".container");
let featurePart = document.querySelector(".feature-section");
let sectionPart = document.querySelector(".section-1");
let iconPart = document.querySelector(".section-icon");
let cartPart = document.querySelector(".section-cart");
let hugePart = document.querySelector(".section-huge");
let userPart = document.querySelector(".section-user");
let subPart = document.querySelector(".footer__subscribe-innercontainer");

function abouts() {
  aboutPart.style.display = "block";
  featurePart.style.display = "block";
  sectionPart.style.display = "block";
  iconPart.style.display = "block";
  cartPart.style.display = "block";
  hugePart.style.display = "block";
  userPart.style.display = "block";
  subPart.style.display = "block";
  document.getElementById("feature").style.color = "black";
  document.getElementById("about").style.color = "#f53855";
  document.getElementById("price").style.color = "black";
  document.getElementById("test").style.color = "black";
  document.getElementById("help").style.color = "black";
}

function features() {
  featurePart.style.display = "block";
  sectionPart.style.display = "none";
  iconPart.style.display = "none";
  cartPart.style.display = "none";
  hugePart.style.display = "none";
  userPart.style.display = "none";
  subPart.style.display = "none";
  document.getElementById("feature").style.color = "#f53855";
  document.getElementById("about").style.color = "black";
  document.getElementById("price").style.color = "black";
  document.getElementById("test").style.color = "black";
  document.getElementById("help").style.color = "black";
}

function pricings() {
  document.getElementById("feature").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("price").style.color = "#f53855";
  document.getElementById("test").style.color = "black";
  document.getElementById("help").style.color = "black";

  featurePart.style.display = "none";
  sectionPart.style.display = "none";
  iconPart.style.display = "none";
  cartPart.style.display = "block";
  hugePart.style.display = "none";
  userPart.style.display = "none";
  subPart.style.display = "none";
}

function testimonials() {
  document.getElementById("feature").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("price").style.color = "black";
  document.getElementById("test").style.color = "#f53855";
  document.getElementById("help").style.color = "black";
  featurePart.style.display = "none";
  sectionPart.style.display = "none";
  iconPart.style.display = "none";
  cartPart.style.display = "none";
  hugePart.style.display = "none";
  userPart.style.display = "none";
  subPart.style.display = "none";
}

function helps() {
  document.getElementById("feature").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("price").style.color = "black";
  document.getElementById("test").style.color = "black";
  document.getElementById("help").style.color = "#f53855";
}

// slider//

const slides = document.querySelectorAll(".section-user__cart-2");
const btnRight = document.querySelector(".slider--1");
const btnLeft = document.querySelector(".slider--2");
const card = document.querySelector(".slides");
const dotContainer = document.querySelector(".image-content-1");

// start slide
curSlide = 0;
const maxSlide = slides.length;

// Dots function

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `  <div class="image-content-1__dot" data-slide="${i}"></div>`
    );
  });
};
createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll(".image-content-1__dot")
    .forEach((dot) => dot.classList.remove("image-content-1__dot--active"));
  document
    .querySelector(`.image-content-1__dot[data-slide = '${slide}']`)
    .classList.add("image-content-1__dot--active");
};

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("image-content-1__dot")) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
  }
});

// Next slide
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
// iNITIAL
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
slides.forEach((slide) => (slide.style.transition = "all .8s"));
// card.style.overflow = "hidden";

// hANDLECLICK
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};
const preSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};
btnLeft.addEventListener("click", nextSlide);
btnRight.addEventListener("click", preSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") preSlide();
  if (e.key === "ArrowRight") nextSlide();
});
