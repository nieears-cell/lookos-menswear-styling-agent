const slides = Array.from(document.querySelectorAll(".slide"));
const prevButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");
const counter = document.getElementById("slideCounter");
const progress = document.getElementById("progressBar");
let currentSlide = 0;

function renderSlide(index) {
  currentSlide = Math.max(0, Math.min(slides.length - 1, index));
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === currentSlide);
  });
  counter.textContent = `${currentSlide + 1} / ${slides.length}`;
  progress.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
  prevButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === slides.length - 1;
}

function nextSlide() {
  renderSlide(currentSlide + 1);
}

function previousSlide() {
  renderSlide(currentSlide - 1);
}

prevButton.addEventListener("click", previousSlide);
nextButton.addEventListener("click", nextSlide);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " " || event.key === "PageDown") {
    event.preventDefault();
    nextSlide();
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    previousSlide();
  }
});

renderSlide(0);
