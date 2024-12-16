document.addEventListener('DOMContentLoaded', () => {
  const hiddenElements = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target); // Arrête d'observer une fois que l'animation est jouée
      }
    });
  }, { threshold: 0.1 }); // Déclenchement lorsque 10 % de l'élément est visible

  hiddenElements.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.animated-text');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target); // Arrête d'observer l'élément une fois qu'il est visible
      }
    });
  }, { threshold: 0.1 }); // Se déclenche quand 10% de l'élément est visible

  elements.forEach(element => {
    observer.observe(element);
  });
});
