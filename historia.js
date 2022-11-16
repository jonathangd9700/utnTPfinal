let reproducir = document.getElementById("play");
let pausar = document.getElementById("pause");
let video = document.getElementById("vid");
let botonera = document.querySelector(".botonera");
let tiempo = document.querySelector("span");
reproducir.addEventListener("click",()=>{
    video.play();
})

pausar.addEventListener("click",()=>{
    video.pause();
})
tiempo.innerHTML=`
${duracion}
`;
console.log(duracion);
console.log(video);