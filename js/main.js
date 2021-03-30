window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('.nav');
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
    }else{
      nav.classList.remove("add-shadow");
    }
  });


  toggleBurger = () => {



    let navMenu = document.querySelector('.nav-list');

    console.log(navMenu.style.display);

    navMenu.classList.toggle("show");

  }


// carusel

// get crrusel container
const carrusel = document.querySelector('.carrusel'); 
// get the carrusel cards
const carruselCards = Array.from(carrusel.children);
// console.log(carruselCards);
const dotsNav = document.querySelector('.dots-container');
const dots = Array.from(dotsNav.children);
// console.log(dots);
const carruselWidth = carruselCards[0].getBoundingClientRect().width;


const setCarruselPosition = (slide, index) => {
  if (index > 0) {
    slide.style.left = carruselWidth * index + 100 * index + 'px';
  } else {
    slide.style.left = carruselWidth * index + 'px';
  }
};

carruselCards.forEach(setCarruselPosition);

const moveToCard = (carrusel, currentCard, targetCard) => {
  carrusel.style.transform = `translate(-${targetCard.style.left})`;
  currentCard.classList.remove('card-active');
  targetCard.classList.add('card-active');
}


const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('card-active');
  targetDot.classList.add('card-active')
};

//dots handiling
dotsNav.addEventListener('click', e => {
  // what did we click?

  const targetDot = e.target.closest('.dot');

  if (!targetDot) return;

  const currentCard = carrusel.querySelector('.card-active');
  const currentDot = dotsNav.querySelector('.card-active');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetCard = carruselCards[targetIndex];

  moveToCard(carrusel, currentCard, targetCard);
  updateDots(currentDot, targetDot);

})