// data
const videoLink = 'https://www.youtube.com/embed/Uddh4TrCotY'

// Swiper
var swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
});

// Wave
function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 1170 ? 'vertical' : 'horizontal';

  return direction;
}

// Header
function handleToggle(){
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

// Banner
;(() => {
  let x = document.querySelector('.banner-container-main')

  const handleScroll = function(){
    setInterval(() => {
      x.scrollLeft += 410

      if(x.scrollLeft >= 2860){
        setTimeout(() => {
          let randomArr = [0, 410, 820]

          let r = Math.floor(Math.random() * 3)

          x.scrollLeft = randomArr[r]
        }, 3000);
      }
    }, 3000);
  }

  handleScroll()
})()

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

// Video
;(() => {
  const live = document.querySelector('#live')

  const modal = document.querySelector('.myModal')

  const close = document.querySelector('.myModal-container-bottom-close')

  const modalTitle = document.querySelector('.myModal-container-title-contents')

  const modalBottom = document.querySelector('.myModal-container-bottom')

  const modalIfame = document.querySelector('.myModal-container-video-i')

  const slide = document.querySelectorAll('.swiper-slide')

  const prev = document.querySelector('.myModal-container-bottom-prev')

  const next = document.querySelector('.myModal-container-bottom-next')

  live.onclick = () => {
    modal.style.display = 'flex'

    modalTitle.innerHTML = 'Youtube 配信'

    modalBottom.style.justifyContent = 'center'

    modalIfame.src = videoLink
  }

  slide.forEach(element => {
    element.onclick = () => {

      modal.style.display = 'flex'

      modalTitle.innerHTML = 'アーカイブ'

      modalBottom.style.justifyContent = 'center'

      modalIfame.src = element.attributes.yLink.value

      // prev.style.display = 'flex'

      // next.style.display = 'flex'

      // modalBottom.style.justifyContent = 'space-between'
    }
  })

  close.onclick = () => {
    modal.style.display = 'none'

    modalIfame.src = ''

    prev.style.display = 'none'

    next.style.display = 'none'
  }
})

// Calendar
;(() => {
  const now = new Date();

  const nowM = new Date()

  const wd = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];

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
    let m = now.getMonth()

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
    let m = now.getMonth()

    element.innerHTML = m
  })
})()