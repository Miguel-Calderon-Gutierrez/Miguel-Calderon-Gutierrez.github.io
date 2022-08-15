function encriptar() {
  //se agrego la parte de la vista
  var entrada = document.getElementById("ingreso");
  var txtentrada = entrada.value;

  if (!txtentrada == "") {
    var imagen = (document.getElementById("pantallainicio").style.display =
      "none");
    var pantalla2 = (document.getElementById("salida").style.display =
      "inline-block");
    document.getElementById("salida").scrollIntoView(); 
    entrada.value = "";
    var array = txtentrada.split("");
    var nueva_cadena = "";

    for (let index = 0; index < array.length; index++) {
      switch (array[index]) {
        case "a":
          array[index] = "ai";
          break;
        case "e":
          array[index] = "enter";
          break;
        case "i":
          array[index] = "imes";
          break;
        case "o":
          array[index] = "ober";
          break;
        case "u":
          array[index] = "ufat";
          break;
        default:
          break;
      }
      nueva_cadena += array[index];
    }

    var salida = document.getElementById("salida");
    salida.value = nueva_cadena;
  } else {
    alert("No se ha ingresado nada");
  }
}

function desencriptar() {
  var imagen = (document.getElementById("pantallainicio").style.display =
    "none");
  var pantalla2 = (document.getElementById("salida").style.display =
    "inline-block");
  var entrada = document.getElementById("ingreso");
  var txtentrada = entrada.value;

  if (!txtentrada == "") {
    entrada.value = "";
    document.getElementById("salida").scrollIntoView(); 
    txtentrada = txtentrada.replaceAll("ai", "a");
    txtentrada = txtentrada.replaceAll("enter", "e");
    txtentrada = txtentrada.replaceAll("imes", "i");
    txtentrada = txtentrada.replaceAll("ober", "o");
    txtentrada = txtentrada.replaceAll("ufat", "u");

    var salida = document.getElementById("salida");
    salida.value = txtentrada;
  } else {
    alert("No se ha ingresado nada");
  }
}

function copiar() {
  var salida = document.getElementById("salida");
  if (!(salida.value == "")) {
    alert("Copiado");
    salida.select();
    document.execCommand("copy");
    var imagen = (document.getElementById("pantallainicio").style.display =
      "inline-block");
    var pantalla2 = (document.getElementById("salida").style.display = "none");
    document.getElementById("ingreso").scrollIntoView(); 
  }
  salida.value = "";
}
