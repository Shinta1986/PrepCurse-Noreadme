
//Operaciones de comparación
console.log (4 < 7);    //True
console.log (4 < 1 );   //false
console.log (4 > 4);    //false
console.log (4 == 7);   //false

//Igualdad vs igualdad estricta 
console.log (3 == 3);       //True
console.log (3 === 3);      //True
console.log (3 == "3");     //True
console.log (3 === "3");    //False
console.log (7 == "7");     //True
console.log (7 === "7");    //False

//Asignación y asociatividad
var a = 1;
var b = 2;
var c = a = b;
console.log (c);    //2