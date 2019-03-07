function validacion(){
 
    var txtNombre = document.getElementById('name').value;
    var txtPhone = document.getElementById('Phone').value;
    var txtCorreo = document.getElementById('email').value;
    var txtService = document.getElementById('service').value;
  
 
    //Test campo obligatorio
    if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
      alert('ERROR: El campo nombre no debe ir vacío');
      return false;
    }
    //test campo asunto
    if(txtService == null || txtService.length == 0 || /^\s+$/.test(txtService)){
        alert('ERROR: El campo Servicio no debe estar vacio');
        return false;
      }
 
    //Test tlf
    if(txtPhone == null || txtPhone.length == 0 || isNaN(txtPhone)){
      alert('ERROR: Debe ingresar un numero');
      return false;
    }
 
    //Test correo
    if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
      alert('ERROR: Debe escribir un correo válido');
      return false;
    }
 
    return true;
  }