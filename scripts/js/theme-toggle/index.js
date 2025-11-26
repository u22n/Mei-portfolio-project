(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const params = new URLSearchParams(window.location.search);
  const paramTheme = params.get('theme');
  const saved = localStorage.getItem('theme');

  function flashTheme(){
    root.classList.add('theme-transition');
    setTimeout(()=>root.classList.remove('theme-transition'), 400);
  }

  function updateToggleAria(){
    if(!toggle) return;
    toggle.setAttribute('aria-pressed', root.classList.contains('dark'));
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(paramTheme === 'dark' || (!paramTheme && saved === 'dark')){
    root.classList.add('dark');
  }else if(paramTheme === 'light' || (!paramTheme && saved === 'light')){
    root.classList.remove('dark');
  }else{
    if(prefersDark) root.classList.add('dark'); else root.classList.remove('dark');
  }

  updateToggleAria();

  if(toggle){
    toggle.addEventListener('click', ()=>{
      flashTheme();
      root.classList.toggle('dark');
      try{ localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light'); }catch(e){}
      updateToggleAria();
    });
  }

  if('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0,0);

})();
