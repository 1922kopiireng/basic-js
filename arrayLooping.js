//looping array

//6.foreach //tidak mengembalikan nilai array
// var angka = [1,2,3,4,5,6,7,8];

// var nama = ["Marzuki", "Kopi", "Juki", "Inem", "Jefry"];

// for ( var i = 0 ; i < angka.length; i++) {
//     console.log(angka[i]);
    
// }

//di kombo sama function expression enak
// angka.forEach(function (e) {
//     console.log(e);
// });

// nama.forEach(function (e, i) {
//     console.log('Mahasiswa ke - ' + (i+1) + 
//     ' adalah : ' + e);
    
// });

//7. map //dpt mengembalikan nilai array
// var angka = [1,2,3,4,5,6,7,8];
// // angka.forEach(function name(e) {
// //     console.log(e);
// // });

// var angka2  = angka.map(function (e) {
//     return e * 2; //elemen dalam array dikalikan 2, map mengembalikan nilai array
// })

// console.log(angka2.join(' - '));

// 8. Sort = untuk menyusun data di array
// var angka = [1,2,5,3,6,8,4];
// console.log(angka.join(' - ')); //belum diurutkan
// angka.sort();
// console.log(angka.join(' - ')); //sudah diurutkan, tidak berlaku untuk nilai puluhan 

// var angka = [1,2,10,5,20,3,6,8,4];
// angka.sort(function (a,b) {
//     return a-b;
// })
// console.log(angka.join(' - ')); //hasilnya 1 - 2 - 3 - 4 - 5 - 6 - 8 - 10 - 20

//untuk mecari elemen pada array
//9. filter  mencari nilai pada array & mengembalikan suatu nilai
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.filter(function(x) {
//     // return x == 5;
//     return x > 5; //mencari nilai > 5 maka hasilnya '[ 6, 8 ]'
//join untuk menggabungkan array
// })
// console.log(angka2);

//10 find untuk menghasilkan 1 nilai saja yg pertama ditemukan bukan array
var angka = [1,2,5,3,6,8,4];
var angka2 = angka.find(function(x) {
   return x > 5;
});
console.log(angka2); //hasilnya '6'