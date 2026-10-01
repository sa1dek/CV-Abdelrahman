/**
 * Services Data Module
 * Contains service items data and rendering logic for the "What I'm doing" section.
 * @module data/services
 */

/**
 * Service item data structure.
 * @typedef {Object} ServiceItem
 * @property {string} icon - Ionicons icon name
 * @property {string} title - Service title
 * @property {string} description - Service description
 */

/**
 * Array of service items.
 * @type {ServiceItem[]}
 */
const servicesData = [
  {
    icon: "code-slash-outline",
    title: "Web Development",
    description: "Building modern, fast, and responsive web applications.",
  },
  {
    icon: "terminal-outline",
    title: "Desktop Applications",
    description: "Developing powerful and reliable desktop software solutions.",
  },
  {
    icon: "color-palette-outline",
    title: "Graphic Design & Branding",
    description: "Creating visual identities, UI designs, and creative graphics.",
  },
  {
    icon: "videocam-outline",
    title: "Video Editing & Motion",
    description: "Editing high-quality videos, promotional content, and motion graphics.",
  },
];

/**
 * Renders service items into the service list container.
 * @param {HTMLElement} container - The .service-list element to populate
 */
function renderServices(container) {
  if (!container) {
    console.warn("Service container not found");
    return;
  }

  container.innerHTML = servicesData
    .map(
      (service) => `
        <li class="service-item">
            <div class="service-header">
                <div class="service-icon-box">
                    <ion-icon name="${service.icon}" aria-hidden="true"></ion-icon>
                </div>
                <div class="service-content">
                    <h4 class="h4 service-item-title">${service.title}</h4>
                    <p class="service-item-text">${service.description}</p>
                </div>
            </div>
        </li>
    `,
    )
    .join("");
}

// Export for manual initialization if needed
export { servicesData, renderServices };
