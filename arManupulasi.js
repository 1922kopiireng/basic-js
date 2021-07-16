//manipulasi array

//menambahkan isi array

// var arr = ["a", 1, true];
// console.log(arr[1]); //yg keluar nilai index 1


// var arr = [];
// arr[0] = "Marzuki";
// arr[1] = "kopi";
// arr[2] = "juki";
// console.log(arr); //hati2 salah no index maka bolong datanya


//menghapus isi array
// var arr = ["Marzuki", "Kopi", "Juki"];
// arr[1] = undefined; //cara hapus manual
// console.log(arr); //index 1 datanya hilang


//menampilkan isi array
//var arr = ["Marzuki", "Kopi", "Juki"]; //data belum ditambah
// var arr = ["Marzuki", "Kopi", "Juki", "Jerry"]; //data sudah ditambah

// for( var i = 0; i < 3; i++) //data jika ditambah tidak terbaca karena limit 3
// for( var i = 0; i < arr.length; i++) //length yaitu method js untuk membaca isi arrray
// { 
    // // console.log(arr[i]); //data array muncul semua 
    // console.log('Mahasiswa ke - ' +i + ' ' + arr[i]); //data muncul namun dari 0 bukan dr 1
    // console.log('Mahasiswa ke - ' +(i+1) + ' ' + arr[i]); //data muncul dari 1, namuun jika data array ditambah tidak terbaca
//     console.log('Mahasiswa ke - ' +(i+1) + ' ' + arr[i]); //data sudah mucul pas ditambahkan karena ada length
// }

//method array pada js 
//length mengetahui jml pada array
//join method untuk gabungkan seluruh isi array dan mengubah string

//1. join 
// var arr = ["Marzuki", "Kopi", "Juki"];
// console.log(arr.join()); //menampilkan secara rapi "Marzuki,Kopi,Juki" jika ingin membuang " , " maka
// console.log(arr.join('-')); // hasilnya "Marzuki-Kopi-Juki"

//2. push & pop
// arr.push('Jerry'); //push untuk memasukan di akhir array "Marzuki - Kopi - Juki - Jerry" bisa menambahkan lebih dari 1 "arr.push('Jerry', "Esty");"
// console.log(arr.join (' - '));

// arr.pop('Juki'); // pop untuk menghilangkan elemen terakhir di array, hasilnya "Marzuki - Kopi" tapi hapusnya hanya 1 tidak bisa banyak,
//pop menghilangkan datanya, bukan undefined
// console.log(arr.join (' - '));

// var arr = ["Marzuki", "Kopi", "Juki"];

// //3. unshift & shift
// arr.unshift('Esty'); //menambahkan diawal array
// arr.shift(); //menghilangkan datanya, bukan undefined
// console.log(arr.join (' - '));

//4.splice untuk menambahkan data di array ditengah yg lbih dri satu
//strukture :
//splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ....)

// arr.splice(2, 0, 'Jefry','Inem' );
// console.log(arr.join(' - '));

//5. slice menfiris data pada array baru tanpa mengahpus array lama 
//slice(awal, akhir);
var arr = ["Marzuki", "Kopi", "Juki", "Inem", "Jefry"];
var arr2 = arr.slice(1,3);
console.log(arr2.join(' - ')); //hanya menampilkan 'kopi - juki'

