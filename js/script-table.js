const links = document.querySelectorAll('span a');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(e) {
    e.preventDefault();
    const linkId = this.getAttribute('href');
    const linha = document.querySelector(linkId);
    const todasAsLinhas = document.querySelectorAll('td');
    for (let i = 0; i < todasAsLinhas.length; i++) {
      todasAsLinhas[i].classList.remove('destaque');
    }
    linha.classList.remove('remover'); 
    linha.classList.add('destaque'); 
    linha.addEventListener('transitionend', function() {
      setTimeout(function() {
        linha.classList.remove('destaque');
        linha.classList.add('remover');
      }, 1000); 
    });
    linha.scrollIntoView({ behavior: 'smooth' });
  });
}
