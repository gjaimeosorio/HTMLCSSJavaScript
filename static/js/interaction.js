var sectionContainer = document.querySelector("section")
var selectElement = document.querySelector("select");
var lastSelected = localStorage.getItem("tema");

selectElement.value = lastSelected
changeTheme(lastSelected)

selectElement.addEventListener("change", (event) => {
    changeTheme(event.target.value)
});

function changeTheme (val) {
    switch(val) {
        case "1":
            lastSelected = "1";
            sectionContainer.style.backgroundColor = "darkslategray";
            sectionContainer.style.fontFamily = "Arial, Helvetica, sans-serif";
            localStorage.setItem("tema", lastSelected);
            break;
        case "2":
            lastSelected = "2";;
            sectionContainer.style.backgroundColor = "black";
            sectionContainer.style.fontFamily = "Arial";
            localStorage.setItem("tema", lastSelected);
            break;
        case "3":
            lastSelected = "3";
            sectionContainer.style.backgroundColor = "lightgray";
            sectionContainer.style.fontFamily = "Arial";
            localStorage.setItem("tema", lastSelected);
            break;
        }
}

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
