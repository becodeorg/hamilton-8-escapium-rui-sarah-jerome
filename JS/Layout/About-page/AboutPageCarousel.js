// Récupérer les éléments du carrousel
const carouselContainer = document.querySelector('.AboutPageSection6CarouselContainer');
const prevButton = document.querySelector('.carousel__prev');
const nextButton = document.querySelector('.carousel__next');
const slides = Array.from(document.querySelectorAll('.AboutPageSection6CarouselSlide'));

// Définir l'index de la diapositive actuelle
let currentIndex = 0;

// Fonction pour mettre à jour les diapositives affichées
function updateVisibleSlides() {
  // Réinitialiser les classes de visibilité pour toutes les diapositives
  slides.forEach((slide) => {
    slide.classList.remove('visible-left', 'visible-right');
  });

  // Définir les classes de visibilité pour les deux diapositives actuellement affichées
  const prevIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  slides[prevIndex].classList.add('visible-left');
  slides[nextIndex].classList.add('visible-right');
}

// Fonction pour passer à la diapositive précédente
function showPrevSlide() {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  updateVisibleSlides();
}

// Fonction pour passer à la diapositive suivante
function showNextSlide() {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  updateVisibleSlides();
}

// Écouter les clics sur les boutons précédent et suivant
prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

// Afficher les deux premières diapositives au chargement de la page
updateVisibleSlides();