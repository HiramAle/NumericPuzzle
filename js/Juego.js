var username = document.getElementById("inputname").value;

function playgame() {
  if (username == "") {
    alert("Validar");
    return false;
  }

  document.getElementById("playername").innerHTML(username);
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function cambiarCasillas(casilla1, casilla2) {
  var casillaTemp = document.getElementById(casilla1).className;
  document.getElementById(casilla1).className = document.getElementById(
    casilla2
  ).className;
  document.getElementById(casilla2).className = casillaTemp;
  
}


function sepuedemover(idCasilla) {
  let casillaaux = document.getElementById(idCasilla).className;
  let salida=[];
  switch (casillaaux) {
    case "tile posicion1":
        salida=["tile posicion2","tile posicion4"];
      break;
    case "tile posicion2":
        salida=["tile posicion1","tile posicion3","tile posicion5"];
      break;
    case "tile posicion3":
        salida=["tile posicion2","tile posicion6"];
      break;
    case "tile posicion4":
        salida=["tile posicion1","tile posicion5","tile posicion7"];
      break;
    case "tile posicion5":
        salida=["tile posicion2","tile posicion4","tile posicion6","tile posicion8"];
      break;
    case "tile posicion6":
        salida=["tile posicion3","tile posicion5","tile posicion9"];
      break;
    case "tile posicion7":
        salida=["tile posicion4","tile posicion8"];
      break;
    case "tile posicion8":
        salida=["tile posicion5","tile posicion7","tile posicion9"];
      break;
    case "tile posicion9":
        salida=["tile posicion6","tile posicion8"];
      break;
    default:
        salida=[];
      break;
  }
  return salida;
}

function clickCasilla(idCasilla) {
    var casilla = document.getElementById("tile-" + idCasilla).id;
    var casilla2 = document.getElementById("tile-" + idCasilla).className;
    let clickCasillaaux;
    
    clickCasillaaux=sepuedemover('tile-w');
    

    for(let i=0;i<clickCasillaaux.length;i++){
    if (casilla2 == clickCasillaaux[i]) {
      cambiarCasillas("tile-w", casilla);
    }
    }
    console.log(clickCasillaaux);
    return;
  }
  