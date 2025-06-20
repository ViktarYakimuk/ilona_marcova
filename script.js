// Получаем элементы слайдера
const slider = document.querySelector(".reviews");
const prevButton = document.querySelector(".reviews__prev-button");
const nextButton = document.querySelector(".reviews__next-button");
const slides = Array.from(slider.querySelectorAll("img"));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
   slideIndex = (slideIndex - 1 + slideCount) % slideCount;
   updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
   slideIndex = (slideIndex + 1) % slideCount;
   updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
   slides.forEach((slide, index) => {
      if (index === slideIndex) {
      slide.style.display = "block";
      } else {
      slide.style.display = "none";
      }
   });
}

// Инициализация слайдера
updateSlider();








const wheel = document.querySelector('.wheel');
const wheelPrevButton = document.querySelector('.wheel__prev-button');
const wheelNextButton = document.querySelector('.wheel__next-button');
const slidesWheel = Array.from(document.querySelectorAll('.wheel__cart'));
const slideCountWheel = slidesWheel.length;
let slideIndexWheel = 0;


// Устанавливаем обработчики событий для кнопок
wheelPrevButton.addEventListener("click", showWheelPreviousSlide);
wheelNextButton.addEventListener("click", showWheelNextSlide);


// Функция для показа предыдущего слайда
function showWheelPreviousSlide() {
   slideIndexWheel = (slideIndexWheel - 1 + slideCountWheel) % slideCountWheel;
   updateSliderWheel();
}

// Функция для показа следующего слайда
function showWheelNextSlide() {
   slideIndexWheel = (slideIndexWheel + 1) % slideCountWheel;
   updateSliderWheel();
}


// Функция для обновления отображения слайдера
function updateSliderWheel() {
   slidesWheel.forEach((slideW, indexW) => {
      if (indexW === slideIndexWheel) {
      slideW.style.display = "block";
      } else {
      slideW.style.display = "none";
      }
   });
}

// Инициализация слайдера
updateSliderWheel();



function openDrawer() {
   let checked = document.querySelector("input[type=checkbox]").checked;
   let drawer = document.getElementById("menu-drawer");
   drawer.setAttribute("opened", checked);
}