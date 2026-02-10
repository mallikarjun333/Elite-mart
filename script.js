

  function toggleMenu() {
  document.getElementById("sideMenu").classList.add("open");
  document.getElementById("overlay").classList.add("open");
}

function closeMenu() {
  document.getElementById("sideMenu").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
}


let index = 0;
const track = document.querySelector(".hero-track");
const slides = document.querySelectorAll(".hero-track img");
const dotsContainer = document.querySelector(".dots");
const total = slides.length;

// CREATE DOTS
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    index = i;
    updateSlide();
    resetAutoSlide();
  });
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");

function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % total;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + total) % total;
  updateSlide();
}

// AUTO SLIDE 
let autoSlide = setInterval(nextSlide, 4000);

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 4000);
}

