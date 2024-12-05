document.getElementById('baja-servicio').addEventListener('click', function() {
    document.getElementById('main-screen').style.display = 'none';
    document.getElementById('baja-screen').style.display = 'block';
});

document.getElementById('download-button').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'ruta/a/tu/documento.pdf'; // Reemplaza esta ruta por la correcta.
    link.download = 'credenciales.pdf';
    link.click();
});

document.getElementById('confirm-baja').addEventListener('click', function() {
    // Mostrar modal
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('finalizar').addEventListener('click', function() {
    // Redirigir al usuario al sitio
    window.location.href = 'https://cepaaprendizaje.com.ar';
});

// Cerrar el modal al hacer clic en el botón de cierre
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Cerrar el modal si se hace clic fuera de él
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});


// Iniciar EmailJS con tu Public Key
emailjs.init('yAEqylTA0ThQjSFJ_'); // Reemplaza con tu Public Key

document.getElementById('confirm-baja').addEventListener('click', function() {
    // Definir parámetros del correo a enviar
    const templateParams = {
        from_name: "sat media", // Nombre de la empresa (o el que sea necesario)
        message: "El usuario ha solicitado la baja del servicio Plan Básico Mantenimiento Mensual.", // El mensaje que deseas enviar
        reply_to: "cepaaprendizaje.com.ar", // Correo del usuario o el que desees
    };

    // Enviar el correo utilizando EmailJS
    emailjs.send('service_dvscbi2', 'template_qxvcc64', templateParams)
        .then(function(response) {
            console.log('Éxito en el envío del correo:', response);
            document.getElementById('modal').style.display = 'block'; // Mostrar el modal
        }, function(error) {
            console.log('Error en el envío del correo:', error);
        });
});








