// Seleciona todas as seções
const sections = document.querySelectorAll('section');

// Função para verificar se a seção está visível na tela
function revealSections() {
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 150; // quão cedo a animação dispara

    if(sectionTop < windowHeight - revealPoint){
      section.classList.add('active');
    }
  });
}

// Chama a função ao rolar a página
window.addEventListener('scroll', revealSections);

// Chama uma vez ao carregar a página
window.addEventListener('load', revealSections);

// Chama a função ao rolar a página
window.addEventListener('scroll', revealSections);

// Chama uma vez ao carregar a página (para seções já visíveis)
window.addEventListener('load', revealSections);
