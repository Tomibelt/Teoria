// Los objetos son estructuras de datos igual q los arrays, pero la principal diferencia es q los objetos tiene un sintaxis diferente
// estos se componen de datos formados por una clave y un valor "key: value"
// solo puede haber una claver con un nombre especifico, pero si puede haber mas de un valor con el mismo nombre
// Los objetos pueden almacenar string, numeros, booleanos, arreglos e incluso, otro objeto.

// ESTRUCTURA DE UN OBJETO

// var deportes = { conBalon: ['Futbol', 'Basketball', 'Golf'],
//                  sinBalon: ['Boxeo', 'Surf', 'Trekking'], }

//  var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };

// La diferencia entre dot-notation y bracket-notation es q la notacion por corchetes permite a una funcion utilizar una variable externa
// como valor de una propiedad


// Metodo FOR IN: permite recorrer las propiedades de un objeto junto con sus valores.
// permite iterar sobre un objeto utilizando dos variables. Una representa el objeto que recorremos, y la otra la propiedad.
// Utilizacon dot-notation y bracket-notation
// SINTAXIS: 
// for (let prop in mundo) {  console.log('Esta es la propiedad: ', prop);
//                            console.log('Este es el valor: ', mundo[prop]);}

// Lista de metodos

// this = palabra reservada que sirve para indicar el contexto de una propiedad
// object.hasOwnProperty(); = devuelve un valor booleano, sirve para verificar si existe una propiedad dentro de un objeto
// object.keys(); = crea un arreglo con las propiedades de un objeto
// object.values(); = crea un arreglo con los valores de un objeto
// object.entrie(); = crea un arreglo por cada clave y cada valor de un objeto


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objeto = {};
   let letras = string.split("");
   for(let i = 0; i < letras.length; i++){
      if(objeto[i] == undefined){
         objeto[i] = 1
      } else {
         objeto[i] += 1;
      }
   } return objeto;
}

console.log(numberOfCharacters('adsjfdsfsfjsdjfhacabcsbajda'));