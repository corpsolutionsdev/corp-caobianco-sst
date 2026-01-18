const root = document.documentElement;
const modal = document.getElementById("whatsapp-modal");
const openModalButtons = document.querySelectorAll("[data-open-modal]");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");
const yearElement = document.getElementById("year");
const header = document.querySelector(".site-header");
const heroSection = document.querySelector(".hero");
const navToggle = document.querySelector("[data-nav-toggle]");
const navDrawer = document.getElementById("nav-drawer");
const navBackdrop = document.querySelector("[data-nav-backdrop]");
const navLinks = navDrawer ? navDrawer.querySelectorAll("a") : [];

const icons = {
  whatsapp:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' d='M12.04 2C6.58 2 2.1 6.48 2.1 11.94c0 1.92.5 3.7 1.42 5.27L2 22l4.94-1.5a9.9 9.9 0 0 0 5.1 1.4h.01c5.46 0 9.94-4.48 9.94-9.94C22 6.48 17.5 2 12.04 2Zm5.74 14.44c-.24.66-1.39 1.27-1.92 1.35c-.5.08-1.1.11-1.77-.11c-.4-.13-.91-.3-1.57-.59c-2.76-1.19-4.56-3.95-4.7-4.14c-.13-.18-1.12-1.49-1.12-2.84c0-1.36.71-2.03.96-2.3c.25-.27.55-.34.73-.34h.53c.17 0 .4-.07.62.47c.23.55.78 1.9.85 2.04c.08.14.13.3.02.48c-.11.18-.16.3-.32.48c-.16.18-.34.4-.48.53c-.16.16-.33.32-.14.63c.18.3.8 1.32 1.72 2.14c1.19 1.06 2.19 1.39 2.5 1.55c.31.16.5.14.69-.09c.18-.23.8-.93 1.01-1.24c.2-.32.41-.27.69-.16c.27.1 1.74.82 2.04.98c.3.16.5.23.57.35c.07.12.07.69-.16 1.36Z'/%3E%3C/svg%3E\")",
};

root.setAttribute("data-theme", "light");

const openModal = () => {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
};

const openNav = () => {
  if (!navToggle || !navDrawer) return;
  document.body.classList.add("nav-open");
  navToggle.setAttribute("aria-expanded", "true");
  navDrawer.setAttribute("aria-hidden", "false");
};

const closeNav = () => {
  if (!navToggle || !navDrawer) return;
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
  navDrawer.setAttribute("aria-hidden", "true");
};

const toggleNav = () => {
  if (document.body.classList.contains("nav-open")) {
    closeNav();
    return;
  }
  openNav();
};

openModalButtons.forEach((button) => {
  button.addEventListener("click", openModal);
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
    closeNav();
  }
});

if (navToggle) {
  navToggle.addEventListener("click", toggleNav);
}

if (navBackdrop) {
  navBackdrop.addEventListener("click", closeNav);
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

document.documentElement.style.setProperty("--icon-whatsapp", icons.whatsapp);

const updateHeaderState = () => {
  if (!header || !heroSection) return;
  const isTop = window.scrollY === 0;
  header.classList.toggle("at-top", isTop);
  header.classList.toggle("scrolled", !isTop);
};

updateHeaderState();
window.addEventListener("scroll", updateHeaderState);
window.addEventListener("resize", updateHeaderState);

if (window.AOS) {
  AOS.init({
    once: true,
    duration: 700,
    easing: "ease-out-cubic",
  });
}