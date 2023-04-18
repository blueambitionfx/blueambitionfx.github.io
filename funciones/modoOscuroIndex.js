
//DETECTA SI EL DISPOSITIVO TIENE ACTIVADO EL MODO OSCURO O CLARO
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  if (event.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    dark = true;
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    dark=false;
  }
});

let dark = false;

window.addEventListener('DOMContentLoaded', (event) => {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("year").innerHTML = n;
});

  function darkMode() {

    if(dark == false){

        dark = true;

        document.getElementById("sol").style.display="block";
        document.getElementById("luna").style.display="none";
        document.getElementById("header").style.setProperty("background-color","black","important");
        document.querySelector("header").style.setProperty("background-color","black","important");
        document.getElementById("body").style.backgroundColor = "black";
        document.getElementById("body").style.color = "white";
        document.getElementsByClassName("nav-link")[1].style.color = "white";
        document.getElementsByClassName("nav-link")[2].style.color = "white";
        document.getElementsByClassName("nav-link")[3].style.color = "white";
        document.getElementsByClassName("nav-link")[4].style.color = "white";

        document.getElementById("realidadVirtual2").style.display="block";
        document.getElementById("realidadVirtual").style.display="none";


        document.getElementsByClassName("text-muted")[0].style.setProperty("color", "white" , "important");
        document.getElementsByClassName("text-muted")[1].style.setProperty("color", "white", "important");
        document.getElementsByClassName("text-muted")[2].style.setProperty("color", "white", "important");
        document.getElementsByClassName("text-muted")[3].style.setProperty("color", "white", "important");
        document.getElementsByClassName("text-muted")[4].style.setProperty("color", "white", "important");
        document.getElementsByClassName("text-muted")[5].style.setProperty("color", "white", "important");

    }
    
    else{

        dark = false;

        document.getElementById("sol").style.display="none";
        document.getElementById("luna").style.display="block";
        document.getElementById("header").style.setProperty("background-color","white","important");
        document.querySelector("header").style.setProperty("background-color","white","important");
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("body").style.color = "black";

        document.getElementsByClassName("nav-link")[1].style.setProperty("color","inherit","important");
        document.getElementsByClassName("nav-link")[2].style.setProperty("color","inherit","important");
        document.getElementsByClassName("nav-link")[3].style.setProperty("color","inherit","important");
        document.getElementsByClassName("nav-link")[4].style.setProperty("color","inherit","important");

        document.getElementsByClassName("text-muted")[0].style.setProperty("color", "inherit","important");
        document.getElementsByClassName("text-muted")[1].style.setProperty("color", "inherit","important");
        document.getElementsByClassName("text-muted")[2].style.setProperty("color", "inherit","important");
        document.getElementsByClassName("text-muted")[3].style.setProperty("color", "inherit","important");
        document.getElementsByClassName("text-muted")[4].style.setProperty("color", "inherit","important");
        document.getElementsByClassName("text-muted")[5].style.setProperty("color", "inherit","important");

        document.getElementById("realidadVirtual2").style.display="none";
        document.getElementById("realidadVirtual").style.display="block";        
    } 
  }




 