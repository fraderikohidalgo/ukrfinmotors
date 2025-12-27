
(function(){
  const PHONE = "+358 41 499 3477";
  const TEL = "tel:+358414993477";

  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.getElementById("mobileMenu");
  const callModal = document.getElementById("callModal");
  const callTitle = document.getElementById("callModalTitle");
  const callNowBtn = document.getElementById("callNowBtn");

  function openMenu(){
    if(!mobileMenu) return;
    mobileMenu.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
  }
  function closeMenu(){
    if(!mobileMenu) return;
    mobileMenu.setAttribute("aria-hidden","true");
    document.body.style.overflow="";
  }
  function openCall(serviceName){
    if(!callModal) return;
    callTitle.textContent = serviceName ? (serviceName + " – soita") : "Soita";
    callNowBtn.setAttribute("href", TEL);
    callModal.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
  }
  function closeCall(){
    if(!callModal) return;
    callModal.setAttribute("aria-hidden","true");
    document.body.style.overflow="";
  }

  if(menuBtn){
    menuBtn.addEventListener("click", openMenu);
  }
  if(mobileMenu){
    mobileMenu.addEventListener("click", (e)=>{
      const t = e.target;
      if(t && t.dataset && t.dataset.close){ closeMenu(); }
      if(t && t.classList && t.classList.contains("mobile-menu__item")){
        const name = t.getAttribute("data-service") || "Soita";
        closeMenu();
        openCall(name);
      }
    });
  }
  if(callModal){
    callModal.addEventListener("click", (e)=>{
      const t = e.target;
      if(t && t.dataset && t.dataset.closeCall){ closeCall(); }
    });
  }

  // ESC closes dialogs
  document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape"){
      closeMenu();
      closeCall();
    }
  });
})();
