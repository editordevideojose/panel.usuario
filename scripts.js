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

    // Enviar correo
    emailjs.send("service_dvscbi2", "template_8m367ss", {
        message: "El usuario dio de baja el servicio"
    })
    .then(() => {
        alert("Correo enviado con éxito. Baja realizada.");
    })
    .catch((error) => {
        console.error("Error al enviar el correo:", error);
        alert("Hubo un problema al enviar el correo. Intenta nuevamente.");
    });
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
