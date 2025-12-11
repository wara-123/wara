// ⏱ Animación de conteo para los elementos con clase .number
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.number');

    const countUp = (element, target, duration = 2000) => {
        const start = performance.now();
        const startValue = 0;
        const endValue = target;

        const update = (timestamp) => {
            const progress = Math.min((timestamp - start) / duration, 1);
            const value = Math.floor(progress * endValue);
            element.textContent = value;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };

        requestAnimationFrame(update);
    };

    // Recorremos cada contador y aplicamos la animación
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        countUp(counter, target);
    });

    // 👇 Mostramos el popup al cargar la página
    const popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "flex";
    }
});



// validacion de datos del libro de reclamos

// efecto navideño
 window.addEventListener("load", () => {
        document.getElementById("navidad-overlay").style.display = "flex";
      });

      document.getElementById("cerrar-navidad").addEventListener("click", () => {
        document.getElementById("navidad-overlay").style.display = "none";
      });

    
// --- EFECTO DE NIEVE ---
function crearNieve() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄";

    // Tamaño aleatorio
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px";

    // Posición aleatoria
    snowflake.style.left = Math.random() * window.innerWidth + "px";

    // Duración variable de la caída
    snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";

    document.body.appendChild(snowflake);

    // Eliminar copo al terminar animación
    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

// Crea nieve constantemente
setInterval(crearNieve, 150);

