// Smooth scroll for internal anchor links (href starting with #)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Highlight the active menu link based on current URL
window.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split("/").pop() || 'index.html'; // fallback to index.html if empty
  document.querySelectorAll('.top-footer-menu a').forEach(link => {
    let href = link.getAttribute('href');

    // Normalize href for home page
    if (href === "/" || href === "") {
      href = "index.html";
    }

    // Add 'active' class if it matches current page, remove otherwise
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
// Create a back-to-top button dynamically
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '↑ Top';
backToTopBtn.id = 'backToTopBtn';
backToTopBtn.style.cssText = `
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 10px 15px;
  font-size: 18px;
  display: none;
  cursor: pointer;
  background-color: #357abd;
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  z-index: 10000;
`;
document.body.appendChild(backToTopBtn);

// Show button after scrolling down 200px
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// Scroll smoothly to top when clicked
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
