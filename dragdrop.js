let drop1 = document.getElementById("drop1");
let drop2 = document.getElementById("drop2");
let drop3 = document.getElementById("drop3");
let dragImg1 = document.getElementById("dragImg1");
let dragImg2 = document.getElementById("dragImg2");
let dragImg3 = document.getElementById("dragImg3");
let resetear = document.getElementById("reset");

function guardarDatos1(e){
    e.dataTransfer.setData("Text", "../images/Rompe1.png");
    // e.dataTransfer.setData("Text/plain", e.dataTransfer.src);
}

function guardarDatos2(e){
    e.dataTransfer.setData("Text/plain", e.dataTransfer.src);
}

function guardarDatos3(e){
    e.dataTransfer.setData("URL",e.dataTransfer.src);
}

function soltarDatos1(e){
    let dato = e.dataTransfer.getData("Text");
    // let dato2 = e.dataTransfer.getData("Text/plain");
    drop1.innerHTML=`<img src="${dato}"></img>`;
    evento.dataTransfer.clearData();

}

function soltarDatos2(e){
    let dato2 = e.dataTransfer.getData("Text/plain");

    drop2.innerHTML=`<img src="${dato2}"></img>`;
    evento.dataTransfer.clearData();
}

function soltarDatos3(e){
    let dato3 = e.dataTransfer.getData("URL");

    drop3.innerHTML=`<img src="${dato3}"></img>`;
    evento.dataTransfer.clearData();
}

dragImg1.addEventListener("dragstart",()=>{
    guardarDatos1(e);
})
dragImg2.addEventListener("dragstar",()=>{
    guardarDatos2(e);
})
dragImg3.addEventListener("dragstart",()=>{
    guardarDatos3(e);
})

drop1.addEventListener("dragover",(e)=>{
    e.preventDefault();
    })

drop2.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })

drop3.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })

drop1.addEventListener("drop",(e)=>{
    soltarDatos1(e);

})
drop2.addEventListener("drop",(e)=>{
    soltarDatos2(e);
})
drop3.addEventListener("drop",(e)=>{
    soltarDatos3(e);
})

resetear.addEventListener("click",()=>{
    location.reload();
})