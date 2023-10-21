//importe de los datos para datos y funciones
import { imagenes, Descripcion, Nombres, datosDetalles, datosInicio } from "./data.js";
import { DOM } from "./funcionDom.js";

// Variables
let personajesC = [];
let objetosInicio = [];
let objetosDetalles = [];
let tarjetaHTML = document.querySelector("#tarjetaID");
let indiceActual = localStorage.getItem('indiceActual');

// LOCAL STORAGE
if (indiceActual === null) {
    indiceActual = 0;
} else {
    indiceActual = Number(indiceActual);
}

// Recepcion de datos nombres, urls y descripciones
for (let i = 0; i < Nombres.length; i++) {
    personajesC.push({
        nombre:Nombres[i],
        url:imagenes[i],
        descrip:Descripcion[i]
    })
}

// Creacion de cada etiqueda con la funcion DOM para crear etiquetas
datosInicio.forEach(function(dato) {
    let elementoDOM = DOM(dato._Etiqueta, dato._Id, dato._Atributo, dato._ValorAtributo);
    objetosInicio.push(elementoDOM)
});

// Primer dibujada
dibujar()

function dibujar() {
    // button , div(img, button), button
    tarjetaHTML.appendChild(objetosInicio[0])
    tarjetaHTML.appendChild(objetosInicio[1])
    let dividDivImgBtnNombreHTML = document.getElementById("idDivImgBtnNombre")
    dividDivImgBtnNombreHTML.appendChild(objetosInicio[2])
    dividDivImgBtnNombreHTML.appendChild(objetosInicio[3])
    tarjetaHTML.appendChild(objetosInicio[4])

    objetosInicio[0].textContent = "<";
    objetosInicio[4].textContent = ">";

    objetosInicio[3].textContent = personajesC[indiceActual].nombre;

    objetosInicio[2].setAttribute('src', personajesC[indiceActual].url);

    if (indiceActual === 0) {
        objetosInicio[0].style.backgroundColor = "gray";
        objetosInicio[4].style.backgroundColor = "";
    } else if (indiceActual === personajesC.length - 1) {
        objetosInicio[4].style.backgroundColor = "gray";
        objetosInicio[0].style.backgroundColor = "";
    } else {
        objetosInicio[0].style.backgroundColor = "";
        objetosInicio[4].style.backgroundColor = "";
    }
}

// Funcionalidad cambiar de personaje izquierda
objetosInicio[0].addEventListener('click', function() {
    if (indiceActual > 0) {
        indiceActual--;
        localStorage.setItem('indiceActual', indiceActual);  // Guarda el índice actual en el almacenamiento local
        dibujar();
    }
});

// Funcionalidad cambiar de personaje derecha
objetosInicio[4].addEventListener('click', function() {
    if (indiceActual < personajesC.length - 1) {
        indiceActual++;
        localStorage.setItem('indiceActual', indiceActual);  // Guarda el índice actual en el almacenamiento local
        dibujar();
    }
});

// Funcionalidad borrar contenido .Tarjeta
objetosInicio[3].addEventListener('click', function() {
    tarjetaHTML.innerHTML = '';
    datosDetalles.forEach(function(dato) {
        let elementoDOM = DOM(dato._Etiqueta, dato._Id, dato._Atributo, dato._ValorAtributo);
        objetosDetalles.push(elementoDOM)
        if (dato._Id === 'idButton') {
            elementoDOM.textContent = "Volver";
            elementoDOM.addEventListener('click', function() {
                tarjetaHTML.innerHTML = '';
                dibujar();
            });
        }
});

    // div1 (button, img), div2 (h1, p)
    tarjetaHTML.appendChild(objetosDetalles[0]);
    let dividDivDetalle1HTML = document.getElementById("idDivDetalle1");
    dividDivDetalle1HTML.appendChild(objetosDetalles[1]);
    dividDivDetalle1HTML.appendChild(objetosDetalles[2]);
    tarjetaHTML.appendChild(objetosDetalles[3]);
    let dividDivDetalle2HTML = document.getElementById("idDivDetalle2");
    dividDivDetalle2HTML.appendChild(objetosDetalles[4]);
    dividDivDetalle2HTML.appendChild(objetosDetalles[5]);

    document.getElementById('idH1').textContent = personajesC[indiceActual].nombre;
    document.getElementById('idImg').src = personajesC[indiceActual].url;
    document.getElementById('idP').textContent = personajesC[indiceActual].descrip;
});