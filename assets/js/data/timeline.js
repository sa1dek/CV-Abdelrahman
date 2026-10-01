/**
 * Timeline Data Module
 * Contains education and experience data and rendering logic for the Resume page.
 * @module data/timeline
 */

/**
 * Timeline item data structure.
 * @typedef {Object} TimelineItem
 * @property {string} title - Item title (e.g., degree, job title)
 * @property {string} period - Time period (e.g., "2022 - 2025")
 * @property {string} description - Detailed description
 */

/**
 * Education timeline items.
 * @type {TimelineItem[]}
 */
const educationData = [
  {
    title: "High school Of Misr International Computer & AI",
    period: "2022 - 2025",
    description:
      "There I learned a wide range of subjects that are essential to understanding the theoretical and practical aspects of computers. These include programming fundamentals, computer architecture, operating systems, databases, software engineering, problem solving, collaboration, and communication skills.",
  },
];

/**
 * Experience timeline items.
 * @type {TimelineItem[]}
 */
const experienceData = [
  {
    title: "Robotics Engineering",
    period: "2022 - 2024",
    description:
      "I can make robots using Arduino, and I participated in competitions in a line-following robot.",
  },
  {
    title: "Programming",
    period: "2022 - 2025",
    description:
      "I create desktop applications, design websites and learn more than 5 programming languages.",
  },
  {
    title: "Graphic Design",
    period: "2025 - ",
    description:
      "I design logos and social media designs and I have experience in Photoshop and Illustrator.",
  },
];

/**
 * Renders timeline items into a timeline list container.
 * @param {HTMLElement} container - The .timeline-list element to populate
 * @param {TimelineItem[]} data - Array of timeline items to render
 */
function renderTimeline(container, data) {
  if (!container) {
    console.warn("Timeline container not found");
    return;
  }

  container.innerHTML = data
    .map(
      (item) => `
        <li class="timeline-item">
            <h4 class="h4 timeline-item-title">${item.title}</h4>
            <span>${item.period}</span>
            <p class="timeline-text">${item.description}</p>
        </li>
    `,
    )
    .join("");
}

/**
 * Renders both education and experience timelines.
 * Finds containers by their preceding h3 titles.
 */
function renderAllTimelines() {
  const educationContainer = document.querySelector(".timeline .timeline-list");
  const experienceContainers = document.querySelectorAll(
    ".timeline .timeline-list",
  );

  // First timeline-list is education, rest are experience
  if (educationContainer) {
    renderTimeline(educationContainer, educationData);
  }

  // Find the second timeline (experience) - it's the second .timeline element
  const timelineSections = document.querySelectorAll(".timeline");
  if (timelineSections.length >= 2) {
    const experienceContainer =
      timelineSections[1].querySelector(".timeline-list");
    if (experienceContainer) {
      renderTimeline(experienceContainer, experienceData);
    }
  }
}

// Export for manual initialization if needed
export { educationData, experienceData, renderTimeline, renderAllTimelines };
