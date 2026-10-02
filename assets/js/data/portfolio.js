/**
 * Portfolio Data Module
 * Contains portfolio projects data, rendering logic, and filtering for the Portfolio page.
 * @module data/portfolio
 */

/**
 * Portfolio item data structure.
 * @typedef {Object} PortfolioItem
 * @property {string} category - Filter category (web development, desktop applications, graphic design, certificates)
 * @property {string} image - Path to the project thumbnail image
 * @property {string} alt - Alt text for the image
 * @property {string} title - Project title
 * @property {string} categoryLabel - Display category label
 * @property {string} link - URL to the project/PDF
 * @property {boolean} [external=false] - Whether link opens in new tab
 * @property {string} [ariaLabel] - Custom aria-label for the link
 */

/**
 * Array of all portfolio items.
 * @type {PortfolioItem[]}
 */
const portfolioData = [
  // Web Development
  {
    category: "web development",
    image: "assets/images/web/qr-code-generator.jpg",
    alt: "QR Code Generator web app",
    title: "QR Code Generator",
    categoryLabel: "Website",
    link: "https://qr-code-generator-gules-iota.vercel.app/",
  },
  {
    category: "web development",
    image: "assets/images/web/watch-website-store.jpg",
    alt: "Watch website store",
    title: "Watch Website Store",
    categoryLabel: "Website",
    link: "assets/images/web/watch-website-store.jpg",
  },
  {
    category: "web development",
    image: "assets/images/web/organizational-details.png",
    alt: "Organizational details",
    title: "Organizational Details",
    categoryLabel: "Website",
    link: "assets/images/web/organizational-details.png",
  },
  {
    category: "web development",
    image: "assets/images/web/dashboard.png",
    alt: "Dashboard web project",
    title: "Dashboard",
    categoryLabel: "Website",
    link: "assets/images/pdf/DashBoard.pdf",
  },
  {
    category: "web development",
    image: "assets/images/web/website.png",
    alt: "Portfolio web project",
    title: "Portfolio Website",
    categoryLabel: "Website",
    link: "assets/images/pdf/website.pdf",
  },
  {
    category: "web development",
    image: "assets/images/web/website-login.png",
    alt: "Website login pages",
    title: "Website Login Pages",
    categoryLabel: "Website",
    link: "assets/images/pdf/website-login.pdf",
  },

  // Desktop Applications
  {
    category: "desktop applications",
    image: "assets/images/desktop/library.png",
    alt: "System Library desktop app",
    title: "System Library",
    categoryLabel: "Desktop Applications",
    link: "assets/images/desktop/library.png",
  },
  {
    category: "desktop applications",
    image: "assets/images/desktop/online-home-page.png",
    alt: "System Online Exam home screen",
    title: "System Online Exam Home",
    categoryLabel: "Desktop Applications",
    link: "assets/images/desktop/online-home-page.png",
  },
  {
    category: "desktop applications",
    image: "assets/images/desktop/online-login-page.png",
    alt: "System Online Exam login screen",
    title: "System Online Exam Login",
    categoryLabel: "Desktop Applications",
    link: "assets/images/desktop/online-login-page.png",
  },
  {
    category: "desktop applications",
    image: "assets/images/desktop/online-exam.png",
    alt: "System Online Exam main screen",
    title: "System Online Exam",
    categoryLabel: "Desktop Applications",
    link: "assets/images/desktop/online-exam.png",
  },
  // Robotics
  // {
  //   category: "robotics",
  //   image: "assets/images/robotics/robotic-arm.jpg",
  //   alt: "Line Follower Robot",
  //   title: "Line Follower Robot",
  //   categoryLabel: "Robotics",
  //   link: "assets/images/pdf/robotic-arm.pdf",
  // },
  // Graphic Design
  {
    category: "graphic design",
    image: "assets/images/photoshop/mouse-logitech.png",
    alt: "Logitech mouse graphic design",
    title: "Mouse Logitech",
    categoryLabel: "Graphic Design",
    link: "assets/images/pdf/mouse-logitech.pdf",
  },
  {
    category: "graphic design",
    image: "assets/images/photoshop/monestor.png",
    alt: "Horror movie poster design",
    title: "Horror Movie",
    categoryLabel: "Graphic Design",
    link: "assets/images/pdf/monestor.pdf",
    external: true,
    ariaLabel: "View Monestor poster",
  },
  {
    category: "graphic design",
    image: "assets/images/photoshop/josue.png",
    alt: "Josue graphic design",
    title: "Josue",
    categoryLabel: "Graphic Design",
    link: "assets/images/pdf/josue.pdf",
  },
  {
    category: "graphic design",
    image: "assets/images/photoshop/car-fajr-mood.png",
    alt: "Night Mood graphic design",
    title: "Night Mood",
    categoryLabel: "Graphic Design",
    link: "assets/images/pdf/car-fajr-mood.pdf",
  },
  {
    category: "graphic design",
    image: "assets/images/photoshop/car-byd.png",
    alt: "BYD car graphic design",
    title: "BYD Car",
    categoryLabel: "Graphic Design",
    link: "assets/images/pdf/car-byd.pdf",
    external: true,
    ariaLabel: "Open Car BYD PDF",
  },
  {
    category: "graphic design",
    image: "assets/images/photoshop/7up.png",
    alt: "7UP graphic design",
    title: "7UP",
    categoryLabel: "Graphic Design",
    link: "assets/images/pdf/7up.pdf",
  },
  {
    category: "graphic design",
    image: "assets/images/photoshop/ramadan.png",
    alt: "Ramadan graphic design",
    title: "Ramadan",
    categoryLabel: "Graphic Design",
    link: "assets/images/pdf/ramadan.pdf",
  },

  // Certificates
  {
    category: "certificates",
    image: "assets/images/certificates/nti-ai-program-2026.jpg",
    alt: "AI Ambassadors program From NTI Certificate",
    title: "AI Ambassadors program From NTI",
    categoryLabel: "Certificates",
    link: "assets/images/pdf/nti-ai-program-2026.pdf",
  },
  // Mica Certificates
  {
    category: "certificates",
    image: "assets/images/certificates/java-summer-camp-2024.jpg",
    alt: "Java Summer Camp Certificate",
    title: "Java Summer Camp",
    categoryLabel: "Certificates",
    link: "assets/images/pdf/java-summer-camp-2024.pdf",
  },
  {
    category: "certificates",
    image:
      "assets/images/certificates/robocup-mica-line-follower-robot-2025.jpg",
    alt: "RoboCup MICA Egypt Competition Certificate",
    title: "RoboCup MICA Egypt Competition",
    categoryLabel: "Certificates",
    link: "assets/images/pdf/robocup-mica-line-follower-robot-2025.pdf",
  },
  {
    category: "certificates",
    image:
      "assets/images/certificates/robocup-mica-line-follower-robot-2023.jpg",
    alt: "RoboCup MICA Egypt Competition Certificate",
    title: "RoboCup MICA Egypt Competition",
    categoryLabel: "Certificates",
    link: "assets/images/pdf/robocup-mica-line-follower-robot-2023.pdf",
  },
  {
    category: "certificates",
    image: "assets/images/certificates/ai-course-2024.jpg",
    alt: "AI Course 2024 Certificate",
    title: "AI Course 2024",
    categoryLabel: "Certificates",
    link: "assets/images/pdf/ai-course-2024.pdf",
  },
  // Oracle Certificates
  {
    category: "certificates",
    image: "assets/images/certificates/dd-database.jpg",
    alt: "Database Design Certificate",
    title: "Database Design",
    categoryLabel: "Certificates",
    link: "assets/images/pdf/dd-database.pdf",
  },
  {
    category: "certificates",
    image: "assets/images/certificates/df-database.jpg",
    alt: "Database Foundation Certificate",
    title: "Database Foundation",
    categoryLabel: "Certificates",
    link: "assets/images/pdf/df-database.pdf",
  },
  {
    category: "certificates",
    image: "assets/images/certificates/dp-database.jpg",
    alt: "Database Programming With SQL Certificate",
    title: "Database Programming With SQL",
    categoryLabel: "Certificates",
    link: "assets/images/pdf/dp-database.pdf",
  },
  {
    category: "certificates",
    image: "assets/images/certificates/jff-java.jpg",
    alt: "Java Foundation Certificate",
    title: "Java Foundation",
    categoryLabel: "Certificates",
    link: "assets/images/pdf/jff-java.pdf",
  },
  {
    category: "certificates",
    image: "assets/images/certificates/jf-java.jpg",
    alt: "Java Fundamentals Certificate",
    title: "Java Fundamentals",
    categoryLabel: "Certificates",
    link: "assets/images/pdf/jf-java.pdf",
  },
  {
    category: "certificates",
    image: "assets/images/certificates/jp-java.jpg",
    alt: "Java Programming Certificate",
    title: "Java Programming",
    categoryLabel: "Certificates",
    link: "assets/images/pdf/jp-java.pdf",
  },
  {
    category: "certificates",
    image: "assets/images/certificates/pl-sql_database.jpg",
    alt: "PL/SQL Database Programming Semester 2 certificate",
    title: "PL/SQL Database Programming Semester2",
    categoryLabel: "Certificates",
    link: "assets/images/pdf/pl-sql_database.pdf",
  },
];

