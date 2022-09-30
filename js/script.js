const imagenes = ["alexanderplatz.jpeg", "hermannplatz.jpeg", "jungfernheide.jpeg",
    "konstanzer.jpeg", "kurfurstenstrabe.jpeg", "paulsternstrasse.jpeg",
    "unterdenlinden.jpeg", "westhafen.jpeg"];

let imgs=document.querySelectorAll(".main__img");

let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")
let img5 = document.getElementById("img5")
let img6 = document.getElementById("img6")
let img7 = document.getElementById("img7")
let img8 = document.getElementById("img8")

/*Tengo que indicar la ruta de las imagenes para que sepa donde encontrarlo. Por eso ponemos "imagenes/" justo antes. Si esa carpeta de imagenes estuviera dentro de una carpeta assets, pondríamos "assets/imagenes/" */

let main=document.getElementById("main");
let info=document.getElementById("info");


// const mostrar = (event) => {
//     let pos;

//     if(event.target.tagName == "IMG"){
       
//         pos=Math.floor(Math.random()*imagenes.length)
//         event.target.src="imagenes/" + imagenes[pos]; 
//         console.log(event.target)
//     }
// }

// main.addEventListener("click", mostrar)

//SIN USAR EVENT, solo aparece el texto de la imagen en la que hago click
const mostrar=(img)=>{
    
    let pos= Math.floor(Math.random()*8);

    info.textContent=img.src.slice(img.src.lastIndexOf("/")+1, img.src.lastIndexOf("."));
    
    
}


img1.addEventListener("click", ()=> mostrar(img1));
img2.addEventListener("click", ()=> mostrar(img2));
img3.addEventListener("click", ()=> mostrar(img3));
img4.addEventListener("click", ()=> mostrar(img4));
img5.addEventListener("click", ()=> mostrar(img5));
img6.addEventListener("click", ()=> mostrar(img6));
img7.addEventListener("click", ()=> mostrar(img7));
img8.addEventListener("click", ()=> mostrar(img8));


/** con una función de flecha metemos el código de la función, por lo que no se va a ejecutar hasta que se produzca el evento click*/

