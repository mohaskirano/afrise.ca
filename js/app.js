const slides = document.querySelectorAll('.slide');
const prevControl = document.querySelector('#slide-control-prev');
const nextControl = document.querySelector('#slide-control-next');

let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

prevControl.addEventListener('click', () => showSlide(currentSlide - 1));
nextControl.addEventListener('click', () => showSlide(currentSlide + 1));
