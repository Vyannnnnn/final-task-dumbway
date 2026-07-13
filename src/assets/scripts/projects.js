const projectsData = [
  {
    id: 1,
    title: "Heavy Equipment Website",
    category: "Freelance",
    categoryColor: "tag-teal",
    image: "/img/alat-berat.png",
    shortDesc:
      "Troubleshot and optimized the heavy equipment e-commerce platform for better performance and reliability.",
    challenge:
      "The platform was experiencing slow load times and high bounce rates due to unoptimized images and poor database queries.",
    solution:
      "Implemented image compression, optimized SQL queries, added caching strategies, and improved overall database indexing. Reduced load time by 60%.",
    timeline: "1 month",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demoLink: "https://heavy-equipment.example.com",
    githubLink: "https://github.com/yourname/heavy-equipment-website",
  },
  {
    id: 2,
    title: "Website Clipper",
    category: "Freelance",
    categoryColor: "tag-yellow",
    image: "/img/clipper.png",
    shortDesc:
      "Develop a Python-based web clipper to extract, process, and store structured data from multiple websites.",
    challenge:
      "Need to extract and normalize data from multiple website sources with different HTML structures in real-time.",
    solution:
      "Built a robust web scraper using BeautifulSoup with regex pattern matching. Implemented data validation and normalization pipeline. Created REST API for data retrieval.",
    timeline: "4 months",
    techStack: ["Python", "MySQL", "JavaScript"],
    demoLink: "https://clipper-app.example.com",
    githubLink: "https://github.com/Vyannnnnn/ClipperV2",
  },
  {
    id: 3,
    title: "Website Templates",
    category: "Digital Product",
    categoryColor: "tag-red",
    image: "/img/portfolio.png",
    shortDesc:
      "Design and develop customizable portfolio website templates tailored for developers and professionals.",
    challenge:
      "Create reusable, responsive templates that are easy to customize without coding knowledge.",
    solution:
      "Developed modular component-based templates using Bootstrap. Created admin dashboard for easy customization of colors, fonts, and content.",
    timeline: "3 weeks",
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    demoLink: "https://vyannnnnn.github.io/portfolio-cuy/",
    githubLink: "https://github.com/Vyannnnnn/portfolio-cuy",
  },
  {
    id: 4,
    title: "Sports Equipment Dashboard",
    category: "Freelance",
    categoryColor: "tag-grey",
    image: "/img/sport.png",
    shortDesc:
      "Built a responsive e-commerce platform for sports equipment sales with inventory management.",
    challenge:
      "Need to manage complex inventory with multiple product variants and real-time stock updates.",
    solution:
      "Implemented real-time inventory system with low-stock alerts. Created admin dashboard with analytics and sales reporting.",
    timeline: "2 months",
    techStack: ["Laravel", "JavaScript", "Tailwind", "MySQL"],
    demoLink: "https://sports-equipment.example.com",
    githubLink: "https://github.com/Vyannnnnn/my-sports",
  },
  {
    id: 5,
    title: "Car Rent Website",
    category: "Freelance",
    categoryColor: "tag-teal",
    image: "/img/rent.png",
    shortDesc:
      "Built a responsive e-commerce platform for car rental services with inventory management.",
    challenge:
      "Manage car availability calendar with overlapping reservations and automated pricing.",
    solution:
      "Built advanced booking system with calendar conflict detection. Implemented dynamic pricing based on demand and seasonal rates.",
    timeline: "2.5 months",
    techStack: ["CodeIgniter", "MySQL"],
    demoLink: "https://car-rent.example.com",
    githubLink: "https://github.com/Vyannnnnn/Rental-Mobil",
  },
  {
    id: 6,
    title: "Movie List Website",
    category: "Freelance",
    categoryColor: "tag-yellow",
    image: "/img/mov.png",
    shortDesc:
      "Built a responsive platform for movie listings with inventory management.",
    challenge:
      "Handle large movie database with advanced filtering and search functionality.",
    solution:
      "Integrated with TMDB API for movie data. Implemented Elasticsearch for fast full-text search. Added personalized recommendation system.",
    timeline: "2 months",
    techStack: ["React", "Node.js", "Tailwind", "JavaScript"],
    demoLink: "https://movie-list.example.com",
    githubLink: "https://github.com/Vyannnnnn/movie-web-",
  },
  {
    id: 7,
    title: "Education Game Website",
    category: "Freelance",
    categoryColor: "tag-red",
    image: "/img/game.png",
    shortDesc:
      "Developed an interactive educational game combining engaging gameplay mechanics with learning content.",
    challenge:
      "Create engaging educational content that maintains user retention and tracks learning progress.",
    solution:
      "Built gamified learning experience with achievements, leaderboards, and progress tracking. Integrated spaced repetition algorithm for optimal learning.",
    timeline: "2 months",
    techStack: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://education-game.example.com",
    githubLink: "https://github.com/Vyannnnnn/Joki-Game",
  },
  {
    id: 8,
    title: "Dental Care Website",
    category: "Freelance",
    categoryColor: "tag-grey",
    image: "/img/key.png",
    shortDesc:
      "Built a professional dental clinic website featuring appointment booking and patient management.",
    challenge:
      "Create seamless appointment booking system with automated reminders and patient communication.",
    solution:
      "Implemented real-time appointment scheduling with SMS/Email notifications. Created patient portal for medical history and appointment history.",
    timeline: "3 months",
    techStack: ["Node.js", "Express", "React", "MySQL", "WebSocket", "Tailwind"],
    demoLink: "https://dental-care.example.com",
    githubLink: "https://github.com/Vyannnnnn/key-dental-care-FE",
  },
  {
    id: 9,
    title: "Cashier Website",
    category: "Freelance",
    categoryColor: "tag-teal",
    image: "/img/kasir.png",
    shortDesc:
      "Built a user-friendly cashier system for restaurants and retail stores with inventory tracking.",
    challenge:
      "Create fast, reliable POS system that handles concurrent transactions and integrates with inventory.",
    solution:
      "Built offline-first POS system with sync capability. Implemented real-time inventory updates and integrated with accounting software.",
    timeline: "3 months",
    techStack: ["Tailwind", "JavaScript", "CodeIgniter", "MySQL",],
    demoLink: "https://cashier-system.example.com",
    githubLink: "https://github.com/Vyannnnnn/web-kasirmakan",
  },
];

