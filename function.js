//sebuah sub program didalam program yg dapat dipanggil 

//function ada dr js (alert, confirm, promt) sama bikin sendiri 

// var nama = "Jefry Kurniawan";
// console.log(nama.charAt(5)); //memanggsil

// var bil = Math.random();
// console.log(bil); //memanggil nilai random

//user defined function
//struktur : 'function ' parameter/argument bisa bih dari 1 da dipisahkan dgn ',' dan dibungkus '{}' bisa return dan tidak

// function jumlahDuaBilangan(a,b){
//     var total;
//     total = a+b;
//     return total;
// } //fungction deklarasi

// function jumlahDuaBilangan = function (a,b){
//     var total;
//     total = a+b;
//     return;
// } //function  expression

// alert(jumlahDuaBilangan(1,2));
// alert(jumlahDuaBilangan(25,30));
// alert(jumlahDuaBilangan(1500,17.5));

//function yang baik menjalankan 1 hal

// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

// console.log(total);

// function jumlahVolumeDuaKubus(a,b){
//     var total, volumeA, volumeB;

//     volumeA = a * a * a;
//     volumeB = b * b * b;
//     total = volumeA + volumeB;
//     return total;
// }

// // console.log(jumlahVolumeDuaKubus(8, 3)); //untuk tampilan di konsole
// alert(jumlahVolumeDuaKubus(10, 15)); //untu pop up

function jumlahVolumeDuaKubus(a,b){
    return a * a * a + b * b * b;  
}
alert(jumlahVolumeDuaKubus(8, 3));