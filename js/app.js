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
  
  let errors = document.querySelector('.error');
  
  if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
    if(errors.length === 3){
      btnEnviar.disabled = false;
    }   
  }
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
