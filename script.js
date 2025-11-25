const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView:5,
  centeredSlides:true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets:true,
     clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
   
  // },
});

//trigger to update main background
//when triggers next slide
swiper.on('slideNextTransitionStart', ()=>{
  updateMainBackground()
})

//trigger to update main background
//when triggers previous slide
swiper.on('slidePrevTransitionStart', ()=>{
  updateMainBackground()
})

function updateMainBackground(){
  //get current active slide
  const activeSlide =document.querySelector('.swiper-slide-active')
  console.log(activeSlide)
  //get the main container element
  const mainContainer =document.quertSelector('.main-slides')
  //update the background style of main
  //to match the active element  slide
  mainContainer.style.background=activeSlide.style.background
  
}