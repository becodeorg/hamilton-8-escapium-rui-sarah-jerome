
  
// Sélectionne tous les éléments avec la classe .AboutPageSection7PlusMinus
const plusMinusElements = document.querySelectorAll('.AboutPageSection7PlusMinus');

// Parcourt tous les éléments et ajoute un gestionnaire d'événement de clic à chacun
plusMinusElements.forEach((element, index) => {
  // Ajoute un identifiant unique à chaque élément
  element.id = `plusMinus${index + 1}`;

  // Ajoute le gestionnaire d'événement de clic
  element.addEventListener('click', toggleVisibility);
});


// Fonction de gestion de la visibilité
function toggleVisibility(event) {
    // Récupère l'élément cliqué
    const clickedElement = event.target;
  
    // Modifie la classe CSS de l'élément cliqué
    clickedElement.classList.toggle('active');

    // Récupère l'élément parent (.AboutPageSection7cards) de l'élément cliqué
    const parentElement = clickedElement.closest('.AboutPageSection7cards');

    //Récupère le moins 
    const MinusElement = parentElement.querySelector('.Moins');

    // Modifie la classe CSS de l'élément .Minus
    MinusElement.classList.toggle('MinusVisible');

  
    // Récupère l'élément <p> à l'intérieur de l'élément parent
    const paragraphElement = parentElement.querySelector('p');
  
    // Modifie la classe CSS de l'élément <p> pour afficher ou masquer son contenu
    paragraphElement.classList.toggle('visible');

  }

  




