// var penumpang = ['Jefry', undefined, 'Kopi'];
var penumpang = []; //setelah ada hapus
var tambahPenumpang = function (namaPenumpang, penumpang) {
    //jika angkot kosong
    if (penumpang.length == 0) {
        //tambah penumpang diawal array
        penumpang.push(namaPenumpang);
        //kemnalikan isi array & keluar dari function
        return penumpang; //sekaligus keluar ke function
    }else{
        //telurusuri seluruh kursi dari awal
          for ( var i = 0; i < penumpang.length; i++) {   
            //jika ada kursi kosong
            if (penumpang [i] == undefined) {
                //tambah penumpang di kursi kosong
                penumpang[i] = namaPenumpang;
                //kembalikan isi array & keluar dari funciton
                return penumpang;
            }
            //jika sudah ada nama yang sama
            else if (penumpang [i] == namaPenumpang) {
                //tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' sudah ada dalam angkot');
                //kembalikan isi array & keluar dari function
                return penumpang;
            }
            //jika seluruh kursi terisi
            else if (i == penumpang.length - 1){
                //tambah penumpang diakhir array
                penumpang.push(namaPenumpang);
                //kembalikan isi array & keluar dari funciton
                return penumpang;
            }
        }
    }

    var hapusPenumpang = function (namaPenumpang, penumpang) {
        if (penumpang.length == 0) {
            console.log('Angkot masih kosong.');
            // return penumpang;
        }else {
            for(var i = 0; i < penumpang.length; i ++) {
                if (penumpang [i] == namaPenumpang) {
                    penumpang[i] = undefined;
                    // return penumpang;
                }else if(i == penumpang.length -1){
                    console.log(namaPenumpang + 'tidak ada didalam angkot.');
                    // return penumpang;
                }
            }
        }
    }
    return penumpang;

}
