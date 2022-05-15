// data
const videoLink = 'https://www.youtube.com/embed/Uddh4TrCotY'

// end
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

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 1170 ? 'vertical' : 'horizontal';

  return direction;
}

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

;(()=>{
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

;(()=>{
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

;(()=>{
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

;(()=>{
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
  });

  close.onclick = () => {
    modal.style.display = 'none'

    modalIfame.src = ''

    prev.style.display = 'none'

    next.style.display = 'none'
  }
})()