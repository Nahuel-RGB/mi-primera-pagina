document.getElementById("saludarButton").addEventListener("click", function() {
    const nombre = document.getElementById("nombreInput").value;
    const mensajeDiv = document.getElementById("mensaje");

    if (nombre) {
        mensajeDiv.innerHTML = `¡Hola, ${nombre}! Bienvenido a nuestra página.`;
        mensajeDiv.classList.remove("oculto"); // Muestra el mensaje
        mensajeDiv.style.backgroundColor = "#b2ebf2"; // Color de fondo del mensaje
        mensajeDiv.style.border = "1px solid #00796b"; // Borde verde
        mensajeDiv.style.color = "#004d40"; // Color del texto
    } else {
        mensajeDiv.innerHTML = "Por favor, ingresa tu nombre.";
        mensajeDiv.classList.remove("oculto"); // Muestra el mensaje
        mensajeDiv.style.backgroundColor = "#ffccbc"; // Color de fondo de error
        mensajeDiv.style.border = "1px solid #d32f2f"; // Borde rojo
        mensajeDiv.style.color = "#c62828"; // Color del texto de error
    }
});