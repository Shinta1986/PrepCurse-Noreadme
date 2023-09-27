// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

var suma=0;

for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma);

suma = 0;

// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Juan');
}
console.log(arr);

while(suma < 3) {
    suma = suma + 1;
        console.log(suma);
}