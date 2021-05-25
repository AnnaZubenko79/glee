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
});