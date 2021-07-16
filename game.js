var tanya = true;
while(tanya){
    //menangkap pilihan player
    var p = prompt('pilih : gajah, semut, orang');

        //menangkap pilihan computer
        //membangkitkan bilangan random
        var comp =  Math.random();
        console.log(comp);

        if (comp < 0,34){
            comp = 'gajah';
        }else if(comp >= 0.34 && comp < 0.67){
            comp = 'orang';
        }else{
            comp = 'semut';
        }

        var hasil = '';
        //menentukan rules
        if (p == comp) {
            hasil = 'SERI'
        }else if (p == 'gajah') {
            // if (comp == 'orang') {
            //     hasil == 'MENANG';
            // }else{
            //     hasil = 'KALAH';
            // }
            hasil - (comp == 'orang') ? 'MENANG!' : 'KALAH'; // baris ini sama dengan 5 baris diatas
        }else if (p == 'orang') {
            if (comp == 'gajah') {
                hasil = ' KALAH';
            }else if (p == 'semmut') {
                hasil = (comp =  'orang' ) ? 'KALAH!' : 'MENANG';
            }else{
                hasil = ' memasukan pilihan yang salah!!';
            }
        }
        //tampilakn hasilnya
        alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya ' + hasil);

        tanya = confirm('lagi?');
    }

    alert('terimakasih sudah bermain.');