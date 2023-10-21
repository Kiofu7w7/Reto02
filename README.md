# Reto 2 de Agile Innova Clash Royale
## Persoanjes con descripciones del juego
### Inicio

Para empezar este proyecto como estoy iniciando apenas con Java Script hice todo "rusticamente" funcionaba pero era muy desorganizado y en ocaciones daba error o era lento; Igual esa era la intencion, solo queria mirar como reaccionaba Java Script a ciertas funciones como por ejemplo al momento de colocar el script en el HTML de tipo "module" este no dejaria usar en el HTML la funcionalidad ONCLICK, lo cual si tuve muchos problas al momento de hacer esto, YO no quise hacer 2 HTMLS queria aprender todo sobre el DOM por ende casi todo lo que ve en la aplicacion se crea a travez del DOM, dando asi a un codigo **MOUSTROSO** y feo de ver jajaja adjunto fotos de como era antes: 

![Imagen de codigo viejo](https://res.cloudinary.com/dlwr6vxib/image/upload/v1697918120/j26yyx2em6fonpkqpwhb.png).

Eso es solo el inicio, por que la funciones se son aun mas enredadas, etc; Pero reitero eso era la idea, ya con todo en mente, ya entendiendo como todo reaccionaba empeze a poner todo bonito, a organizarlo.

### Planeacion

Teniamos unos requisitos para hacer este reto, entre ellos estaban los modulos, lo cual me propuso crear 2 nuevos Java Script, uno para las funcionalidades del DOM y el otro para la informacion; Teniamos que usar el Local host, pero no nos decian en que lo cual yo supose que era si cerrabas la pestaña se guardara como el personaje en el que estabas, claro esta ya tenia pensado en como saber en que personaje estaba y era con un INDICE el cual seria mi "CENTRO" de la aplicacion todo se mueve por este INDICE:

![Imagen de diagrama bonito](https://res.cloudinary.com/dlwr6vxib/image/upload/v1697918112/j04vsokbeq9hbwxxoo42.png).
Link para ver mejor: https://res.cloudinary.com/dlwr6vxib/image/upload/v1697918112/j04vsokbeq9hbwxxoo42.png

### DOM

Como vieron anteriormente ya tenia la funcionalidad DOM la cual aprendi a no crear cada etiqueta una por una, cree en otro Java Script con nombre "funcionDom" una funcion la cual le tenia que pasar 4 datos:
1. Nombre de la etiqueda, ejemplo si queria que fuera un boton le pasaba de dato 'button'
2. Id de la etiqueta, siempre me han dicho que todo tiene que tener una ID si es posible y con nomenclatura '**id**etiqueta'
3. Atributo extra, si tengo que colocarle un atributo aca lo coloco, encaso de noter solo coloco 'class'
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

Lo mas importante de todo los **DATOS**, estos decidi ponerlos aparte por que son muchos y hace que el aspecto del codigo sea feo, dificil de entender aun que esten escondidos, decidi crear 3 arrays para guardar nombres de los personajes, urls de las imagenes y descripciones: 

![Imagen arrays](https://res.cloudinary.com/dlwr6vxib/image/upload/v1697919363/k7up6pp3etnz2bwre4f6.png).

Inclui en este Java Script los datos de todos las etiquetas que necesitaria por que mi aplicacion tiene 2 GUIs el primero es donde te mueves con los botones seleccionando personajes, y el segundo donde miras la descripcion del que seleccionaste:

#### **GUI INICIO**
![Imagen Gui inicio](https://res.cloudinary.com/dlwr6vxib/image/upload/v1697919534/pp3qtskpq5yyplcl2qaz.png).

#### **GUI DETALLES**
![Imagen Gui detelle](https://res.cloudinary.com/dlwr6vxib/image/upload/v1697919648/atnysakqjk7oykqfr9ug.png).

Todos esos elementos se crearian en el la funcion DOM a exepcion de uno solo que era el div que contendria todos estos elementos.

### Script

