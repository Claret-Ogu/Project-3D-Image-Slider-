const next = document.querySelector(".carousel__btn--next"),
  back = document.querySelector(".carousel__btn--back"),
  carousel = document.querySelector(".carousel__cards");
let angle = 0;

next.addEventListener("click", () => {
  angle -= 45;
  carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
});

back.addEventListener("click", () => {
  angle += 45;
  carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
});