$(function(){
   $('.product-details__tabs-link').on('click', function(e) {
      e.preventDefault();
      $('.product-details__tabs-link').removeClass('product-details__tabs-link--active');
      $(this).addClass('product-details__tabs-link--active');
      $('.product-details__tabs-info').removeClass('product-details__tabs-info--active');
      $($(this).attr('href')).addClass('product-details__tabs-info--active');
   });

   $('.related-product__slider').slick({
      slidesToShow: 4,
      prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><path d="M1460.7,1330.53h-16.94l0.1-2.86a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-0.18-.17a0.267,0.267,0,0,0-.4,0l-4.2,4.21a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l4.2,4.21a0.29,0.29,0,0,0,.4,0l0.18-.17a0.323,0.323,0,0,0,.08-0.21,0.3,0.3,0,0,0-.08-0.2l-0.12-2.86h16.97a0.3,0.3,0,0,0,.29-0.3v-1.37A0.291,0.291,0,0,0,1460.7,1330.53Z" transform="translate(-1439 -1327)"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><path d="M1509.3,1332.47h16.94l-0.1,2.86a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l0.18,0.17a0.267,0.267,0,0,0,.4,0l4.2-4.21a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-4.2-4.21a0.29,0.29,0,0,0-.4,0l-0.18.17a0.323,0.323,0,0,0-.08.21,0.318,0.318,0,0,0,.08.2l0.12,2.86h-16.97a0.3,0.3,0,0,0-.29.3v1.37A0.291,0.291,0,0,0,1509.3,1332.47Z" transform="translate(-1509 -1327)"/></svg></button>',
   infinite: false,
   responsive: [
      {
        breakpoint: 768,
           settings: {
              slidesToShow: 2,
   }
},
{
   breakpoint: 480,
           settings: {
              slidesToShow: 1,
   },
   }
   ]
 
   });

   $('.product-details__thumb').slick({
      asNavFor: '.product-details__big',
      focusOnSelect: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      draggable: false,
    });
    $('.product-details__big').slick({
      asNavFor: '.product-details__thumb',
      draggable: false,
      arrows: false,
      fade: true,
    });


   const slider = document.querySelector(".partners-slider__inner"); 
   const slider1 = document.querySelector(".smart__content");
    var swiper = new Swiper(slider1, { 
        pagination: { 
           el: '.swiper-pagination',            
           clickable: true, 
           renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";          
        },  
      },      
     });

   var mySwiper = new Swiper(slider, {         
      slidesPerView: 1,  
   
      breakpoints: {         
         576: {
            slidesPerView: 2, 
         },
         
         992: {
            slidesPerView: 4, 
         },
         1200: {
            slidesPerView: 5, 
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

$('select-style, .product-details__num').styler();



// var mixer = mixitup (".filters-category__list", {
//  animation: {
//  duration: 0.2  
// }          
// });


 var containerEl1 = document.querySelector('[data-ref="container-1"]');
 var containerEl2 = document.querySelector('[data-ref="container-2"]');

 var config = {
   controls: {
     scope: 'local'
   }
 };

 var mixer1 = mixitup(containerEl1, config);
 var mixer2 = mixitup(containerEl2, config);

 
});