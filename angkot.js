var jmlAngkot =  10;
var angkotBeroperasi = 6;

// for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
   
//     if(noAngkot <= 6 ){
//         console.log('Angkot No. '+noAngkot+' beroperasi dengan baik.');
//     }else if(noAngkot === 8){
//         console.log('Angkot No. '+noAngkot+' sedang lembur.');
//     }else {
//         console.log('Angkot No. '+noAngkot+' sedang tidak beroprasi');
//     }
// }

for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
   
    if(noAngkot <= 6 && noAngkot !== 5 ){
        console.log('Angkot No. '+noAngkot+' beroperasi dengan baik.'); // && != di if agar nilai true maka nilai bisa di proses turun, 
    }else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5 ){ 
        console.log('Angkot No. '+noAngkot+' sedang lembur.'); // || untuk menampilkan sedang lembur di no tertentu, salah satu true maka dikerjakan
    }else {
        console.log('Angkot No. '+noAngkot+' sedang tidak beroprasi');
    }
}