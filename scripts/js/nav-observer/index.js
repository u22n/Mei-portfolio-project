(function(){
  const navLinks = document.querySelectorAll('a.nav-link');
  const sections = Array.from(document.querySelectorAll('section[id]'));
  if(sections.length === 0) return;

  function setActive(id){
    navLinks.forEach(link=>{
      if(link.getAttribute('href') === `#${id}`){
        link.classList.add('active');
      }else{
        link.classList.remove('active');
      }
    });
  }

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        setActive(entry.target.id);
      }
    });
  }, {rootMargin: '-40% 0px -55% 0px', threshold: 0.1});

  sections.forEach(sec=>io.observe(sec));
})();
