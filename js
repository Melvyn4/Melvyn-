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
function navigateTo(sectionId) {
  document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
  document.getElementById('entry-screen').style.display = 'none'; // Masque l'entrée après navigation
}
