// var angka = parseInt (prompt('masukan angka : ')); //input pakai promp inputan jadi string, 
// var angka =  prompt('masukan angka : ');

// //untuk switch
// switch(angka){
//     case '1' :
//         alert('anda memasukan angka 1');
//         break;
//     case '2':
//          alert('anda memasukan angka 2');
//          break;
//     case '3':
//         alert('anda memasukan angka 3');
//         break;
//     default :
//         alert('angka yang anda masukan salah');
//         break;
// }



// untuk else if
// if (angka === 1){
//     alert('anda memasukan angka 1'); // == opertor perbandingan, === operator identitas
// }else if (angka === 2){
//     alert('anda memasukan angka 2');
// }else if(angka === 3){
//     alert('anda memasukan angka 3');
// }
// else{
//     alert('angka yang anda masukan salah!');
// }



// var item = prompt('masukan nama makanan / minuman  \n (cth: nasi, daging, susu, hamburger, softdrink)');

// switch(item ){
//     case 'nasi' :
//         alert('makanan / minuman Sehat!');
//         break;
//     case '' :
//         alert('makanan / minuman Sehat!');
//         break;
//     case 'daging' :
//         alert('makanan / minuman Sehat!');
//         break;
//     case 'susu' :
//         alert('makanan / minuman Sehat!');
//         break;
//     case 'hamburger' :
//         alert('makanan / minuman Tidak Sehat!');
//         break;
//     case 'softdrink' :
//         alert('makanan / minuman Tidak Sehat!');
//         break;
// default :
// alert('anda memasukan nama makanan / minuman yang salah!');
// break;
// }

var item = prompt('masukan nama makanan / minuman  \n (cth: nasi, daging, susu, hamburger, softdrink)');
//prompt perhatikan type datanya 

switch(item ){
    case 'nasi' : // hanya masukan value pada case
    case 'daging' :
    case 'susu' :
        alert('makanan / minuman Sehat!');
        break;
    case 'hamburger' :
    case 'softdrink' :
        alert('makanan / minuman Tidak Sehat!');
        break;
    default :
    alert('anda memasukan nama makanan / minuman yang salah!')
    break;
}