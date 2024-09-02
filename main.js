const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex+=n);
}

function currentSlide(n){
  showSlides(slideIndex=n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if(n > slides.length){slideIndex = 1}
  if(n<i) {slideIndex = slideIndex.length}
  for (i=0; i<slides.length;i++){
    slides[i].style.display="none";
  }
  slides[slideIndex-1].style.display = "block";
}

var breakfastIndex = 1;
showBreakfast(breakfastIndex);

function plusBreakfast(n){
  showBreakfast(breakfastIndex+=n);
}

function currentBreakfast(n){
  showBreakfast(breakfastIndex=n);
}

function showBreakfast(n){
  var i;
  var slides = document.getElementsByClassName("breakfast");
  if(n > slides.length){breakfastIndex = 1}
  if(n<i) {breakfastIndex = breakfastIndex.length}
  for (i=0; i<slides.length;i++){
    slides[i].style.display="none";
  }
  slides[breakfastIndex-1].style.display = "block";
}

var room1Index = 1;
showRoom1(room1Index);

function plusRoom1(n){
  showRoom1(room1Index+=n);
}

function currentRoom1(n){
  showRoom1(room1Index=n);
}

function showRoom1(n){
  var i;
  var slides = document.getElementsByClassName("room1");
  if(n > slides.length){room1Index = 1}
  if(n<i) {room1Index = room1Index.length}
  for (i=0; i<slides.length;i++){
    slides[i].style.display="none";
  }
  slides[room1Index-1].style.display = "block";
}

var room2Index = 1;
showRoom2(room2Index);

function plusRoom2(n){
  showRoom2(room2Index+=n);
}

function currentRoom2(n){
  showRoom2(room2Index=n);
}

function showRoom2(n){
  var i;
  var slides = document.getElementsByClassName("room2");
  if(n > slides.length){room2Index = 1}
  if(n<i) {room2Index = room2Index.length}
  for (i=0; i<slides.length;i++){
    slides[i].style.display="none";
  }
  slides[room2Index-1].style.display = "block";
}

