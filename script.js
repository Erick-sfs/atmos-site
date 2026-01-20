alert("JS carregou");

const elements = document.querySelectorAll('.fade-up');

function animateOnScroll() {
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();
const sections = document.querySelectorAll("section");

function animateSections() {
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", animateSections);
animateSections();

