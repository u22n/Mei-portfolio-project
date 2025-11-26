(function(){
  const brand = document.querySelector('.navbar-brand');
  if(!brand) return;
  setTimeout(()=>brand.classList.add('brand-enter'), 300);
})();
