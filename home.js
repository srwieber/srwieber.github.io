/* hamburger menu */
const menu = document.getElementById('menu');
const icon = document.querySelector('nav span.icon');
icon.addEventListener('click', function() {
  menu.classList.toggle("show");
});

/* scroll to section from menu click */
const navLinks = document.querySelectorAll('nav span:not(.icon)');
navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.id.replace('Link','');
    const targetElement = document.getElementById(targetId);
    const targetPosition = targetElement.offsetTop;
    window.scroll({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

/* Fade in elements on scroll */
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
});
cards.forEach(card => {
  observer.observe(card);
});
