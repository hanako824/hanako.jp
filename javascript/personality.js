import { personality, personalityInfo } from '../controller.js'

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
  const perRow = document.querySelector('.perRow')

  const html = personality.map(element => {
    return `
      <div class="col col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 perCol">
        <div class="perCol-container">
          <div class="perCol-container-ring" perName='${element.personalityName}'>
              <img style="width: ${element.w};" src="${element.img}" alt="">
          </div>

          <div class="perCol-container-name">
            ${element.personalityName}
          </div>
        </div>
    
        <div class="perCol-footer"></div>
      </div>
    `
  })

  perRow.innerHTML = html.join('')
})()

// Personality modal
;(() => {
  const rings = document.querySelectorAll('.perCol-container-ring')

  const perModal = document.querySelector('.perModal')
  
  const close = document.querySelector('.perModal-container-close')

  // modal
  const modalImg = document.querySelector('.perModal-container-header-ring-img')

  const modalName = document.querySelector('.perModal-container-header-title-name')

  const modalProgram = document.querySelector('.perModal-container-header-title-program')

  const modalNameMb = document.querySelector('.perModal-container-middle-title-name')

  const modalProgramMb = document.querySelector('.perModal-container-middle-title-program')

  const sns = document.querySelector('.perModal-container-middle-link-a')

  const word = document.querySelector('.perModal-container-middle-word')

  rings.forEach(element => {
    element.onclick = () => {
      perModal.style.display = 'flex'

      const perName = element.attributes.perName.value

      personalityInfo.map(element => {
        if( element.name == perName ){
          modalImg.src = element.img
          modalImg.style.width = element.w
          modalName.innerHTML = element.name
          modalNameMb.innerHTML = element.name
          modalProgram.innerHTML = element.program
          modalProgramMb.innerHTML = element.program
          sns.href = element.sns
          sns.innerHTML = element.sns
          word.innerHTML = element.description
        }
      })
    }
  })

  close.onclick = () => {
    perModal.style.display = 'none'
  }
})()