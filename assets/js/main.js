"use strict";

import { renderServices } from "./data/services.js";
import { renderSkills } from "./data/skills.js";
import { renderAllTimelines } from "./data/timeline.js";
import { renderPortfolio, initFilterUI } from "./data/portfolio.js";
import { populateModal } from "./data/testimonials.js";

/**
 * Initialize all data-driven sections.
 * Each module auto-renders on DOMContentLoaded, but we also call them
 * explicitly here to ensure they run after the DOM is ready.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Render all dynamic content sections
  renderServices(document.querySelector("[data-service-list]"));
  renderSkills(document.querySelector("[data-skills-list]"));
  renderAllTimelines();

  const projectList = document.querySelector("[data-project-list]");
  renderPortfolio(projectList);
  // Initialize filter UI after portfolio items exist in DOM
  initFilterUI(projectList);

  // Initialize modal with first testimonial
  populateModal(0);
});

/**
 * Toggles the 'active' class on an element.
 * @param {HTMLElement} elem - Element to toggle
 */
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/**
 * Sidebar toggle functionality
 */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
  sidebarBtn.setAttribute(
    "aria-expanded",
    sidebar.classList.contains("active") ? "true" : "false",
  );
});

/**
 * Modal testimonial functionality
 */
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const testimonialsModalFunc = function () {
  const isActive = modalContainer.classList.toggle("active");
  overlay.classList.toggle("active", isActive);
  document.body.classList.toggle("is-locked", isActive);

  if (isActive && modalCloseBtn) {
    modalCloseBtn.focus();
  }
};

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalContainer.classList.contains("active")) {
      testimonialsModalFunc();
    }
  });
}

/**
 * Contact form validation and submission
 */
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
const formBtnLabel = document.querySelector("[data-form-btn-label]");
const formStatus = document.querySelector(".form-status");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const isFieldValid = function (input) {
  const value = input.value.trim();

  if (!value) {
    return false;
  }

  if (input.type === "email" && !EMAIL_PATTERN.test(value)) {
    return false;
  }

  return true;
};

const isFormValid = function () {
  for (let i = 0; i < formInputs.length; i++) {
    if (!isFieldValid(formInputs[i])) {
      return false;
    }
  }

  return formInputs.length > 0;
};

const setFormStatus = function (message, state) {
  if (!formStatus) {
    return;
  }

  formStatus.textContent = message;
  formStatus.dataset.state = state;
};

const updateFormBtn = function () {
  if (!formBtn) {
    return;
  }

  // Use aria-disabled instead of disabled so the button stays focusable and
  // clickable, which lets submit-time validation report what is missing.
  const valid = isFormValid();
  formBtn.setAttribute("aria-disabled", String(!valid));
  formBtn.classList.toggle("is-disabled", !valid);
};

if (form && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", updateFormBtn);
    formInputs[i].addEventListener("blur", updateFormBtn);
  }

  updateFormBtn();

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!isFormValid()) {
      setFormStatus(
        "Please fill in your name, a valid email, and a message.",
        "error",
      );
      updateFormBtn();
      formInputs[0].focus();
      return;
    }

    const name = formInputs[0].value.trim();
    const email = formInputs[1].value.trim();
    const message = formInputs[2].value.trim();
    const now = new Date();
    const monthName = now.toLocaleString("en-US", { month: "long" });
    const monthNumber = now.getMonth() + 1; // +1 لأن الشهور تبدأ من 0
    const day = now.getDate();
    const year = now.getFullYear();
    const time = now.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const date = `${monthName} (${monthNumber}) ${day}, ${year} at ${time}`;

    formBtn.setAttribute("disabled", "");
    setFormStatus("Opening WhatsApp...", "pending");

    const restore = function () {
      formBtn.removeAttribute("disabled");
      updateFormBtn();
      if (formBtnLabel) {
        formBtnLabel.textContent = "Send via WhatsApp";
      }
    };

    const whatsappNumber = window.WHATSAPP_NUMBER || "201068480441";
    const whatsappMessage = `A New Message From The CV Website.
    ---------------------------------
    Name: ${name}
    Email: ${email}
    Date: ${date} 
    Message: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setTimeout(function () {
      form.reset();
      updateFormBtn();
      setFormStatus(
        "WhatsApp opened successfully. Please send the message from there.",
        "success",
      );
    }, 1000);
  });
}

/**
 * Page navigation
 */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const targetPage = this.textContent.trim().toLowerCase();

    for (let j = 0; j < pages.length; j++) {
      const isActive = pages[j].dataset.page === targetPage;

      pages[j].classList.toggle("active", isActive);
      navigationLinks[j].classList.toggle("active", isActive);

      if (isActive) {
        navigationLinks[j].setAttribute("aria-current", "page");
      } else {
        navigationLinks[j].removeAttribute("aria-current");
      }
    }

    // Close the sidebar so the selected page is visible on small screens
    if (sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
      sidebarBtn.setAttribute("aria-expanded", "false");
    }

    window.scrollTo(0, 0);
  });
}
