/* Year in footer */
document.getElementById("year").textContent = new Date().getFullYear();

/* -----------------------
   Particles (sparkles)
------------------------*/
const sparkleConfig = {
  particles: {
    number: { value: 120, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.7,
      random: true,
      anim: { enable: true, speed: 0.6, opacity_min: 0.1, sync: false }
    },
    size: { value: 1.6, random: true, anim: { enable: false } },
    line_linked: { enable: false },
    move: { enable: true, speed: 0.35, direction: "none", out_mode: "out" }
  },
  retina_detect: true
};

const addParticles = (id) => window.particlesJS && particlesJS(id, sparkleConfig);
["particles-js", "particles-js-about", "particles-js-courses", "particles-js-programs", "particles-js-contact"].forEach(addParticles);

/* ---------------------------------
   Flip cards (Courses & Programs)
----------------------------------*/
const toggleFlip = (card, on) => {
  if (!card) return;
  card.classList.toggle("flipped", on);
};

document.querySelectorAll("[data-flip]").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const card = e.currentTarget.closest(".course-card, .program-card");
    toggleFlip(card, true);
  });
});
document.querySelectorAll("[data-unflip]").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const card = e.currentTarget.closest(".course-card, .program-card");
    toggleFlip(card, false);
  });
});

/* -----------------------
   Reviews carousel
------------------------*/
/* -----------------------
   Reviews horizontal carousel
------------------------*/
const reviewsWrap = document.querySelector(".reviews-container");
const reviews = Array.from(document.querySelectorAll(".reviews-container .review-card"));
const dotsWrap = document.querySelector(".nav-dots");

let current = 0;

const setActive = (index) => {
  current = index;
  reviewsWrap.style.transform = `translateX(-${index * 100}%)`;
  Array.from(dotsWrap.children).forEach((d, i) =>
    d.classList.toggle("active", i === index)
  );
};

// Build dots
reviews.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "nav-dot";
  dot.setAttribute("aria-label", `Show review ${i + 1}`);
  dot.addEventListener("click", () => setActive(i));
  dotsWrap.appendChild(dot);
});
setActive(0);

// Auto slide
let timer = null;
const start = () => (timer = setInterval(() => setActive((current + 1) % reviews.length), 4000));
const stop = () => timer && clearInterval(timer);

const reviewsRegion = document.querySelector(".student-reviews");
reviewsRegion.addEventListener("mouseenter", stop);
reviewsRegion.addEventListener("mouseleave", start);
start();
