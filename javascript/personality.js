// Nav Plus
;(() => {
    const menuTrigger = document.querySelector('.menu-trigger')
  
    const navPlus = document.querySelector('.header-nav-plus')
  
    const navPlusM = document.querySelector('.header-nav-plus-mobile')
  
    const headerNav = document.querySelector('.header-nav')
  
    menuTrigger.onclick = () => {
  
      menuTrigger.classList.toggle('active')
  
      navPlus.classList.toggle('show')
  
      navPlusM.classList.toggle('show')
  
      if(navPlus.classList.length == 2){
        headerNav.style.background = "rgb(70, 70, 70)";
      }else{
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          headerNav.style.background = "rgb(70, 70, 70)";
        } else {
          headerNav.style.background = "";
        }
      }
    }
})()
  
// Header toggle
;(() => {
    const toggleA = document.querySelectorAll('.toggleA')
  
    toggleA.forEach(element => {
      element.onclick = () => {
        const menuTrigger = document.querySelector('.menu-trigger')
      
        const navPlus = document.querySelector('.header-nav-plus')
      
        const navPlusM = document.querySelector('.header-nav-plus-mobile')
      
        const headerNav = document.querySelector('.header-nav')
        
        menuTrigger.classList.toggle('active')
      
        navPlus.classList.toggle('show')
      
        navPlusM.classList.toggle('show')
      
        if(navPlus.classList.length == 2){
          headerNav.style.background = "rgb(70, 70, 70)";
        }else{
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            headerNav.style.background = "rgb(70, 70, 70)";
          } else {
            headerNav.style.background = "";
          }
        }
      }
    })
})()
  
// Scroll Header
;(() => {
    window.onscroll = function() {scrollFunction()};
  
    function scrollFunction() {
  
      let headerNav = document.querySelector('.header-nav')
  
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        headerNav.style.background = "rgb(70, 70, 70)";
      } else {
        headerNav.style.background = "";
      }
    }
})()