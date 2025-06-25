// Smooth fade-in animation
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));

// Contact form message
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Thank you! I'll get back to you soon.";
  this.reset();
});

// Lightbox functionality
document.querySelectorAll('.lightbox').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-full';
    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    overlay.appendChild(fullImg);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});
