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

document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formularioReclamo");
    const mensajeError = document.getElementById("mensajeError");
    const mensajeExito = document.getElementById("mensajeExito");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault(); // Evitar envío para validar primero

        mensajeError.innerHTML = "";
        mensajeExito.innerHTML = "";

        const email = document.getElementById("email").value.trim();
        const dni = document.getElementById("dni").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const edad = parseInt(document.getElementById("edad").value.trim());
        const fecha = document.getElementById("fecha").value.trim();
        const detalle = document.getElementById("detalle").value.trim();
        const firma = document.getElementById("firma").value.trim();

        const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        const dniRegex = /^[0-9a-zA-Z]{8,12}$/;
        const telefonoRegex = /^[0-9]{6,12}$/;
        const firmaRegex = /^[a-zA-Z\s]+$/;

        let errores = [];

        if (!emailRegex.test(email)) {
            errores.push("Ingrese un correo electrónico válido.");
        }

        if (!dniRegex.test(dni)) {
            errores.push("Ingrese un número de documento válido (8-12 caracteres).");
        }

        if (!telefonoRegex.test(telefono)) {
            errores.push("Ingrese un número de teléfono válido (6 a 12 dígitos).");
        }

        if (!(edad >= 1 && edad <= 120)) {
            errores.push("Ingrese una edad válida entre 1 y 120 años.");
        }

        if (!fecha) {
            errores.push("Ingrese la fecha del incidente.");
        } else {
            const fechaIncidente = new Date(fecha);
            const hoy = new Date();
            hoy.setHours(0,0,0,0);
            if (fechaIncidente > hoy) {
                errores.push("La fecha del incidente no puede ser futura.");
            }
        }

        if (detalle.length < 10) {
            errores.push("El detalle del reclamo debe tener al menos 10 caracteres.");
        }

        if (!firmaRegex.test(firma)) {
            errores.push("La firma solo puede contener letras y espacios.");
        }

        if (errores.length > 0) {
            mensajeError.innerHTML = errores.join("<br>");
            return;
        }

        // Confirmación antes de enviar
        if (!confirm("¿Está seguro de enviar el reclamo?")) {
            return;
        }

        // Si pasa todo, enviamos el formulario
        mensajeExito.innerHTML = "Reclamo enviado correctamente. Gracias por contactarnos.";
        formulario.submit();
    });
});

