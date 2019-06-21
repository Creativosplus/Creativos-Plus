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

$("#puto").click(function(){
   Swal.fire({
      type: 'success',
      title: 'Excelente',
      text: 'Gracias por contactarnos, en breve nos estaremos comunicando contigo.',
      buttonsStyling: false,
      confirmButtonText: '<i class="icon-line-arrow-right"></i><span>Continuar</span>',
      focusConfirm: false,
      customClass: {
         confirmButton: 'mt-2 button btn-verde button-3d button-reveal tright button-large button-rounded'
      }
    });
});

// Codigo para Tabs de process steps
    
$(".paso2").click(function(){
   $(".paso1").removeClass("active");
   $(".paso2").addClass("active");
});

$(".paso3").click(function(){
   $(".paso2").removeClass("active");
   $(".paso3").addClass("active");
});

$(".paso4").click(function(){
   $(".paso3").removeClass("active");
   $(".paso4").addClass("active");
});

$(".paso1").click(function(){
   $(".paso2, .paso3, .paso4").removeClass("active");
   $(".paso1").addClass("active");
});

$(".paso2").click(function(){
   $(".paso1, .paso3, .paso4").removeClass("active");
   $(".paso2").addClass("active");
});

$(".paso3").click(function(){
   $(".paso1, .paso2, .paso4").removeClass("active");
   $(".paso3").addClass("active");
});

$(".paso4").click(function(){
   $(".paso1, .paso2, .paso3").removeClass("active");
   $(".paso4").addClass("active");
});