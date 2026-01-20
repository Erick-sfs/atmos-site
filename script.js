
const sections = document.querySelectorAll("section");

function animateSections() {
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
}
window.addEventListener("scroll", animateSections);
animateSections();
window.addEventListener("scroll", animateSections);
animateSections();

