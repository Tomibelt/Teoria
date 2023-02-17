// Los callback son un proceso en el cual una funcion recibe por parametro otra funcion, y la ejecuta en su interior-
// Aseguran q una funcion se va a ejecutar despues de q se termine de realizar una tarea
// Cuando decimos 'definir una funcion' nos referimos a la funcion sin ser invocada
// a la hora de hacer un callback este deve ser de la definicion de una funcion, y no de la funcion con sus parametros


// EJEMPLO DE CALLBACK ENTRE FUNCIONES

// var usuario = function () {return 'tomas';}
// var saludo = function () {return 'hola';}
// var saludar = function (fn1, fn2) {return fn1() + ' ' + fn2();};
// var resultado = saludar(saludo, usuario);
// console.log(resultado);


// SEGUNDO EJEMPLO DE UN CALLBACK

// var frase = function(comida){ return "Hoy quiero comer " + comida;}
// var hablar = function(comida, callback) {return callback(comida);}
// var fraseFinal = hablar('pizza', frase);
// console.log(fraseFinal);