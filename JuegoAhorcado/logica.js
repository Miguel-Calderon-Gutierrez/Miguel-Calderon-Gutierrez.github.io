var palabras = ["HTML", "CSS", "REACT", "PROGRAMAR", "MIGUEL", "JAVA","FERNANDA"];
var letrasBien = [];
var letrasMal = [];
var cont = 1;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function pintarInicio(posicion) {
  
  var divLetras = document.getElementById("contenedorPalabras");
  var cadena = palabras[posicion];
  
  for (var i = 0; i < cadena.length; i++) {
    divLetras.insertAdjacentHTML("beforeend", '<p id="letra"><br>-</p>');
  }
}

function validarTecla(e) {
  var codigo = e.which;
  if (codigo > 64 && codigo < 91) {
    if (letrasBien.indexOf(e.key) == -1 && letrasMal.indexOf(e.key) == -1) {

      var div = document.getElementById("contenedorPalabras");
      var cadena = palabras[numero];
      var letra = e.key.toString().toUpperCase();
      if (cadena.includes(letra) ){
           
        letrasBien.push(letra);
        swal({
          title: "Letra valida!",
          text: "adivinaste una letra!",
          icon: "success",
        });
         
        for (var i = 0; i <= cadena.length; i++) {
          eliminarPrimero();
        }
        for (var i = 0; i < cadena.length; i++) {
          var letraValida =  (letrasBien.indexOf(cadena[i])>-1)? cadena[i] : " ";
          div.innerHTML+='<p id="letra">'
          +letraValida+
          '<br>-</p>';
        }

      }else{
        swal({
          title: "Letra no valida!",
          text: "no adivinaste una letra!",
          icon: "error",
        });        
        cambiarImagenJS();
      }
    } else {
     alert("f")
    }
  }
}

function eliminarPrimero()
{
  var puntero=document.getElementById("contenedorPalabras");
  if (puntero.childNodes.length>0) 
    puntero.removeChild(puntero.childNodes[0]);  
}

function cambiarImagenJS(){
  if (cont<6) {
    cont++;
  }else{
    cont=1;
  }
  document.getElementById("imagen").src="imagenes/img"+cont+".png";
}

var numero = getRandomInt(palabras.length);
pintarInicio(numero);
addEventListener("keyup", validarTecla);


