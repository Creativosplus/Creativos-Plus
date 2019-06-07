$(window).scroll(function(){
   if ($(this).scrollTop() > 50) {
      $('#primary-menu ul li a').css('color', '#24A35B');
      $('.colorLink li a').css('color', '#666').hover(function(){
         $(this).css('color','#24A35B');
      }, function(){
         $(this).css('color', '#666');
      });
   } else {
      $('#primary-menu ul li a').css('color', '#FFF');
      $('.colorLink li a').css('color', '#666');
   }
});