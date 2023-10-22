# Reto 2 de Agile Innova Clash Royale
## Personajes con descripciones del juego
### Inicio

Para empezar este proyecto como estoy iniciando apenas con Java Script hice todo "rústicamente" funcionaba pero era muy desorganizado y en ocasiones daba error o era lento; Igual esa era la intención, solo quería mirar como reaccionaba Java Script a ciertas funciones como por ejemplo al momento de colocar el script en el HTML de tipo "module" este no dejara usar en el HTML la funcionalidad ONCLICK, lo cual si tuve muchos problemas al momento de hacer esto, YO no quise hacer 2 HTMLS quería aprender todo sobre el DOM por ende casi todo lo que ve en la aplicación se crea a través del DOM, dando así a un código **MOUSTROSO** y feo de ver jajaja adjunto fotos de cómo era antes: 

![Imagen de código viejo](https://res.cloudinary.com/dlwr6vxib/image/upload/v1697918120/j26yyx2em6fonpkqpwhb.png).

Eso es solo el inicio, porque la funciones se son aún más enredadas, etc; Pero reitero eso era la idea, ya con todo en mente, ya entendiendo como todo reaccionaba empezó a poner todo bonito, a organizarlo.

### planeación

Tenemos unos requisitos para hacer este reto, entre ellos estaban los módulos, lo cual me propuso crear 2 nuevos Java Script, uno para las funcionalidades del DOM y el otro para la información; Tenemos que usar el Local host, pero no nos decían en que lo cual yo supuse que era si cerrabas la pestaña se guardara como el personaje en el que estabas, claro está ya tenía pensado en cómo saber en qué personaje estaba y era con un INDICE el cual sería mi "CENTRO" de la aplicación todo se mueve por este INDICE:

![Imagen de diagrama bonito](https://res.cloudinary.com/dlwr6vxib/image/upload/v1697918112/j04vsokbeq9hbwxxoo42.png).
Link para ver mejor: https://res.cloudinary.com/dlwr6vxib/image/upload/v1697918112/j04vsokbeq9hbwxxoo42.png

### DOM

Como vieron anteriormente ya tenía la funcionalidad DOM la cual aprendí a no crear cada etiqueta una por una, cree en otro Java Script con nombre "funcionDom" una función la cual le tenía que pasar 4 datos:
1. Nombre de la etiqueta, ejemplo si quería que fuera un botón le pasaba de dato 'button'
2. Id de la etiqueta, siempre me han dicho que todo debe tener una ID si es posible y con nomenclatura '**id**etiqueta'
3. Atributo extra, si tengo que colocarle un atributo acá lo coloco, en caso de no tener solo coloco 'class'
4. Valor del atributo extra

```
export function DOM(etiqueta, id, atributo, valorAtributo){
    let objeto = document.createElement(etiqueta);
    objeto.setAttribute('id',id);
    objeto.setAttribute(atributo,valorAtributo);
    return objeto
}
```

### Datos

Lo más importante de todo los **DATOS**, estos decidí ponerlos aparte porque son muchos y hace que el aspecto del código sea feo, difícil de entender aunque estén escondidos, decidí crear 3 arrays para guardar nombres de los personajes, urls de las imágenes y descripciones: 

![Imagen arrays](https://res.cloudinary.com/dlwr6vxib/image/upload/v1697919363/k7up6pp3etnz2bwre4f6.png).

Incluí en este Java Script los datos de todos las etiquetas que necesitaría porque mi aplicación tiene 2 GUIs el primero es donde te mueves con los botones seleccionando personajes, y el segundo donde miras la descripción del que seleccionaste:

#### **GUI INICIO**
![Imagen Gui inicio](https://res.cloudinary.com/dlwr6vxib/image/upload/v1697919534/pp3qtskpq5yyplcl2qaz.png).

#### **GUI DETALLES**
![Imagen Gui detelle](https://res.cloudinary.com/dlwr6vxib/image/upload/v1697919648/atnysakqjk7oykqfr9ug.png).

Todos esos elementos se crearan en el la función DOM a excepción de uno solo que era el div que contendría todos estos elementos.

### Script

Como había dicho primeramente mi Java Script era un desorden total, pero ya con todo en mente empecé a juntar todos los hilos, importando los datos y luego la función DOM, variables globales solo 5:
1. Personajes (nombre, url de la imagen, descripcion)
2. Objetos a crear con DOM del Gui inicio
3. Objetos a crear con DOM del Gui detalles
4. Div con id "tarjetaID" en el HTML que es el div que contendra todos mis objetos
5. Indice que toma como dato el local storage, puede ser null o un numero

Para usar el local storage use un IF el cual comprobaba si el objeto era null lo que significaría que es primera vez que se abre la aplicación en el navegador, si este es nulo le daría un valor al índice actual de 0 que será el primer personaje, en el caso de que local storage no fuera null índice pasaría a tomar el valor de este:

```
// LOCAL STORAGE
if (indiceActual === null) {
    indiceActual = 0;
} else {
    indiceActual = Number(indiceActual);
}

```

Para recibir los datos de los personajes cree un FOR:

```
for (let i = 0; i < Nombres.length; i++) {
    personajesC.push({
        nombre:Nombres[i],
        url:imagenes[i],
        descrip:Descripcion[i]
    })
}
```

Cree un array y le di información con un FOReach que usaba la función DOM, dándole como parámetros (dato._Etiqueta, dato._Id, dato._Atributo, dato._ValorAtributo) que se encontraban en la información importada de datos:

```
datosInicio.forEach(function(dato) {
    let elementoDOM = DOM(dato._Etiqueta, dato._Id, dato._Atributo, dato._ValorAtributo);
    objetosInicio.push(elementoDOM)
});
```

Plasme en el html con el APPENDCHILD los objetos anteriormente creados en el orden que los necesitaba, también le puse a los botones el texto que debían llevar "<" para la izquierda ">" y su funcionalidad de que si no hay más imágenes para adelante o atrás respectiva mente se pusieran gris para la derecha y en cuanto a la imagen y texto del botón central se hace a través de la variable donde guarde todos la información de mis personajes:

```
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
```

![Imagen Gui inicio](https://res.cloudinary.com/dlwr6vxib/image/upload/v1697919534/pp3qtskpq5yyplcl2qaz.png).

Usamos la función dibujar para crear el contenido en el HTML:

```
dibujar();
```

Funcionalidad de los botones, si no hay más imágenes anteriores no funcionar, viceversa y actualizando el local storage:

```
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
```

En cuanto a los detalles al momento de presionar el botón del centro de cada personaje este borrara todo lo que se encuentre en el div TARJETA, también cree todos los objetos con la función DOM y en este si se encontraba el botón de "Volver" le agregara la propiedad de borrar otra vez todo y dibujar el inicio:

```
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
```

Por último solo plasme los objetos detalle en el HTML, la imagen, nombre y descripción se obtiene por la variable índice y los datos importados del Java Script con los datos:

```
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
```

![Imagen Gui detelle](https://res.cloudinary.com/dlwr6vxib/image/upload/v1697919648/atnysakqjk7oykqfr9ug.png).

### CSS

En cuanto al css fue lo más sencillo, solo usar flex ya sea en columna o solo para centrar todo, usar el objet fit y modificar el tamaño para las imágenes, importar la fuente y usarla y hacer todo lo más parecido a lo retado.

![Imagen Gui detelle](https://res.cloudinary.com/dlwr6vxib/image/upload/v1697943552/eooesdblvljnicwvixvx.png)
***Solo una muestra del css***v
