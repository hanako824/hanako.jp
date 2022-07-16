import { personality } from '../controller.js'

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

// Personality items
;(() => {
  const html = personality.map(element => {
    return `
      <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 topic-col ">
        <div class="topic-col-item">
          <div class="topic-col-item-head">
              <img src="${element.img}">
          </div>

          <div class="topic-col-item-description">
              <div class="topic-col-item-description-top">
                  ${element.title}
              </div>
              <div class="topic-col-item-description-bot">
                  ${element.description}
              </div>
          </div>
        </div>
      </div>
    `
  })
})()