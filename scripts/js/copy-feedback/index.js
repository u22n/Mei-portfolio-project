(function(){
  const copyEmail = document.getElementById('copyEmail');
  const copyPhone = document.getElementById('copyPhone');
  if(!window.bootstrap) return;

  if(copyEmail){
    const tipEmail = new bootstrap.Tooltip(copyEmail, {title:'Email copied', trigger:'manual', placement:'top'});
    copyEmail.addEventListener('click', async ()=>{
      const text = (document.getElementById('previewEmail')?.textContent || '').trim();
      try{ await navigator.clipboard.writeText(text); tipEmail.show(); setTimeout(()=>tipEmail.hide(), 1000); }catch(e){ tipEmail.hide(); }
    });
  }

  if(copyPhone){
    const tipPhone = new bootstrap.Tooltip(copyPhone, {title:'Phone copied', trigger:'manual', placement:'top'});
    copyPhone.addEventListener('click', async ()=>{
      const text = (document.getElementById('previewPhone')?.textContent || '').trim();
      try{ await navigator.clipboard.writeText(text); tipPhone.show(); setTimeout(()=>tipPhone.hide(), 1000); }catch(e){ tipPhone.hide(); }
    });
  }
})();
