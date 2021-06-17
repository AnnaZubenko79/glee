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
      slidesPerView: 1,      
   
      breakpoints: {         
         576: {
            slidesPerView: 2, 
         },
         // 768: {
         //    slidesPerView: 4, 
         // },
         992: {
            slidesPerView: 4, 
         },
         1200: {
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

  $('.filters-category__btn').on('click', function(){
     $('.filters-category__btn').removeClass('filters-category__btn--active')
   $(this).addClass('filters-category__btn--active');
  });

  $('.filter-price__input').ionRangeSlider({
   type: "double",
   prefix: "$",
 onStart: function (data){
   $('.filter-price__from').text(data.from);
   $('.filter-price__to').text(data.to);
 },
   onChange: function (data) {
     $('.filter-price__from').text(data.from);
     $('.filter-price__to').text(data.to);
 },
 });

 $(".star").rateYo({    
   starWidth: "11px",
   normallFill: "#ccccce",
   ratedFill: "#ffcc00",
   readOnly: true
 });

 $(".card__star").rateYo({    
   starWidth: "20px",
   normallFill: "#ccccce",
   ratedFill: "#ffcc00",
   readOnly: true
 });
 



$('.product-grid__btn').on('click', function(){
   $('.product-grid__btn').removeClass('product-grid__btn--active');
   $(this).addClass('product-grid__btn--active');
});

$('.button-list').on('click', function(){
$('.card').addClass('card--list');
});

$('.button-grid').on('click', function(){
   $('.card').removeClass('card--list')
});

$('.card__buttons').on('click', function(){
   $('.card__btn').addClass('card__btn--active');
   $('.card__click').addClass('card__click--active')
});


var mixer = mixitup (".filters-category__list", {
 animation: {
 duration: 0.2  
}          
});

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