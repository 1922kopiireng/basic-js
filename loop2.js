var s = '';
// for (var i = 0; i<=10; i++){
//     // s+= '*****'; //biar gak simple
//     for( var j = 0; j < 5; j++){
//          s+= '*';
//     }
//     s+= '\n'; //biar 
// }

// for (var i = 0; i<=5; i++){
//     for( var j = 0; j <= i; j++){
//          s+= '*'; //<= agar nilai true jadi tidak langsung di perintah selanjutnya
//     }
//     s+= '\n'; //biar 
// }

for (var i = 10; i>0; i--){
    for( var j = 0; j < i; j++){
         s+= '*'; 
    }
    s+= '\n'; 
}
console.log(s);