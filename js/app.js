const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

eventListeners();

function eventListeners(){
  
  document.addEventListener('DOMContentLoaded', inicioApp);
  
  email.addEventListener('blur', validarCampo);
  asunto.addEventListener('blur', validarCampo);
  mensaje.addEventListener('blur', validarCampo);
}

function inicioApp(){
  
  btnEnviar.disabled = true;
}

function validarCampo(){
  
  validarLongitud(this);
  
  if(this.type === 'email'){
    validarEmail(this);
  }
  
  let errors = document.querySelectorAll('.error');
  
  if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
    if(errors.length === 0){
      btnEnviar.disabled = false;
    }   
  }
}

function validarLongitud(campo){
  //console.log(campo.value.length);
  
  if(campo.value.length > 3){
    campo.style.borderBottomColor = 'Green';
    campo.classList.remove('error');
  } else {
    campo.style.borderBottomColor = 'Red';
    campo.classList.add('error');
  }
}

function validarEmail(email){
  const mensaje = email.value;
  
  if(mensaje.indexOf('@') !== -1){
    email.style.borderBottomColor = 'Green';
    email.classList.remove('error');
  } else {
    email.style.borderBottomColor = 'Red';
    email.classList.add('error');
  }
}
