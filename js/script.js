// Swiper js
const swiper = new Swiper(".mySwiper", {
  loop: true,
    slidesPerView: 1,
  //grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Nav open close
const body = document.querySelector('body'),
    navMenu = body.querySelector('.menu-content'),
    navOpenBtn = body.querySelector('.navOpen-btn'),
    navCloseBtn = navMenu.querySelector('.navClose-btn');

if (navMenu && navOpenBtn) {
    navOpenBtn.addEventListener("click", () => {
        navMenu.classList.add("open");
        body.style.owerflowY = "hidden";
        })
}
    
if (navMenu && navCloseBtn) {
    navCloseBtn.addEventListener("click", () => {
        navMenu.classList.remove("open");
        body.style.owerflowY = "scroll";
        })
    }


// Change header bg color


// Scroll up button
  
  
  
// Nav link indicator
 
  
// Scroll Reveal Animation
  