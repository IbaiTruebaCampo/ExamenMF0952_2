/* Autor: Ibai Trueba Campo
Fecha: 26/06/2019
Descripción: Esta página convierte datos hexadecimales en decimales
V 1.0.0. */

$(document).ready(function () {
  $("#hexa").change(function () {
    let dato = $("#hexa").val();
    if (/^[\dA-Fa-f]{1,30}$/.test(dato)) {
      $("#resultado1").html("<i class='far fa-thumbs-up'></i>");
      $("#resultado1").css("color", "green");
      let resultado = parseInt(dato, 16);
      $("#enviar").change(function () {
        resultado = ("#resultado2").val();
      });
      $("#ventana").animate({
        opacity: '1',
        height: '20px',
      });
      $("#resultado2").html("<i class='fas fa-cog' id='rueda'></i>  " + resultado + "  <i class='fas fa-cogs' id='rueda'></i>");
    } else {
      if (dato !== "") {
        $("#resultado1").html("<i class='fas fa-times'></i> No es un dato correcto, introduzca números del 0 al 9 y/o letras de la A a la F.<br>");
        $("#resultado1").css("color", "red");
        $("#resultado2").hide();
        $("#ventana").hide();
        tiempo();
      }
    }
  });
});

function tiempo() {
  setTimeout(function () {
    $("#resultado1").html("");
  }, 3000);
}