const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje);
const btnEnviar = document.getElementById('enviar');

eventListeners();

function eventListeners(){
  document.addEventListener('DOMContentLoaded', inicioApp);
}

function inicioApp(){
  console.log('init');
  btnEnviar.disabled = true;
}
