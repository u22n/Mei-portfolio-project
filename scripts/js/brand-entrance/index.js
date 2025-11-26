(function(){
  const brand = document.querySelector('.brand-mark');
  if(!brand) return;
  // Add the `animate` class (matches CSS .brand-mark.animate) on a short delay
  setTimeout(()=>brand.classList.add('animate'), 120);
})();
