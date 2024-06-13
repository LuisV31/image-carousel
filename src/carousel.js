// src/carousel.js
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide img");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    const carouselSlide = document.querySelector(".carousel-slide");
    carouselSlide.style.transform = `translateX(${-index * slideWidth}px)`;

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
    resetTimer();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
    resetTimer();
  }

  function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
      resetTimer();
    });
  });

  let slideInterval = setInterval(nextSlide, 5000);

  showSlide(currentSlide);
});
