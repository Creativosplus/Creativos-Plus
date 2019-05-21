$(document).ready(function() {

   $("#navResponsive").click(function() {
       $(".menuToggle").slideToggle(500);
   });

    $("#enviar").click(function() {
        // swal("Felicidades", "Haz enviado tu mensaje correctamente.", "success",{
        //     button: {
        //         text: "OK"
        //     }
        // });
        swal("Lo siento", "Faltan campos por completar.", "warning",{
            button: {
                text: "OK"
            }
        });
   });

});