//defino el ancho del slider en función del ancho del dispositivo
let slide_width = document.querySelector(".slider").clientWidth;

// defino las variables para el contenedor y los slides y los cuento
const slides_container = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const total_slides = slides.length;

// defino las variables para la navegacion
const arrow_dot_container = document.querySelector(
  ".slider__arrow-nav-container"
);
const dots_container = document.querySelector(".dot-container");
const prev_btn = document.querySelector(".arrow--prev");
const next_btn = document.querySelector(".arrow--next");

//defino los settings iniciales
const slide_seconds = 6000;
let current_index = 1;
let last_index;
let move_distance;
let timer;
let mouse_is_down = false;
let mouse_position_x = [0, 0];

//Calcula la distancia al siguiente slide
const calculateNextDistance = () => {
  move_distance = -(current_index * slide_width);
  last_index = current_index;

  if (current_index == total_slides) {
    current_index = 1;
    move_distance = 0;
  } else {
    current_index++;
  }
  slideImages();
}

//Calcula la distancia al anterior slide
const calculatePrevDistance = () => {
  if (current_index > 1) {
    last_index = current_index;
    current_index--;
    move_distance = move_distance + slide_width;
  } else {
    last_index = current_index;
    current_index = total_slides;
    move_distance = -((total_slides - 1) * slide_width);
  }
  slideImages();
}

//muevo el slider
const slideImages  = (drag_distance) => {
  clearInterval(timer);
  const distance = drag_distance || move_distance;
  slides_container.style.transform = `translateX(${distance}px)`;
  document.querySelector(`#dot-${last_index}`).classList.remove("is-active");
  document.querySelector(`#dot-${current_index}`).classList.add("is-active");
  timer = setInterval(calculateNextDistance, slide_seconds);
}

//muevo los dots
const slideDotImages = (e) => {
  const dots = this.querySelectorAll(".dot");
  for (var i = 1; i <= dots.length; i++) {
    if (e.target.id == `dot-${i}`) {
      last_index = current_index;
      current_index = i;
      move_distance = -((current_index - 1) * slide_width);
    }
  }
  slideImages();
}

//incicializo el slider
const init = () => {
  document.querySelector(`#dot-${current_index}`).classList.remove("is-active");

  slide_width = document.querySelector(".slider").clientWidth;
  slides.forEach((img) => (img.style.width = `${slide_width}px`));
  slides_container.style.width = `${slide_width * total_slides}px`;

  current_index = total_slides;
  calculateNextDistance();
}

init();

//Se añader los eventos a las funciones
next_btn.addEventListener("click", calculateNextDistance);
prev_btn.addEventListener("click", calculatePrevDistance);
dots_container.addEventListener("click", slideDotImages);
//Si hay un resize hay que recalcular las distancias
window.addEventListener("resize", init);
