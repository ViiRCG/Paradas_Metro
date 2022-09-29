const imagenes = ["alexanderplatz.jpeg", "hermannplatz.jpeg", "jungfernheide.jpeg",
    "konstanzer.jpeg", "kurfurstenstrabe.jpeg", "paulsternstrasse.jpeg",
    "unterdenlinden.jpeg", "westhafen.jpeg"];


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


const mostrar=()=>{
    info.textContent=img1.getAttribute("src");
}





img1.addEventListener("click", mostrar);





