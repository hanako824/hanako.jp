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
})

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
  const toggle = document.querySelector('#toggle')

  const container = document.querySelector('.header-nav-item-container')

  toggle.onclick = () => {
    const x = document.querySelector('.header-nav-plus')

    container.classList.toggle('open-menu')

    x.classList.toggle('show')
  }
})()