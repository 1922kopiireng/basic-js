// var jmlangkot = 10;
// var angkotBeroprasi = 6;

// for( var noAngkot = 1; noAngkot <= jmlangkot; noAngkot++ ){
//     if(noAngkot <= 6){
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.' ); 
//     }else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.');
//     }
// }

// var angka = prompt('Masukan angka : ' );
// if (angka% 2 == 0 ){
//     alert(angka + ' adalah bilangan Genap');
// }else {
//     alert(angka + ' adalah bilangan Ganjil');
// }

var angka = prompt('Masukan angka : ' );
if (angka% 2 == 0 ){
    alert(angka + ' adalah bilangan Genap');
}else if (angka % 2 == 1){
    alert(angka + ' adalah bilangan Ganjil');
}

else {
    alert(' yang dimasukan bukan angka ');
}