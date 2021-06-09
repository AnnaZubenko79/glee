$(function(){
   const slider = document.querySelector(".partners-slider__inner"); 
   const slider1 = document.querySelector(".smart__content");
    let swiper = new Swiper(slider1, { 
        pagination: { 
           el: '.swiper-pagination',            
           clickable: true, 
           renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";          
        },  
      },      
     });

   let  mySwiper = new Swiper(slider, {         
      slidesPerView: 2,
      spaceBetween: 10,
      breakpoints: {         
         576: {
            slidesPerView: 3, 
         },
         768: {
            slidesPerView: 4, 
         },
         992: {
            slidesPerView: 5, 
         }
      }
     });  
      
         $('.dropdown--home').on('click', function(){
            $('.dropdown--home').toggleClass('dropdown__home--active');             
         });
         $('.dropdown--pages').on('click', function(){
            $('.dropdown--pages').toggleClass('dropdown__pages--active');             
         });

         $(window).on("scroll", function() {
            $('.header').toggleClass("header--active", $(this).scrollTop() > $('.header').height());
            // $('.logo').toggleClass("logo--active", $(this).scrollTop() > $('.header').height());
         });

        let menuBtn = document.querySelector(".menu__btn"); 
        let body = document.querySelector("body"); 
        let menu = document.querySelector(".menu"); 
        let menuLink = document.querySelector(".menu__link");
        let container = document.querySelector(".container");
        let logoHeader = document.querySelector(".logo--header");
        let headerWrapper = document.querySelector(".header__wrapper");
        if (menuBtn) { 
           menuBtn.addEventListener("click", function() { 
           menuBtn.classList.toggle("menu__btn--active"); 
           body.classList.toggle("lock"); 
           menu.classList.toggle("menu--active");  
           container.classList.toggle("container--active"); 
           logoHeader.classList.toggle("active");  
           headerWrapper.classList.toggle("header__wrapper--active");  
   }); 
  } 

   var mixer = mixitup ('.gallery-content', {
       animation: {
       duration: 0.2  
   }          
});
 
  var mixer = mixitup ('.new-design__content', {
    animation: {
        duration: 0.2  
    }          
 });
});