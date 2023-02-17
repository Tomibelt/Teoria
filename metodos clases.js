// las clases son una plantilla que nos permite crear un objeto de informacion para representar distintas entidades, dentor del codigo
// se las puede crear mediante una funcion constructora o mediante una exprecion de clase
// pueden tener propiedades y metodos, para acceder a las propiedades se usa la palabra THIS
// crear una instancia hace refencia a usar las propiedades de una clase ya creada para crear una nueva variable.

// FUNCIÓN CONSTRUCTORA:                                     

// function Auto(puertas, color, marca, año, ruedas) {
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;}



// EXPRESIÓN DE CLASE

// class Auto {
//     constructor(puertas, color, marca, año, ruedas) {
//        this.puertas = puertas;
//        this.color = color;
//        this.marca = marca;
//        this.año = año;
//        this.ruedas = ruedas}}


// PROTOTIPOS

// mecanismo por el cual todos los objetos dentro de JS puede extender propiedades y metodos
// POR EJEMPLO: un array original le extiende el metodo ".length" a todos los arrays que nosotros creemos.
// esto se denomina herencia. Propiedades y metodos q nosotros podemos "heredar" a las clases q creemos.
 

// EJEMPLO: 
// Array.prototype.mayorQueTres = function () {
//     var arregloModificado = [];
//     for (var i = 0; i < this.length; i++) {
//            if (this[ i ] > 3) {
//                   arregloModificado.push(false);} 
//            else {arregloModificado.push(this[ i ]);}}
//     return arregloModificado;};

// class LatinoAmerica {
// constructor() { this.paises = [ ] }}
// LatinoAmerica.prototype.agregarPais = function (pais)
//    	{this.paises.push(pais);};


// EXTENCION DE CLASES

// Extender clases nos permite tener una clase general que le heredare propiedades y metodos a otras clases. 



// PALABRAS RESERVADAS PARA LAS CLASES
// new = permite dar propiedades a una clase ya creada
// extends = permite heredar propiedades de una clase ya creada a una nueva clase
// super = esta debe usarse junto con EXTENDS para indicar las propiedades que deben ser heredadas, evitando usar la palabra THIS



// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludar() {
//         console.log('Hola, mi nombre es ' + this.nombre + '. Tengo ' + this.edad);
//     }
// }

// var tomas = new Persona('tomas', 22);
// tomas.saludar();
