const box1=document.getElementById("box1");
const box2=document.getElementById("box2");
const box3=document.getElementById("box3");
const select=document.getElementById("box-models")
const marging=document.getElementById("margin");
const padding=document.getElementById("padding");
const border=document.getElementById("border");
const tam=document.querySelector(".sizing");
const selecSizing=document.getElementById("box-tamanio");
const cajaSizing=document.querySelector(".box-sizing");

function newMargin(){
    box1.style.margin=`${marging.value}px`;
    box2.style.margin=`${marging.value}px`;
    box3.style.margin=`${marging.value}px`;
}
function newPadding(){
    box1.style.padding=`${padding.value}`;
    box2.style.padding=`${padding.value}`;
    box3.style.padding=`${padding.value}`;
}
function newBorder(){
    box1.style.border=`${border.value}px solid black`;
    box2.style.border=`${border.value}px solid black`;
    box3.style.border=`${border.value}px solid black`;

}
function newSelect(){
    box1.style.boxSizing=`${select.value}`;
    box2.style.boxSizing=`${select.value}`;
    box3.style.boxSizing=`${select.value}`;

}
function newBoxSizing(){
    console.log("hola")
    if (selecSizing.value=="border-box"){
        tam.textContent= `100px`;
        cajaSizing.style.boxSizing="border-box"
    }else{
        tam.textContent= `120px`;
        cajaSizing.style.boxSizing="content-box"

    }  
}
marging.addEventListener("input",newMargin);
padding.addEventListener("input",newPadding);
border.addEventListener("input",newBorder);
select.addEventListener("input",newSelect);
selecSizing.addEventListener("input",newBoxSizing)


