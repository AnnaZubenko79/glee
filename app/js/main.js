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

        $('.dropdown--home').on('click', function(){
            $('.dropdown__btn--home').toggleClass('dropdown__btn--home--active'); 
            
         });

        $('.dropdown--pages').on('click', function(){
            $('.dropdown__btn--pages').toggleClass('dropdown__btn--pages--active'); 
            
         });
         $('.dropdown--home').on('click', function(){
            $('.dropdown--home').toggleClass('dropdown--home--active');             
         });
         $('.dropdown--pages').on('click', function(){
            $('.dropdown--pages').toggleClass('dropdown--pages--active');             
         });
});