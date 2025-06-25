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
document.getElementById("formularioReclamo").addEventListener("submit", function(e) {
    const email = document.getElementById("email").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    const dniRegex = /^[0-9]{8}$/;  // Solo 8 números exactos para DNI
    const telefonoRegex = /^[0-9]{6,12}$/;

    if (!emailRegex.test(email)) {
        alert("Ingrese un correo electrónico válido.");
        e.preventDefault();
        return;
    }

    if (!dniRegex.test(dni)) {
        alert("Ingrese un DNI válido de 8 dígitos numéricos.");
        e.preventDefault();
        return;
    }

    if (!telefonoRegex.test(telefono)) {
        alert("Ingrese un número de teléfono válido (de 6 a 12 dígitos).");
        e.preventDefault();
        return;
    }

    // Confirmación opcional
    if (!confirm("¿Está seguro de enviar el reclamo?")) {
        e.preventDefault();
    }
});

