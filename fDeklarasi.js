//funciton expression & deklarasi (fleksibel)

//deklarasi (mudah untuk pemula)
//deklarasi 1 
// function tampilPesan (nama){
//     alert('halo' + nama);
// }
// tampilPesan('Marzuki');

// //deklarasi 2
// tampilPesan ('Marzuki');
// function tampilPesan (nama){
//     alert('halo'+nama);
// }

//expression (lebih powerfull, closure, argumen function lain, IIFE)
var tampilPesan = function (nama){
    alert('halo'+nama);
}
tampilPesan('Marzuki');
//harus definisi dulu baru bisa dipanggil, berbeda dengan deklarasi



