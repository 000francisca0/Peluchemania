function allCaps(nombre, apellido){
    return "Bienvenido a Peluchemania " + nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase() + " " + 
    apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();

}

function loadModalData(){
    // Datos del cliente 
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    
    email.classList.remove('is-invalid', 'is-valid');
    subject.classList.remove('is-invalid', 'is-valid');
    message.classList.remove('is-invalid', 'is-valid');

    let datosValidos = true; 

    //validar email 
    if(!email.value || !email.values.includes("@") || !email.values.includes(".")){
        email.classList.add('is-invalid');
        datosValidos=false; 
        return; 
    }
    //validar el asunto 
    if(!subject.value){
        subject.classList.add('is-invalid');
        datosValidos = false; 
        return; 
    }
    //validar el mensaje 
    if(!message.value){
        subject.classList.add('is-invalid');
        datosValidos = false; 
        return; 
    }
    if (!formularioValido) {
        return;
    }

    
    // 4. Si las validaciones pasan, carga los datos en el modal y añade la clase 'is-valid'
    email.classList.add('is-valid');
    subject.classList.add('is-valid');
    message.classList.add('is-valid');

    document.getElementById('modalEmail').textContent = email.value;
    document.getElementById('modalSubject').textContent = subject.value;
    document.getElementById('modalMessage').textContent = message.value;

      
}