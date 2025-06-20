// Smooth scroll σε εσωτερικούς συνδέσμους (αν έχεις anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Προαιρετικά: Highlight στο ενεργό link με βάση το URL
window.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll('.top-footer-menu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
