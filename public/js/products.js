/*SCRIPT DE PRODUCTOS*/
$(document).ready(function () {
    $(".trigger").click(function () {
      $("body").toggleClass("active-floating-menu");
    });
  });
/*SCRIPT DE PRINT*/
function imprSelect(imp1) {
    var contenido= document.getElementById(imp1).innerHTML;
    var contenidoOriginal= document.body.innerHTML;
  
    document.body.innerHTML = contenido;
  
    window.print();
  
    document.body.innerHTML = contenidoOriginal;
  }

  