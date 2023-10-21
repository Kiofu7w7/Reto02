export function DOM(etiqueta, id, atributo, valorAtributo){
    let objeto = document.createElement(etiqueta);
    objeto.setAttribute('id',id);
    objeto.setAttribute(atributo,valorAtributo);
    return objeto
}
