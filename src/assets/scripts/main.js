// scroll progress bar
function updateProgress() {
  const scrollTop = window.scrollY;
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docH > 0 ? (scrollTop / docH) * 100 : 0;
  const progressEl = document.getElementById("scrollProgress");
  if (!progressEl) return;
  progressEl.style.width = pct + "%";
}

// navbar scroll shadow
const mainNav = document.getElementById("mainNav");
window.addEventListener(
  "scroll",
  () => {
    if (!mainNav) return;
    mainNav.classList.toggle("scrolled", window.scrollY > 8);
  },
  { passive: true },
);

// typing effect for hello
(function () {
  const text = "Hello";
  const el = document.getElementById("typedText");
  const cursor = document.getElementById("cursor");
  if (!el || !cursor) return;
  let i = 0;
  const speed = 110;

  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, i === 1 ? 600 : speed); //  delay
    } else {
      cursor.classList.add("done");
    }
  }
  setTimeout(type, 800); // start after fade-in
})();

// active nav link highlight on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
const navHeight = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue("--nav-h"),
);

function updateActiveLink() {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - navHeight - 10) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle(
      "active-link",
      link.getAttribute("href") === "#" + current,
    );
  });
}


// scroll-reveal
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const siblings = [
          ...entry.target.parentElement.querySelectorAll(".reveal"),
        ];
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = idx * 80 + "ms";
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealEls.forEach((el) => observer.observe(el));

// back to top button
const btn = document.getElementById("backToTop");
function updateBtn() {
  if (!btn) return;
  btn.classList.toggle("show", window.scrollY > 400);
}

// Click handler for back to top
if (btn) {
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

window.addEventListener(
  "scroll",
  () => {
    updateProgress();
    updateActiveLink();
    updateBtn();
  },
  { passive: true },
);
updateProgress();
updateActiveLink();
updateBtn();

