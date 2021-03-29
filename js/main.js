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

    // if (navMenu.style.display === 'none' || navMenu.style.display == "") {
    //     navMenu.style.display = 'block';
    //     console.log("first");
    // } else {
    //     navMenu.style.display = 'none';
    //     console.log("second");
    // }
  }


// carusel
document.querySelector(".dots-container").addEventListener("click", e => {
  console.log(e.target.children);
})