// Render projects
function renderProjects() {
  const container = document.getElementById("projectsContainer");
  container.innerHTML = projectsData
    .map((project) => {
      return `<div class="col-md-6">
      <div class="project-card-wrapper">
        <button class="card project-card h-100 border p-4 w-100 text-start" 
                style="background:none; border:none; padding:0 !important;" 
                onclick="openProjectModal(${project.id})">
          <div class="card-thumb">
            <img src="${project.image}" alt="${project.title}" loading="lazy" />
            <div class="card-thumb-overlay"></div>
          </div>
          <div class="card-body-inner">
            <span class="tag ${project.categoryColor} d-inline-block mb-2">${project.category}</span>
            <h5>${project.title}</h5>
            <p class="text-muted mb-2">${project.shortDesc}</p>
          </div>
        </button>
        <div class="floating-text">View Detail →</div>
      </div>
    </div>`;
    })
    .join("");

  // Add cursor tracking to all project cards
  setupProjectCardHover();
}

// Setup cursor tracking for project cards
function setupProjectCardHover() {
  const cardWrappers = document.querySelectorAll(".project-card-wrapper");

  cardWrappers.forEach((wrapper) => {
    const floatingText = wrapper.querySelector(".floating-text");
    let mouseX = 0;
    let mouseY = 0;
    let floatingX = 0;
    let floatingY = 0;
    let isHovering = false;
    let animationId = null;

    wrapper.addEventListener("mouseenter", () => {
      isHovering = true;
      floatingText.style.opacity = "1";
      floatingText.style.pointerEvents = "none";
      if (animationId) cancelAnimationFrame(animationId);
      animateFloatingText();
    });

    wrapper.addEventListener("mousemove", (e) => {
      const rect = wrapper.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    wrapper.addEventListener("mouseleave", () => {
      isHovering = false;
      floatingText.style.opacity = "0";
    });

    function animateFloatingText() {
      if (!isHovering) return;

      // Smooth lag effect
      const lerpSpeed = 0.15;
      floatingX += (mouseX - floatingX) * lerpSpeed;
      floatingY += (mouseY - floatingY) * lerpSpeed;

      floatingText.style.transform = `translate(${floatingX - 60}px, ${floatingY - 20}px)`;

      animationId = requestAnimationFrame(animateFloatingText);
    }
  });
}

// Open modal
function openProjectModal(projectId) {
  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return;

  // Set gradient header based on category color
  const gradientHeader = document.getElementById("modalGradientHeader");
  const gradientClassMap = {
    "tag-teal": "header-teal",
    "tag-yellow": "header-yellow",
    "tag-red": "header-red",
    "tag-grey": "header-grey",
  };
  gradientHeader.className =
    "modal-gradient-header " + (gradientClassMap[project.categoryColor] || "");

  // Set title and category badge
  document.getElementById("projectModalLabel").textContent = project.title;
  document.getElementById("modalCategoryBadge").textContent = project.category;

  // Set image
  document.getElementById("modalProjectImage").src = project.image;
  document.getElementById("modalProjectImage").alt = project.title;

  // Set description
  document.getElementById("modalProjectDescription").textContent =
    project.shortDesc;

  // Tech Stack with devicons and badges
  const iconMap = {
    html: "devicon-html5-plain colored",
    css: "devicon-css3-plain colored",
    javascript: "devicon-javascript-plain colored",
    php: "devicon-php-plain colored",
    mysql: "devicon-mysql-plain colored",
    python: "devicon-python-plain colored",
    beautifulsoup: "devicon-python-plain colored",
    flask: "devicon-flask-original colored",
    postgresql: "devicon-postgresql-plain colored",
    bootstrap: "devicon-bootstrap-plain colored",
    handlebars: "devicon-handlebars-original colored",
    "node.js": "devicon-nodejs-plain colored",
    express: "devicon-express-original colored",
    react: "devicon-react-original colored",
    stripe: "devicon-stripe-plain colored",
    "vue.js": "devicon-vuejs-plain colored",
    mongodb: "devicon-mongodb-plain colored",
    elasticsearch: "devicon-elasticsearch-plain colored",
    "phaser.js": "devicon-javascript-plain colored",
    websocket: "devicon-javascript-plain colored",
    codeigniter: "devicon-codeigniter-plain colored",
    tailwind: "devicon-tailwindcss-plain colored",
    laravel: "devicon-laravel-plain colored",
  };

  const techStackHtml = project.techStack
    .map((tech) => {
      const techLower = tech.toLowerCase();
      const iconClass = iconMap[techLower] || "devicon-devicon-plain";
      return `<span class="tech-badge"><i class="devicon ${iconClass}"></i> ${tech}</span>`;
    })
    .join("");
  document.getElementById("modalTechStack").innerHTML = techStackHtml;

  // Set challenge, solution, timeline
  document.getElementById("modalChallenge").textContent = project.challenge;
  document.getElementById("modalSolution").textContent = project.solution;
  document.getElementById("modalTimeline").textContent = project.timeline;

  // Links
  const demoLink = document.getElementById("modalDemoLink");
  const githubLink = document.getElementById("modalGithubLink");

  if (project.demoLink) {
    demoLink.href = project.demoLink;
    demoLink.style.display = "inline-block";
  } else {
    demoLink.style.display = "none";
  }

  if (project.githubLink) {
    githubLink.href = project.githubLink;
    githubLink.style.display = "inline-block";
  } else {
    githubLink.style.display = "none";
  }

  // Show modal
  const modal = new bootstrap.Modal(document.getElementById("projectModal"));
  modal.show();
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", renderProjects);
