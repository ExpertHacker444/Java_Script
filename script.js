const opciones = ["Cupón Gratis", "20%", "30%", "40%", "50%", "60%"];
const botonGirar = document.getElementById("botonGirar");
const resultado = document.getElementById("resultado");
const ruleta = document.getElementById("ruleta");

botonGirar.addEventListener("click", function () {
    botonGirar.disabled = true; // Deshabilitar el botón mientras la ruleta gira

    let degrees = 0;
    const interval = setInterval(() => {
        ruleta.style.transform = `rotate(${degrees}deg)`;
        degrees += 40; // Velocidad de giro
        if (degrees >= 360) {
            degrees = 0;
        }
    }, 50); // Tiempo entre cada incremento de giro

    setTimeout(() => {
        clearInterval(interval); // Detener el giro después de un tiempo determinado

        const opcionIndex = Math.floor(Math.random() * opciones.length);
        const opcionSeleccionada = opciones[opcionIndex];

        resultado.textContent = "¡Felicidades! Tienes un " + opcionSeleccionada + " de descuento en tu próximo corte de pelo.";

        botonGirar.disabled = false; // Habilitar el botón nuevamente
    }, 5000); // Mostrar el resultado después de 5 segundos (ajustable según la duración deseada)
});