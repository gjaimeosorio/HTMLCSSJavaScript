const selectElement = document.querySelector(".selector");

selectElement.addEventListener("change", (event) => {
    switch(event.target.value) {
        case "1":
            document.querySelector(".container-index").style.backgroundColor = "darkslategray";
            document.getElementById("container-index").style.fontFamily = "Arial, Helvetica, sans-serif";
            guardarCookie("seleccion",event.target.value)
            break;
        case "2":
            document.querySelector(".container-index").style.backgroundColor = "black";
            document.getElementById("container-index").style.fontFamily = "Arial";
            guardarCookie("seleccion",event.target.value)
            break;
        case "3":
            document.querySelector(".container-index").style.backgroundColor = "lightgray";
            document.getElementById("container-index").style.fontFamily = "Arial";
            guardarCookie("seleccion",event.target.value)
            break;
        }
});

const element = document.getElementById("sofka-exp");
element.addEventListener("click", myFunction);
function myFunction() {
    for (var i = 0; i <= 3; i++) {
        if(document.querySelector('.sofka'+String(i)).style.display=='none') { 
            document.querySelector('.sofka'+String(i)).style.display='block'; 
        }else{
            document.querySelector('.sofka'+String(i)).style.display='none';
        }
    }
}

const element2 = document.getElementById("eafit-exp");
element2.addEventListener("click", myFunction2);
function myFunction2() {
    for (var i = 0; i <= 3; i++) {
        if(document.querySelector('.eafit'+String(i)).style.display=='none') { 
            document.querySelector('.eafit'+String(i)).style.display='block'; 
        }else{
            document.querySelector('.eafit'+String(i)).style.display='none';
        }
    }
}

const element3 = document.getElementById("epm-exp");
element3.addEventListener("click", myFunction3);
function myFunction3() {
    for (var i = 0; i <= 3; i++) {
        if(document.querySelector('.epm'+String(i)).style.display=='none') { 
            document.querySelector('.epm'+String(i)).style.display='block'; 
        }else{
            document.querySelector('.epm'+String(i)).style.display='none';
        }
    }
}

const element4 = document.getElementById("colcafe-exp");
element4.addEventListener("click", myFunction4);
function myFunction4() {
    for (var i = 0; i <= 3; i++) {
        if(document.querySelector('.cafe'+String(i)).style.display=='none') { 
            document.querySelector('.cafe'+String(i)).style.display='block'; 
        }else{
            document.querySelector('.cafe'+String(i)).style.display='none';
        }
    }
}

function guardarCookie(nombre,valor) {
    document.cookie = nombre+"="+valor;
}

function leerCookie(nombre) {
    var lista = document.cookie.split(";");
    for (i in lista) {
        var busca = lista[i].search(nombre);
        if (busca > -1) {micookie=lista[i]}
        }
    var igual = micookie.indexOf("=");
    var valor = micookie.substring(igual+1);
    return valor;
    }


