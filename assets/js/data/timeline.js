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
    title: "Helwan Technological University",
    period: "2025 - 2028",
    description:
      "2nd-year AI student at Helwan Technological University, specializing in building and interacting with AI models and working on a 2nd-year graduation project.",
  },
  {
    title: "High school Of Misr International Computer & AI",
    period: "2022 - 2025",
    description:
      "Specialized in programming, covering basics of databases and robotics, with hands-on Java projects and a graduation project.",
  },
];

/**
 * Experience timeline items.
 * @type {TimelineItem[]}
 */
const experienceData = [
  {
    title: "Frontend Development",
    period: "",
    description:
      "Building responsive, interactive, and user-friendly web interfaces.",
  },
  {
    title: "Programming Development",
    period: "",
    description:
      "Writing clean code, solving problems, and developing software applications.",
  },
  {
    title: "Robotics & Microcontrollers",
    period: "",
    description:
      "Building and programming hardware projects using Arduino and microcontrollers.",
  },
  {
    title: "Graphic Design",
    period: "",
    description:
      "Creating visual content, branding materials, and marketing graphics",
  },
  {
    title: "Video Editing",
    period: "",
    description:
      "Editing and producing engaging video content with clean transitions and visuals.",
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
            ${/*<span>${item.period}</span>*/ ""}
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
