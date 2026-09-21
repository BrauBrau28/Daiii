let pantallaActual = 1;
let intentosNo = 0;


// ==========================================
// CAMBIAR DE PANTALLA
// ==========================================

function siguientePantalla() {

    const actual = document.getElementById(
        "pantalla" + pantallaActual
    );

    if (actual) {
        actual.classList.remove("activa");
    }

    pantallaActual++;

    const siguiente = document.getElementById(
        "pantalla" + pantallaActual
    );

    if (siguiente) {
        siguiente.classList.add("activa");
    }
}


// ==========================================
// IR POR LA SORPRESA
// ==========================================

function irASorpresa() {

    // Guardamos que ya llegó a la parte de la sorpresa
    localStorage.setItem("sorpresaIniciada", "true");

    const actual = document.getElementById(
        "pantalla" + pantallaActual
    );

    if (actual) {
        actual.classList.remove("activa");
    }

    // Mostramos una pantalla especial
    pantallaActual = 9;

    document.getElementById("pantalla9").classList.add("activa");
}


// ==========================================
// BOTÓN NO
// ==========================================

const mensajesNo = [
    "¿Segura? ",
    "Rivas... piénsalo otra vez",
    "Creo que apretaste el botón equivocado",
    "Ese botón no te conviene la vdd",
    "Última oportunidad... ",
    "Bueno... entonces ese botón desaparece"
];


function noAceptar() {

    const botonNo = document.getElementById("btnNo");
    const mensaje = document.getElementById("mensajeNo");

    if (intentosNo < mensajesNo.length) {

        mensaje.textContent =
            mensajesNo[intentosNo];

    }

    intentosNo++;

    if (intentosNo >= 6) {

        botonNo.style.animation =
            "desaparecer 0.6s forwards";

        setTimeout(() => {

            botonNo.style.display = "none";

            mensaje.textContent =
                "Creo que ese botón ya no quiere participar 😂❤️";

        }, 600);
    }
}


// ==========================================
// BOTÓN SÍ
// ==========================================

function aceptar() {

    // Marcamos que dijo que sí
    localStorage.setItem("dijoQueSi", "true");

    crearCorazones();

    document
        .querySelectorAll(".pantalla")
        .forEach(pantalla => {

            pantalla.classList.remove("activa");

        });

    document
        .getElementById("pantallaFinal")
        .classList.add("activa");
}


// ==========================================
// CORAZONES AL FINAL
// ==========================================

function crearCorazones() {

    for (let i = 0; i < 45; i++) {

        const corazon =
            document.createElement("div");

        corazon.innerHTML = "❤️";

        corazon.style.position = "fixed";

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.top = "-30px";

        corazon.style.fontSize =
            (Math.random() * 25 + 15) + "px";

        corazon.style.zIndex = "9999";

        corazon.style.pointerEvents = "none";

        corazon.style.animation =
            `caer ${Math.random() * 3 + 2}s linear forwards`;

        document.body.appendChild(corazon);

        setTimeout(() => {

            corazon.remove();

        }, 5500);
    }
}


// ==========================================
// CORAZONES DEL FONDO
// ==========================================

function corazonesFondo() {

    const contenedor =
        document.getElementById("corazones");

    if (!contenedor) return;

    for (let i = 0; i < 12; i++) {

        const corazon =
            document.createElement("div");

        corazon.innerHTML = "♡";

        corazon.style.position = "fixed";

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.top =
            Math.random() * 100 + "vh";

        corazon.style.color =
            "rgba(255, 120, 145, 0.10)";

        corazon.style.fontSize =
            (Math.random() * 30 + 15) + "px";

        corazon.style.pointerEvents =
            "none";

        contenedor.appendChild(corazon);
    }
}


// ==========================================
// COMPROBAR SI YA HABÍA INICIADO LA SORPRESA
// ==========================================

function comprobarSorpresa() {

    const sorpresaIniciada =
        localStorage.getItem("sorpresaIniciada");

    if (sorpresaIniciada === "true") {

        // Ocultamos todas las pantallas
        document
            .querySelectorAll(".pantalla")
            .forEach(pantalla => {

                pantalla.classList.remove("activa");

            });

        // Mostramos directamente "¿Ya regresaste?"
        pantallaActual = 9;

        document
            .getElementById("pantalla9")
            .classList.add("activa");
    }
}


// ==========================================
// INICIAR
// ==========================================

corazonesFondo();

comprobarSorpresa();