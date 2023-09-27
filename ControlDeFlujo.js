function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');''
    }
  };

  //Prueba 1
  viajar('Brasil');
  //Prueba 2
  viajar('Argentina');
  //Prueba 3s
  viajar('Uruguay');

  function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    else
    console.log( false );
  }
  
  puedeManejar(22);