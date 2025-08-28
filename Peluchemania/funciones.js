function allCaps(nombre, apellido){
    return "Bienvenido a Peluchemania " + nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase() + " " + 
    apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();

}

function loadModalData(){
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    document.getElementById('modalEmail').textContent = email;
    document.getElementById('modalSubject').textContent = subject;
    document.getElementById('modalMessage').textContent = message;
    
    if(!email || !subject || !message){
        alert("Completa todos los campos");
        return; 
    }
    if(!email.includes("@") || !email.includes(".")){
        alert("Porfavor ingresa un correo válido ");
        return; 
    }
      
}