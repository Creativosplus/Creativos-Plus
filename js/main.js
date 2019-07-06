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

$("#puto2").click(function(){
   Swal.fire({
      type: 'success',
      title: 'Excellent',
      text: 'Thank you for contacting us, we will be communicating with you shortly.',
      buttonsStyling: false,
      confirmButtonText: '<i class="icon-line-arrow-right"></i><span>Continue</span>',
      focusConfirm: false,
      customClass: {
         confirmButton: 'mt-2 button btn-verde button-3d button-reveal tright button-large button-rounded'
      }
    });
});