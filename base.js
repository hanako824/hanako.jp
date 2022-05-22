// Nav Plus
;(() => {
  const menuTrigger = document.querySelector('.menu-trigger')
  
  const navPlus = document.querySelector('.header-nav-plus')
  
  const navPlusM = document.querySelector('.header-nav-plus-mobile')
  
  menuTrigger.onclick = () => {
  
    menuTrigger.classList.toggle('active')
  
    navPlus.classList.toggle('show')
  
    navPlusM.classList.toggle('show')
  }
})()