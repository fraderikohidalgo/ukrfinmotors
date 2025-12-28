
(function(){
  const btn = document.querySelector('.m-menu-btn');
  const menu = document.getElementById('mMenu');

  function openMenu(){
    if(!menu || !btn) return;
    menu.setAttribute('aria-hidden','false');
    btn.setAttribute('aria-expanded','true');
  }
  function closeMenu(){
    if(!menu || !btn) return;
    menu.setAttribute('aria-hidden','true');
    btn.setAttribute('aria-expanded','false');
  }
  function toggleMenu(){
    if(!menu) return;
    const open = menu.getAttribute('aria-hidden') === 'false';
    open ? closeMenu() : openMenu();
  }

  if(btn){
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      toggleMenu();
    });
  }

  if(menu){
    menu.addEventListener('click', (e)=>{
      const t = e.target;
      if(t && t.dataset && t.dataset.close){
        closeMenu();
      }
      e.stopPropagation();
    });
  }

  document.addEventListener('click', ()=>closeMenu());
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeMenu(); });
})();
