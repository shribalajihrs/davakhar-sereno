const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  primaryNav.classList.toggle("is-open", !isOpen);
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    primaryNav.classList.remove("is-open");
  }
});

const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...document.querySelectorAll(".hero-dot")];
const heroCaption = document.querySelector(".hero-caption");
let activeSlide = 0;
let slideTimer;

function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("is-active", i === activeSlide));
  dots.forEach((dot, i) => {
    dot.classList.toggle("is-active", i === activeSlide);
    dot.setAttribute("aria-pressed", String(i === activeSlide));
  });
  heroCaption.innerHTML = `<span>0${activeSlide + 1}</span> ${activeSlide === 0 ? "A community made for living well" : "A new milestone at Sereno"}`;
}

function restartSlideTimer() {
  window.clearInterval(slideTimer);
  slideTimer = window.setInterval(() => showSlide(activeSlide + 1), 6500);
}

document.querySelectorAll(".hero-arrow").forEach((button) => {
  button.addEventListener("click", () => {
    showSlide(activeSlide + (button.dataset.slide === "next" ? 1 : -1));
    restartSlideTimer();
  });
});
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    restartSlideTimer();
  });
});
restartSlideTimer();

const amenityTabs = [...document.querySelectorAll(".amenity-tab")];
amenityTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    amenityTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute("aria-controls")).hidden = !selected;
    });
  });
});

document.querySelector(".enquire-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const message = `Hello, I'm ${data.get("name")}. I'm interested in a ${data.get("homeType")} home at Davakhar Sereno. Please contact me at ${data.get("phone")}.`;
  const whatsappUrl = `https://wa.me/919240210011?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
