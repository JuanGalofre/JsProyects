/** 
 * 
 * 
 * Curso manipulación del DOM con js
 * 
 * 
 */



/**
 * 
 * Cómo encontrar un elemento en el DOM
 * 
 */ 

/**
//Encontrar elemento por elemento con getElementById, osea, encontrarlo por ID

const title=document.getElementById("main-heading");
console.log(title);


//Encontrar elementos de la misma clase

const listItem= document.getElementsByClassName("list-items");
console.log(listItem);


//Encontrar elementos con el mismo tag

const listLIs= document.getElementsByTagName("li");
console.log(listLIs);


//Encontrar el primer elemento que tenga el selector que pongamos

let container= document.querySelector("div");
console.log(container)


//Tambien esta el querySelectorAll, que es para encontrar todos los elementos
//a los que les coincida la busqueda. En el anterior solo nos devuelve el primer
//div, mientras que con este, nos devuelve todos los divs

let container= document.querySelectorAll("div");


*/



/**
 * 
 * Cambiar estilos
 * 
 */
/** 
//Se cambia el estilo de un elemento

const title=document.querySelector("#main-heading");
console.log(title)
title.style.color ="red";


//Para una lista de elementos

const listListitems=document.getElementsByClassName("list-items");
for(i=0;i<listListitems.length;i++){
    listListitems[i].style.fontSize="5rem";
}


*/



/**
 * 
 * Manipulación de elementos
 * 
 */
/** 
//Para crear elementos. Agarramos al padre

const body=document.querySelector("body");


//Creamos al hijo

const titulo2=document.createElement("h2");


//Le añadimos el padre al hijo

body.append(titulo2);


//Ponemos texto

titulo2.innerText= "Favorite videogame";


//Tambien se pueden modificar atributos

titulo2.setAttribute("class","Titulo2");


//Y si no me gustan, los removemos

titulo2.removeAttribute("class");


//pero lo volvemos a poner para el siguiente ejemplo

titulo2.setAttribute("class","smallTitle");


//Vamos a mirar si el item contiene una clase en especifico. Boolean devulve true or false

console.log(titulo2.classList.contains("smallTitle"));


//Si ya no me gusta el titulo lo podemos remover

titulo2.remove()


*/
const body = document.querySelector("body");
const newDiv= document.createElement("div");
newDiv.setAttribute("class","oculto")
body.append(newDiv);
const newP=document.createElement("p");
newDiv.append(newP);
newP.innerText="ipsum lorum";
const newB = document.createElement("Button");
newB.setAttribute("type","button");
newB.setAttribute("class","dissapear-button");
newB.innerText="Make them dissapear";
newDiv.append(newB);

const dissapearButton = document.querySelector(".dissapear-button");
const dissapearingDiv = document.querySelector(".oculto");

function pasaron(){
    let modDiv=document.querySelector(".oculto")
    modDiv.style.backgroundColor = "Blue";
    modDiv.style.opacity=0.5;
}
function reset(){
    let modDiv=document.querySelector(".oculto")
    modDiv.style.backgroundColor = "white";
    modDiv.style.opacity=1;

}

newDiv.addEventListener("mouseenter",pasaron);
newDiv.addEventListener("mouseleave",reset);

function nEC(){
     

}
newB.addEventListener("mouseenter",nEC(this))














/**
 * Referencias:
 * Curso=https://www.youtube.com/watch?v=5fb2aPlgoys&t=262s 
 * DOM events=https://www.w3schools.com/jsref/dom_obj_event.asp
 * 
 * 
 * 
 */
