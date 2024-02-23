window.addEventListener('DOMContentLoaded', function(){
    inputName=document.getElementById('name');
    inputEmail=document.getElementById('email');
    inputMessage = document.getElementById('message');
    btnSubmit = document.getElementById('submit');

    inputName.addEventListener('input', validar);
    inputEmail.addEventListener('input', validar);
    inputMessage.addEventListener('input', validar);

    datos = {
        name:'',
        email:'',
        message:''
    }

    function validar(e){
        if(e.target.value.trim()===""){
            crearAlerta(`El campo ${e.target.id} esta vacio`, e.target.parentElement);
            datos[e.target.id] = '';
            comprobarFormulario();
            return;
        }
        if(e.target.id ==='email' && !validarCorreo(e.target.value)){
            crearAlerta(`El campo ${e.target.id} no es valido`, e.target.parentElement);
            datos[e.target.id] = '';
            comprobarFormulario();
            return;
        }
        borrarAlerta(e.target.parentElement);
        datos[e.target.id] = e.target.value.trim().toLowerCase();
        comprobarFormulario();
        console.log(datos);
    }

    function crearAlerta(mensaje, referencia){
        borrarAlerta(referencia);
        const alerta = document.createElement('p');
        alerta.textContent = mensaje;
        alerta.classList.add('alert');
        referencia.appendChild(alerta);
    }

    function validarCorreo(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email)
        return resultado;
    }

    function borrarAlerta(referencia){
        const borrarAlert = referencia.querySelector('.alert')
        if(borrarAlert){
            borrarAlert.remove()
        }
    }

    function comprobarFormulario(){
        if(Object.values(datos).includes('')){
            btnSubmit.classList.add('opacity');
            btnSubmit.disabled = true;
        }
        else{
            btnSubmit.classList.remove('opacity');
            btnSubmit.disabled = false;
        }
    }

})