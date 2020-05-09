$(document).ready(function () {

  AOS.init();

  var swiper = new Swiper(".swiper-ads", {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      524: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop:true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });

});

var btnClose = document.querySelector('#btnclose');
var searchBox = document.querySelector('.search-box');
var open = true;
btnClose.addEventListener('click', ()=>{
  if(open){
    searchBox.style.display = "none";
    searchBox.style.transition = "all 1s ease";
    btnClose.innerHTML = "<span> <i class='fas fa-chevron-down'></i> بحث متقدم</span>"
  }else{
    searchBox.style.display = "block";
    searchBox.style.transition = "all 1s ease";
    btnClose.innerHTML = "<span> <i class='fas fa-chevron-up'></i> بحث متقدم</span>"
  }
  open= !open;
})