// Los arrays son un tipo de dato que nos permite almacenar informacion y permiten una gran utilidad a la hora de gestionar dichos datos. 
// Por un lado tenemos los elementos q son los datos en si, y por otra lado tenemos los indices q nos indican el lugar donde se almacena dicho dato
// cabe aclarar q estos arrancan desde el indice 0, y no desde el indice 1.
// Los arrays tienen diversos METODOS, estos metodos sirven para crear o generar diversas funcionalidades en los arreglos.

// lista:

// array.push();= inserta un elemento nuevo al final del arreglo
// array.unshift(); = inserta un elemento nuevo al principio del arreglo
// array.pop(); = elimina el ultimo elemento del arreglo
// array.shift(); = elimina el primer elemento del arreglo
// array.length(); = muestra la longitud del arreglo
// array.join(); = devuelve una cadena concatenando todos los elementos con el string asignado (por ejemplo: | , -)
// array.reverse(); = invierte los valores dentro del arreglo
// array.sort(); = ordena los valores dentro del arreglo de manera creciente o alfabetica
// array.toString(); = devuelte todos los valores dentro del arreglo como un solo sting. [1, 2, a, 3, 'a'] = ["1,2,a,3,a"]
// array.split(); = separa un string en un arreglo en el caracter indicado. Ejemplo = split('') "tomas" / [ 't', 'o', 'm', 'a', 's' ]
// array.every(); = devuelve un valor booleano, determina si todos los elementos en el array satisfacen una condición. Ejemplo = que todos los elementos sean menores a 50
// array.forEach(): = busca y muestra en consola algun elemento q cumpla con determinada caracterisca, no crea un nuevo arreglo



// EJEMPLO DE "array.map();"
// array.map(); = crea un nuevo arreglo con la modificacion asignada
// function incrementarPorUno(array) {
// cons.log(array.map((num) => num + 1) = aumenta el valor de todos los numeros en +1);



// EJEMPLO DE "array.reduce();"
// array.reduce(); = acumula todos los valores dentro del arreglo en unico valor
// var sumados = array.reduce((a, b) => a + b, 0);
// cons.log(sumados;);



// EJEMPLO DE "array.filter();"
// array.filter(); = crea un nuevo arreglo con los elementos que cumplan con una condicion especificada
// function cuentoElementos(array) { 
// var mayores = array.filter((e) => e > 18);
// {cons.log(mayores.length}});



// EJEMPLO DE "array.find();"
// array.find(); = devuelve el primer elemento del arreglo q cumple con la condicion asignada
// array.findLast(); = devuelve el ultimo elemento del arreglo q cumple con la condicion asignada
// function numeroMayor(array) { 
// var encontrado = array.find((e) => (e > 10));
// {cons.log(encontrado}});



// EJEMPLO DE "array.includes();"
// array.includes(); = devuelve un valor booleano, determina si el elemento especificado existe dentro del arreglo
// array = [1, 2, 3, 4];
// function existencia(array) {
// cons.log(array.includes(2);  (devuelve: true););
// cons.log(array.includes(17);  (devuelve: false););



// EJEMPLO DE "array.value();"
// array.value(); = muestra el arreglo como lista y no como arreglo
// array = ['a', 'b', 'c'];
// let interador = array.values();
// for (let i of interador) 
// {console.log(i);}




// BUCLES


// BUCLE WHILE
// let boom = [];
// while(boom.length < 5)
// {boom.push('BOOM')}
// console.log(boom);



// BUCLE FOR
// function encontrarLetraP(string) {
//     var letra = string.split('');

//     for(let i = 0; i < letra.length; i++){
//         if(letra[i] === 'p'){
//             console.log('Contiene P');
//         } if (letra[i]!=='p') { 
//             console.log('No contiene a P');
//         }
//     }
//     } 

// encontrarLetraP('paradoja');
// encontrarLetraP('dormir');

// Dentro del bucle FOR existen FOR OF que recorre el valor de los elementos
// y FOR IN que recorre el indice de los elementos, tambien sirve para los objetos
