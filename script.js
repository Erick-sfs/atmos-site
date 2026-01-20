// Seleciona todas as seções
const sections = document.querySelectorAll('section');

// Seleciona todos os cards da galeria
const galleryCards = document.querySelectorAll('.galeria .card');

function revealSections() {
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 150;

    if(sectionTop < windowHeight - revealPoint){
      section.classList.add('active');
    }
  });

  // Animação sequencial dos cards
  galleryCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < windowHeight - 150){
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 200); // cada card 0.2s depois do anterior
    }
  });
}

// Chama ao rolar a página
window.addEventListener('scroll', revealSections);
// Chama ao carregar a página
window.addEventListener('load', revealSections);
