//membuat object
// object literal

var mhs1 = {
    nama : "Jefry Kurniawan",
    npm : 5170311111,
    email : 'kopiireng1922@Gmail.com',
    jurusan : 'sistem informasi'
}

var mhs2 = {
    nama : "Esty Aprisona",
    npm : 5170311112,
    email : 'estyaprisona@gmail.com',
    jurusan : 'Teknik Sipil'
}

// function declaration
function buatObjectMahasiswa(nama, npm, email, jurusan) {
    var mhs = {};
    mhs.nama = nama ;
    mhs.npm = npm;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}
var mhs3 = buatObjectMahasiswa ('Siti Muyasaroh', 
    '51703111113', 'sitimuya@gmail.com','PGSD');

// constructor
//function untuk membuat object , function deklarasi dan fungci custructor yaitu huruf kapital di awal fungsi
function Mahasiswa(nama, npm, email, jurusan) {
    //var this = [];
    this.nama = nama;
    this.npm = npm;
    this.email = email;
    this.jurusan = jurusan; 
    //return this;
} 

var mhs4 = new Mahasiswa ('Inem', '5170311114', 'inem@gmail.com',
 'sastra indo'); //kalau gak pakai keyword new maka dikira memanggil function deklarasi


 //perbedaanya function deklarasi dan constructor yaitu di custructor  var this dan return  dibuatin js, di custructor harus ada new 
