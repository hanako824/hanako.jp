import { topic, archive, news, banner } from './controller.js'

// data
const videoLink = 'https://www.youtube.com/embed/Uddh4TrCotY'

//Topic item
;(()=>{
  const topicRow = document.getElementById('topicRow')

  const html = topic.map(element => {
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

  topicRow.innerHTML = html.join('')
})()

// Archive item
;(() => {
  const swiperWrapper = document.getElementById('swiperWrapper')

  const html = archive.map(element => {
    return `
      <div class="swiper-slide" yLink="${element.youtubeLink}">
        <img class="swiper-slide-img" src="${element.img}">

        <div class="swiper-slide-description">
            <div class="swiper-slide-description-top">
                <span>
                  ${element.title}
                </span>
            </div>

            <div class="swiper-slide-description-bot">
                ${element.date}
            </div>
        </div>
      </div>
    `
  })

  swiperWrapper.innerHTML = html.join('')

  const yb = document.querySelectorAll('.swiper-slide')

  const modal = document.querySelector('.myModal')

  const modalTitle = document.querySelector('.myModal-container-title-contents')
  
  const modalBottom = document.querySelector('.myModal-container-bottom')
  
  const modalIfame = document.querySelector('.myModal-container-video-i')

  const close = document.querySelector('.myModal-container-bottom-close')

  yb.forEach(element => {
    element.onclick = () => {
      modal.style.display = 'flex'

      modalTitle.innerHTML = 'アーカイブ'

      modalBottom.style.justifyContent = 'center'

      modalIfame.src = element.attributes.yLink.value
    }
  })

  close.onclick = () => {
    modal.style.display = 'none'

    modalIfame.src = ''
  }
})()

// News item
;(() => {
  const newContainer = document.getElementById('newContainer')

  const html = news.map(element => {
    return `
    <div class="new-container-item">
      <div class="new-container-item-head">
          <span class="new-container-item-head-date">${element.date}</span>

          <span class="new-container-item-head-title">${element.title}</span>
      </div>

      <div class="new-container-item-body">
        ${element.omit_contents}
      </div>

      <div class="new-container-item-body-hover">
          <div>
            詳しく見る&nbsp;<i class="fa-solid fa-eye"></i>
          </div>
      </div>
    </div>  
    `
  })

  newContainer.innerHTML = html.join('')
})()

// Banner item
;(() => {
  const bannerContainer = document.getElementById('bannerContainer')

  const html = banner.map(element => {
    return `
      <div class="banner-container-main-slide-item">
        <a href="${element.url}" target="_blank"><img src="${element.img}" alt=""></a>
      </div>
    `
  })

  bannerContainer.innerHTML = html.join('')
})

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

// Video disable now
;(() => {
  const live = document.querySelector('#live')

  const modal = document.querySelector('.myModal')

  const modalTitle = document.querySelector('.myModal-container-title-contents')
  
  const modalBottom = document.querySelector('.myModal-container-bottom')
  
  const modalIfame = document.querySelector('.myModal-container-video-i')
  
  const close = document.querySelector('.myModal-container-bottom-close')

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