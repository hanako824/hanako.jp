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

// Calendar
;(() => {
  const now = new Date()

  const nowM = new Date()

  const wd = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']

  const htmlDate = document.querySelectorAll('.calendar-container-main-head-item-top-span')

  const htmlDay = document.querySelectorAll('.calendar-container-main-head-item-bot')

  const htmlMonth = document.querySelectorAll('.calendar-container-main-head-item-top-m')

  const htmlDateMobile = document.querySelectorAll('.mobile-date')

  const htmlDayMobile = document.querySelectorAll('.mobile-day')

  const htmlMonthMobile = document.querySelectorAll('.mobile-month')

  htmlDate.forEach(element => {
    let d = now.getDate()
    let w = wd[now.getDay()]
    now.setDate(now.getDate()+1)

    element.innerHTML = d
  })

  htmlDay.forEach(element => {
    let d = now.getDate()
    let w = wd[now.getDay()]
    now.setDate(now.getDate()+1)

    element.innerHTML = w
  })

  htmlMonth.forEach(element => {
    let m = now.getMonth()+1

    element.innerHTML = m
  })

  htmlDateMobile.forEach(element => {
    let currentDate = nowM.getDate()
    nowM.setDate(nowM.getDate()+1)

    element.innerHTML = currentDate
  })

  htmlDayMobile.forEach(element => {
    let w = wd[now.getDay()]
    now.setDate(now.getDate()+1)

    element.innerHTML = w
  })

  htmlMonthMobile.forEach(element => {
    let m = now.getMonth()+1

    element.innerHTML = m
  })
})()