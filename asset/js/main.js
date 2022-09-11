const HAMBURGER = document.querySelector('.hamburger');
const NAVLINKS = document.querySelector(".nav-links")

HAMBURGER.addEventListener('click', function(){
    this.classList.toggle('active');
    NAVLINKS.classList.toggle('mobile-menu')
});