// for (var i = 10; i >= 1; i --){
//     console.log(i);
// }

//rekursif
// function tampilAngka(n){
//     if (n === 0 ) return; // base case untuk berhenti
    
//     console.log(n);
//     return tampilAngka(n-1);
// }
// tampilAngka(10); //pemanggilan nilai tapi belum diberhentikan


// rekursif untuk elgan dan simple
function faktorial(n){
    if (n === 0) return 1;
    return n * faktorial(n-1);
}

console.log(5);

//fungsi rekursif : gantikan looping, ribonacci, pencarian dan penelusuran lust data