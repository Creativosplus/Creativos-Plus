$(window).scroll(function(){
   if ($(this).scrollTop() > 50) {
      $('#primary-menu, ul, li').removeClass('menuLinks');
      $('#primary-menu, ul, li').addClass('menuLinks-alt');
   } else {
      $('#primary-menu, ul, li').removeClass('menuLinks-alt');
      $('#primary-menu, ul, li').addClass('menuLinks');     
   }
});