/**
 * Renders portfolio items into the project list container.
 * @param {HTMLElement} container - The .project-list element to populate
 * @param {PortfolioItem[]} [data=portfolioData] - Optional data array to render (default: all items)
 */
function renderPortfolio(container, data = portfolioData) {
  if (!container) {
    console.warn("Portfolio container not found");
    return;
  }

  container.innerHTML = data
    .map((item) => {
      const externalAttrs = item.external
        ? ' target="_blank" rel="noopener noreferrer"'
        : "";
      const ariaLabelAttr = item.ariaLabel
        ? ` aria-label="${item.ariaLabel}"`
        : "";

      return `
            <li class="project-item active" data-filter-item data-category="${item.category}">
                <a href="${item.link}"${externalAttrs}${ariaLabelAttr} class="project-card">
                    <figure class="project-img">
                        <img src="${item.image}" alt="${item.alt}" loading="lazy" />
                    </figure>
                    <div class="project-info">
                        <h3 class="project-title">${item.title}</h3>
                        <button class="project-view-btn" type="button" aria-label="View ${item.title}" tabindex="-1">
                            <ion-icon name="eye-outline"></ion-icon>
                        </button>
                    </div>
                </a>
            </li>
        `;
    })
    .join("");
}

/**
 * Gets unique categories from portfolio data.
 * @param {PortfolioItem[]} [data=portfolioData] - Data array to extract categories from
 * @returns {string[]} Sorted unique categories
 */
