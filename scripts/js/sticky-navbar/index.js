(function(){
  const navbar = document.querySelector('.navbar');
  if(!navbar) return;
  const SCROLL_THRESHOLD = 80;
  function updateNavbar(){
    if(window.scrollY > SCROLL_THRESHOLD){
      if(!navbar.classList.contains('sticky')) navbar.classList.add('sticky');
      if(!navbar.classList.contains('navbar-shrink')){
        navbar.classList.add('navbar-shrink');
        document.body.style.paddingTop = navbar.offsetHeight + 'px';
      }
    }else{
      if(navbar.classList.contains('sticky')) navbar.classList.remove('sticky');
      if(navbar.classList.contains('navbar-shrink')){
        navbar.classList.remove('navbar-shrink');
        document.body.style.paddingTop = null;
      }
    }
  }
  window.addEventListener('scroll', updateNavbar, {passive:true});
  updateNavbar();
})();
