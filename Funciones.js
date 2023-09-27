//Función: sumaTres
var sumaTres = (x) => {
    return x + 3;
  }

  console.log(sumaTres(5));

  //Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
  }

  function otraFuncion(){
    return("El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: ") + 
    cuidadoConElConsoleLog("Juan")
  }