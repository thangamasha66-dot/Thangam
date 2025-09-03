// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form submission (just alert for demo)
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});