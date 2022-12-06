
function btnSi(){
    var acepto = document.getElementById("acepto");

    acepto.innerHTML="Gracias Por Aceptarme <br/> :}";
}

function btnNo(){

    var height = window.innerHeight ;
    var width = window.innerWidth;

    var newHeight = (Math.random() * height / 2 );
    var newWidht = (Math.random() * width / 2 );

    document.getElementById('mover').style.position='absolute';
    document.getElementById('mover').style.left = newWidht + 'px';
    document.getElementById('mover').style.top = newHeight + 'px';
}