let pantallaActual = 1;
let intentosNo = 0;

const mensajesNo = [
    "¿Segura?",
    "Rivas... piénsalo otra vez",
    "Creo que apretaste el botón equivocado",
    "Ese botón no te conviene la vdd",
    "Última oportunidad...",
    "Bueno... ese botón desaparece"
];

function mostrarPantalla(numero) {
    document.querySelectorAll(".pantalla").forEach(p => {
        p.classList.remove("activa");
    });

    const siguiente = document.getElementById("pantalla" + numero);
    if (siguiente) {
        siguiente.classList.add("activa");
        pantallaActual = numero;
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

function siguientePantalla() {
    mostrarPantalla(pantallaActual + 1);
}

function irASorpresa() {
    // La página queda marcada para que al volver abra directamente
    // la pantalla de "¿Ya regresaste?"
    localStorage.setItem("sorpresaIniciada", "true");

    const contenido = document.querySelector("#pantalla4 .contenido");

    contenido.innerHTML = `
        <p class="mini">Ahora sí... 🎁</p>
        <h2>Ve por tu sorpresa ❤️</h2>
        <div class="sorpresa">
            <div class="regalo">🎁</div>
            <strong>Te espero aquí.</strong>
            <span>Cierra esta página y vuelve a abrirla cuando regreses.</span>
        </div>
        <p style="font-size:14px;color:#765962;">
            No tienes que hacer nada más. ❤️
        </p>
    `;
}

function noAceptar() {
    const botonNo = document.getElementById("btnNo");
    const mensaje = document.getElementById("mensajeNo");

    if (intentosNo < mensajesNo.length) {
        mensaje.textContent = mensajesNo[intentosNo];
    }

    intentosNo++;

    if (intentosNo >= mensajesNo.length) {
        botonNo.style.animation = "desaparecer .6s forwards";

        setTimeout(() => {
            botonNo.style.display = "none";
            mensaje.textContent =
                "Creo que ese botón ya no quiere participar 😂❤️";
        }, 600);
    }
}

function aceptar() {
    localStorage.setItem("dijoQueSi", "true");
    localStorage.removeItem("sorpresaIniciada");

    crearCorazones();
    mostrarPantalla(6);
}

function crearCorazones() {
    for (let i = 0; i < 45; i++) {
        const corazon = document.createElement("div");

        corazon.textContent = "❤️";
        corazon.style.position = "fixed";
        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.top = "-30px";
        corazon.style.fontSize = (Math.random() * 25 + 15) + "px";
        corazon.style.zIndex = "9999";
        corazon.style.pointerEvents = "none";
        corazon.style.animation =
            `caer ${Math.random() * 3 + 2}s linear forwards`;

        document.body.appendChild(corazon);

        setTimeout(() => corazon.remove(), 5500);
    }
}

function corazonesFondo() {
    const contenedor = document.getElementById("corazones");

    for (let i = 0; i < 14; i++) {
        const corazon = document.createElement("div");

        corazon.className = "fondo-corazon";
        corazon.textContent = "♡";
        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.top = Math.random() * 100 + "vh";
        corazon.style.fontSize = (Math.random() * 28 + 15) + "px";

        contenedor.appendChild(corazon);
    }
}

function comprobarEstado() {
    const sorpresa = localStorage.getItem("sorpresaIniciada");

    if (sorpresa === "true") {
        mostrarPantalla(5);
    } else {
        mostrarPantalla(1);
    }
}

corazonesFondo();
comprobarEstado();