function getCategories(data = portfolioData) {
  const categories = [...new Set(data.map((item) => item.category))];
  return categories.sort();
}

/**
 * Filters portfolio items by category and re-renders the list.
 * @param {HTMLElement} container - The .project-list element to populate
 * @param {string} category - Category to filter by ('all' or category key)
 * @param {PortfolioItem[]} [data=portfolioData] - Data array to filter
 */
function filterPortfolio(container, category, data = portfolioData) {
  if (!container) {
    console.warn("Portfolio container not found");
    return;
  }

  const filtered =
    category === "all"
      ? data
      : data.filter((item) => item.category === category);

  renderPortfolio(container, filtered);
}

/**
 * Attaches click event listeners to filter buttons and dropdown items.
 * This should be called after the portfolio is rendered and filter UI exists.
 * @param {HTMLElement} container - The .project-list element
 * @param {PortfolioItem[]} [data=portfolioData] - Data array to filter
 */
function initFilterUI(container, data = portfolioData) {
  const filterButtons = document.querySelectorAll("[data-filter-btn]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-select-value]");
  const select = document.querySelector("[data-select]");

  /**
   * Updates active state on all filter buttons and dropdown items.
   * @param {string} label - The label of the selected filter
   */
  const syncFilterState = (label) => {
    if (selectValue) {
      selectValue.textContent = label;
    }
    filterButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.textContent.trim() === label);
    });
    selectItems.forEach((item) => {
      item.classList.toggle("active", item.textContent.trim() === label);
    });
  };

  /**
   * Closes the dropdown select if open.
   */
  const closeSelect = () => {
    if (select && select.classList.contains("active")) {
      select.classList.remove("active");
    }
  };

  // Filter button clicks (desktop)
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const label = btn.textContent.trim();
      const category = label.toLowerCase();
      syncFilterState(label);
      filterPortfolio(container, category, data);
    });
  });

  // Dropdown item clicks (mobile)
  selectItems.forEach((item) => {
    item.addEventListener("click", () => {
      const label = item.textContent.trim();
      const category = label.toLowerCase();
      syncFilterState(label);
      closeSelect();
      filterPortfolio(container, category, data);
    });
  });

  // Dropdown toggle
  if (select) {
    select.addEventListener("click", () => {
      select.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".filter-select-box")) {
        closeSelect();
      }
    });

    // Close dropdown on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeSelect();
      }
    });
  }
}

// Export for manual initialization if needed
export {
  portfolioData,
  renderPortfolio,
  getCategories,
  filterPortfolio,
  initFilterUI,
};
