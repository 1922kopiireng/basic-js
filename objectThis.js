//this ,this=windows object global
// console.log(this);
// console.log(window == this);

// var a = 10;
// console.log(this.a);
// console.log(window.a); //hasilnya sama
//discope global this = window

//cara 1 function deklarasi
// function halo() {
//     console.log(this);
//       console.log('halo');
//     }
//     halo();
//     window.halo(); //sama hasilnya
//     this.halo(); //hasilnya sama
    //this mengembalikan object global

//cara 2 - object literal
// var obj = {};
// var obj = {a : 10, nama : 'Jefry'};
// obj.halo = function () {
//     console.log(this);
//     console.log('halo');
//  }
//  obj.halo(); 
 //this mengembalikan object yg bersangkutan

//cara 3  - constructor 
function Halo() {
    console.log(this);
    console.log('halo');
 }
//  new Halo();
var obj1 = new Halo();
var obj2 = new Halo();

//this mengembalikan objt yg baru dibuat



















//membuat object

//cara 1  - function deklarasi
// function halo() {
//     console.log('halo');
// }
// halo();

//cara 2 - object literal
// var obj = {};
// obj.halo = function () {
//     console.log('halo');
// }
// obj.halo();

//cara 3  - constructor 
// function Halo() {
//     console.log('halo');
// }
// new Halo();
