/**
 * Skills/Tools Data Module
 * Contains tools data and rendering logic for the "My Skills" section.
 * @module data/skills
 */

/**
 * Tool item data structure.
 * @typedef {Object} ToolItem
 * @property {string} name - Tool/technology name
 * @property {string} icon - Icon filename (without extension)
 */

const toolsData = [
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React", icon: "react" },
  { name: "Java", icon: "java" },
  { name: "C", icon: "C" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Database", icon: "database" },
  { name: "Arduino", icon: "arduino" },
];

/**
 * Renders tool items into the skills list container as a grid of cards.
 * @param {HTMLElement} container - The .skills-list element to populate
 */
function renderSkills(container) {
  if (!container) {
    console.warn("Skills container not found");
    return;
  }

  container.innerHTML = toolsData
    .map(
      (tool) => `
        <li class="tool-card">
          <div class="tool-card-icon">
            <img src="assets/images/tools/${tool.icon}.svg" alt="${tool.name}" loading="lazy" />
          </div>
          <span class="tool-card-name">${tool.name}</span>
        </li>
    `,
    )
    .join("");
}

export { toolsData, renderSkills };