class AnimatedLogo {
    constructor(elementSelector) {
      this.logoElement = document.querySelector(elementSelector);
      this.animationDuration = 1000; // duração da animação em milissegundos
      this.isAnimating = false; // estado da animação
      this.animationInterval = null; // intervalo para a animação
  
      // Vinculando o contexto da classe aos métodos
      this.startAnimation = this.startAnimation.bind(this);
      this.stopAnimation = this.stopAnimation.bind(this);
    }
  
    // Método para iniciar a animação
    startAnimation() {
      if (!this.isAnimating) {
        this.isAnimating = true;
        this.logoElement.style.transition = `transform ${this.animationDuration / 1000}s ease-in-out`;
        this.animationInterval = setInterval(() => {
          this.logoElement.style.transform = 'scale(1.2)'; // escala aumentada
          setTimeout(() => {
            this.logoElement.style.transform = 'scale(1)'; // escala normal após um intervalo
          }, this.animationDuration / 2);
        }, this.animationDuration);
      }
    }
  
    // Método para parar a animação
    stopAnimation() {
      if (this.isAnimating) {
        this.isAnimating = false;
        clearInterval(this.animationInterval);
        this.logoElement.style.transform = 'scale(1)'; // restaura a escala para o valor padrão
      }
    }
  }
  
  // Exemplo de uso
  const logo = new AnimatedLogo('.logo');
  
  // Iniciar a animação quando o logotipo for clicado
  logo.logoElement.addEventListener('click', logo.startAnimation);
  
  // Parar a animação quando o logotipo for clicado novamente
  logo.logoElement.addEventListener('click', function() {
    if (logo.isAnimating) {
      logo.stopAnimation();
    }
  });
  