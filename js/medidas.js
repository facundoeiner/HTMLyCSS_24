const cajaHijo=document.getElementById("cajaHijo");
const inpPorcentaje=document.getElementById("medidasPor");
const pPorsentaje=document.getElementById("porcentaje");
const inOculto=document.getElementById("padre");
const divOculto=document.getElementById("oculto");
const inWidth=document.getElementById("anchoPadre");
const inHeight=document.getElementById("lagoPadre");
const boxPadre=document.getElementById("newMedidasPadre");
function newMedida(){
    cajaHijo.style.width=`${inpPorcentaje.value}%`;
    cajaHijo.style.height=`${inpPorcentaje.value}%`;
    cajaHijo.style.borderBottomRightRadius=`${100-inpPorcentaje.value}%`;

    pPorsentaje.textContent=`${inpPorcentaje.value}%`;
    if (inpPorcentaje.value<34){
        cajaHijo.textContent="";
    }else{
        cajaHijo.textContent="hijo";

    }

}
function checkedOculto(e){
    if (this.checked) {
        divOculto.style.display = 'flex';
    } else {
        divOculto.style.display = 'none';
        boxPadre.style.width=`100px`;
        boxPadre.style.height=`100px`;
    }
}

function newMedidasPadre(){
    if (inWidth.value<=300 && inHeight.value<=300 ){
        boxPadre.style.width=`${inWidth.value}px`;
        boxPadre.style.height=`${inHeight.value}px`;
    }else{
        alert("No puede pasar de los 300px")
    }
}
inpPorcentaje.addEventListener("input",newMedida);
inOculto.addEventListener("change",checkedOculto);
inWidth.addEventListener("input",newMedidasPadre);
inHeight.addEventListener("input",newMedidasPadre);

// border-top-left-radius
// border-top-right-radius
// border-bottom-right-radius
// border-bottom-left-radius


/*
    sara no se como hacer que cambies de idea.
    No siento que estemos llendo rapido simplemento siento que
    estamos haciendo bien.
    Si sabrias todo lo que hago por pasar mas tiempo con vos 
    me creerias.
    Como tambie te dije tambien quiero seguir estudiando mas
    para poder tener un trabajo pronto y poder ir a vivir con vos.
    quiero poder darte todo.
    Pero ahora se que quieres simplemente pasar tiempo en las
    llamadas y eso me parese super tierno y lindo.
    se que esto no va a cambir nada y esta bien pero 
    espero no perderte sarita.

*/