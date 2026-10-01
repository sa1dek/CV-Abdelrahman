/**
 * Testimonials Data Module
 * Contains testimonials data for the modal dialog.
 * @module data/testimonials
 */

/**
 * Testimonial item data structure.
 * @typedef {Object} TestimonialItem
 * @property {string} avatar - Path to avatar image
 * @property {string} avatarAlt - Alt text for avatar
 * @property {string} name - Person name
 * @property {string} date - Date string (ISO format for datetime attribute)
 * @property {string} text - Testimonial text content
 */

/**
 * Array of testimonial items.
 * @type {TestimonialItem[]}
 */
const testimonialsData = [
  {
    avatar: "https://i.postimg.cc/zGDHfn3G/avatar-1.png",
    avatarAlt: "Daniel Lewis",
    name: "Daniel Lewis",
    date: "2023-06-14",
    text: "<p>Richard was hired to create a corporate identity. It's modern, clean and with a beautiful design that got a lot of praises from colleagues and visitors. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.</p>",
  },
];

/**
 * Populates the modal with testimonial data.
 * The modal template should exist in HTML with data attributes:
 * - [data-modal-img] for avatar
 * - [data-modal-title] for name
 * - [data-modal-text] for testimonial text
 * @param {number} [index=0] - Index of testimonial to display
 */
function populateModal(index = 0) {
  const testimonial = testimonialsData[index];
  if (!testimonial) return;

  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");
  const modalTime = document.querySelector(".testimonials-modal time");

  if (modalImg) {
    modalImg.src = testimonial.avatar;
    modalImg.alt = testimonial.avatarAlt;
  }
  if (modalTitle) {
    modalTitle.textContent = testimonial.name;
  }
  if (modalText) {
    modalText.innerHTML = testimonial.text;
  }
  if (modalTime) {
    modalTime.setAttribute("datetime", testimonial.date);
    modalTime.textContent = new Date(testimonial.date).toLocaleDateString(
      "en-US",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      },
    );
  }
}

// Export for manual initialization if needed
export { testimonialsData, populateModal };
