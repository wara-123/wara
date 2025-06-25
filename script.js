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

// ❌ Función para cerrar el popup al hacer clic en la X
function cerrarPopup() {
    const popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "none";
    }
}



// validacion de datos del libro de reclamos
