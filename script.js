const sections = document.querySelectorAll('section');

function revealSections() {
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 150;

    if(sectionTop < windowHeight - revealPoint){
      section.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

