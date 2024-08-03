function colorear(){
    let color=`#${rojo1.value}${rojo2.value}${verde1.value}${verde2.value}${azul1.value}${azul2.value}`;    
    divColor.style.background = `#${rojo1.value}${rojo2.value}${verde1.value}${verde2.value}${azul1.value}${azul2.value}`
    newColorDeTexto(color);
    return color;
}
function copiarColor(){
    let color=colorear();
    navigator.clipboard.writeText(color)
    .then(()=>{
        console.log("textocopiado al portapapeles")
       
    })
    .catch(err=>{ console.log("Error al copiar el texto")});

};
function hexToRgb(exa){
    const separado= parseInt(exa.slice(1),16);
    return{
        r: (separado>> 16) & 255,
        g: (separado>> 8) & 255,
        b: separado & 255
    }
}
function calcularIluminacion(r,g,b){
    return (r * 0.299 + g * 0.587 + b * 0.114);
}
function newColorDeTexto(exa){
    let ex=exa;
    const rgb=hexToRgb(ex);
    const iluminicion=calcularIluminacion(rgb.r,rgb.g,rgb.b);
    h4.style.color=iluminicion>127.5? "black":"white";
}

const divColor=document.querySelector(".colorear")
const rojo1=document.getElementById("exaRojo1");
const rojo2=document.getElementById("exaRojo2");
const verde1=document.getElementById("exaVerde1");
const verde2=document.getElementById("exaVerde2");
const azul1=document.getElementById("exaAzul1");
const azul2=document.getElementById("exaAzul2");
const btn=document.querySelector(".copiarColor");
const h4=document.getElementById("h4Colorear");
rojo1.addEventListener("input",colorear);
rojo2.addEventListener("input",colorear);
verde1.addEventListener("input",colorear);
verde2.addEventListener("input",colorear);
azul1.addEventListener("input",colorear);
azul2.addEventListener("input",colorear);
btn.addEventListener("click",copiarColor);
/*
    Ojalá tener la suerte de verte sonreír todos los días,
    ojalá poder abrazarte en los momentos en los que más lo necesitas,
    ojalá poder vivir esta aventura juntos sin tener que olvidarnos.
 */
