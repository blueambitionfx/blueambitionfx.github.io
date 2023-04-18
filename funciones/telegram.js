// BOTÓN TELEGRAM
window.onload = function botonTelegram() {
    setTimeout(function botonTelegram () {
        document.getElementById("TELEGRAM").style.display = "flex";
    }, 10000);
  
    setTimeout(function botonTelegram () {
      document.getElementById("exit").style.display = "block";
  }, 14000);
  }
  
  // Exit botón telegram
  
  function exit(){
    document.getElementById("TELEGRAM").style.display="none";
    document.getElementById("exit").style.display="none";
  }