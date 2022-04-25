'use strict';

// BANNER SWIPER
const bannerSwiper = new Swiper(".banner-wrap .swiper-container", {
  autoplay: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pages .swiper-pagination",
    type: "fraction", // 1/n 형식으로 표현
  },
  navigation: {
    prevEl: ".swiper-container .swiper-prev",
    nextEl: ".swiper-container .swiper-next",
  },
});
// BANNER SWIPE PLAY & STOP
const pauseEl = document.querySelector(".swiper-container .swiper-pages .swiper_pause-btn");
const prevBtn = document.querySelector(".swiper-container .swiper-prev");
const nextBtn = document.querySelector(".swiper-container .swiper-next");

pauseEl.addEventListener("click", function () {
  const res = pauseEl.classList.contains("on");
  if (res) {
    bannerPlay();
  } else {
    bannerStop();
  }
});
prevBtn.addEventListener("click", function () {
  bannerStop();
});
nextBtn.addEventListener("click", function () {
  bannerStop();
});

const bannerStop = function () {
  bannerSwiper.autoplay.stop();
  pauseEl.classList.add("on");
  pauseEl.innerHTML = "재생";
}
const bannerPlay = function () {
  bannerSwiper.autoplay.start();
  pauseEl.classList.remove("on");
  pauseEl.innerHTML = "정지";
}


// logoutWrap 탭변경
const tabEls = document.querySelectorAll('.logout-case .tabs__menu li');
const tabPanelEls = document.querySelectorAll('.logout-case .tab_body .tabs_panel');
for(let i = 0; i < tabEls.length; i += 1){
  tabEls[i].querySelector('a').addEventListener('click', function(e){
    e.preventDefault();
    for(let j = 0; j < tabEls.length; j++){
      tabEls[j].classList.remove('on');
      tabPanelEls[j].classList.remove('on');
    }
    tabEls[i].classList.add('on');
    tabPanelEls[i].classList.add('on');
    });
  };
