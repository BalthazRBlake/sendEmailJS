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
  console.log('valCamp');
  validarLongitud(this);
}

function validarLongitud(campo){
  console.log(campo.value.length);
  
  if(campo.value.length > 3){
    campo.style.borderBottomColor = 'Green';
    campo.classList.remove('error');
  } else {
    campo.style.borderBottomColor = 'Red';
    campo.classList.add('error');
  }
}
