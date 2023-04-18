
let dark;

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


function darkMode() {


    if(dark == false){

        dark = true;

        document.getElementById("luna").style.display="none";
        document.getElementById("sol").style.display="block";
        document.getElementById("header").style.setProperty("background-color","black","important");
        document.querySelector("header").style.setProperty("background-color","black");

        //Cambia el cuerpo a oscuro
        document.getElementsByClassName("div-form")[0].style.setProperty("background-color", "black", "important");

        document.getElementsByClassName("nav-link")[0].style.color = "white";
        document.getElementsByClassName("nav-link")[1].style.color = "white";
        document.getElementsByClassName("nav-link")[2].style.color = "white";

        document.getElementById("footer").style.setProperty("background-color","black","important");
        document.querySelector("footer").style.setProperty("background-color","black","important");

        document.getElementsByTagName("form")[0].style.border = "solid white";


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

        document.getElementsByClassName("div-form")[0].style.setProperty("background-color", "white", "important");

        document.getElementsByTagName("form")[0].style.border = "solid black";


        document.getElementsByClassName("nav-link")[0].style.setProperty("color", "inherit", "important");
        document.getElementsByClassName("nav-link")[1].style.setProperty("color", "inherit", "important");
        document.getElementsByClassName("nav-link")[2].style.setProperty("color", "inherit", "important");

        document.querySelector("footer").style.setProperty("background-color","white","important");

        document.getElementsByClassName("text-muted")[0].style.setProperty("color", "inherit","important");
        document.getElementsByClassName("text-muted")[1].style.setProperty("color", "inherit","important");
        document.getElementsByClassName("text-muted")[2].style.setProperty("color", "inherit","important");
        document.getElementsByClassName("text-muted")[3].style.setProperty("color", "inherit","important");
        document.getElementsByClassName("text-muted")[4].style.setProperty("color", "inherit","important");
        document.getElementsByClassName("text-muted")[5].style.setProperty("color", "inherit","important");
    } 
  }




 