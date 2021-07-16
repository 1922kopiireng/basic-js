//akses varibel dalam program
//function scope


//global scope
//var a = 1;

// function tes(){
//     var  b = 2 //didalam funcion kita bisa ngambil variabel global
// }
// tes();
// console.log(b); //function scope, diluar tidak bisa akses variabel global jika tidak memanggil functionya


// var a = 1;
// function tes(){
//     var  b = 2;
//     console.log(a);
// }

// tes();




// var a = 1;
// function tes(){
//     //contoh name konflik
//     var  a = 2;
// }
// tes();
// console.log(a);  //hasilnya  1 bukan 2, karena scopenya berbeda

// "use strict";

// function tes(){
//     a = 2;  //hasilnya not defined karena tidak ada varibel a di global
// }
// tes();
// console.log(a);


var a = 1; //variabel global
function tes(a){
    console.log(a); //variabel lokal
}
tes(a); //variabel global
console.log(a); //variabel global



