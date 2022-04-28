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

pauseEl.addEventListener("click", () => {
  const res = pauseEl.classList.contains("on");
  res ? bannerPlay() : bannerPause();
});

prevBtn.addEventListener("click", () => bannerPause());
nextBtn.addEventListener("click", () => bannerPause());


// 함수 선언
function bannerPause() {
  bannerSwiper.autoplay.stop();
  pauseEl.classList.add("on");
  pauseEl.innerHTML = "재생";
}
function bannerPlay() {
  bannerSwiper.autoplay.start();
  pauseEl.classList.remove("on");
  pauseEl.innerHTML = "정지";
}


// logoutCase Tab변경
const logoutTabEls = document.querySelectorAll('.logout-case .tabs__menu li');
const logoutPanelEls = document.querySelectorAll('.logout-case .tab_body .tabs_panel');

for(let i = 0; i < logoutTabEls.length; i += 1){
  logoutTabEls[i].querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();

    for(let j = 0; j < logoutTabEls.length; j += 1){
      logoutTabEls[j].classList.remove('on');
      logoutPanelEls[j].classList.remove('on');
    }

    logoutTabEls[i].classList.add('on');
    logoutPanelEls[i].classList.add('on');
    });
  }


// recomCard Tab변경
const recomTabEls = document.querySelectorAll('.article.full .recom-card .tabs__menu li');
const recomPanelEls = document.querySelectorAll('.article.full .recom-card .tabs__body .tabs__panel');

for (let i = 0; i < recomTabEls.length; i += 1) {
  recomTabEls[i].querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();

    for (let j = 0; j < recomTabEls.length; j += 1) {
      recomTabEls[j].classList.remove('on');
      recomPanelEls[j].classList.remove('on');
    }

    recomTabEls[i].classList.add('on');
    recomPanelEls[i].classList.add('on');
  });
}


// guideArea Tab변경
const guideTabEls = document.querySelectorAll('.article .wrap .guide-area .tabs__menu li');
const guidePanelEls = document.querySelectorAll('.article .wrap .guide-area .tabs__body .tabs__panel');

for (let i = 0; i < guideTabEls.length; i += 1) {
  guideTabEls[i].querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();

    for (let j = 0; j < guideTabEls.length; j += 1) {
      guideTabEls[j].classList.remove('on');
      guidePanelEls[j].classList.remove('on');
    }

    guideTabEls[i].classList.add('on');
    guidePanelEls[i].classList.add('on');
  });
}


// familySite

const famEl = document.querySelector('.family-site-area a');
famEl.addEventListener('click', () => {
  
  const famListEl = document.querySelector('.family-site-area ul.family-site__list');
  const res = famEl.classList.contains('on');
  
  if (res) {
    RemoveOn(famEl);
    famListEl.style.display= "none";
  } else {
    AddOn(famEl);
    famListEl.style.display= "block";
  }
});


function RemoveOn(el) {
  el.classList.remove('on');
}
function AddOn(el) {
  el.classList.add('on');
}
