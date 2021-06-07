$(function(){
    let swiper = new Swiper('.swiper-container', { 
        pagination: { 
           el: '.swiper-pagination',            
           clickable: true, 
           renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";          
        },  
      },      
     });

     let swiperNews = new Swiper('.swiper-container-s2', { 
        slidesPerView: 5,
        breakpoints: {               
         480: {
           slidesPerView: 1,         
         },  
         576: {
            slidesPerView: 2,         
          }, 
      },      
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
        let headerInner = document.querySelector(".header__inner");
        if (menuBtn) { 
           menuBtn.addEventListener("click", function() { 
           menuBtn.classList.toggle("menu__btn--active"); 
           body.classList.toggle("lock"); 
           menu.classList.toggle("menu--active");  
           container.classList.toggle("container--active"); 
           logoHeader.classList.toggle("logo--active");  
           headerInner.classList.toggle("header__inner--active");  
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