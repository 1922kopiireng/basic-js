//kalau di php namanya assosiasi array 

// var namaMhs = 'Jefry Kurniawan';
// var umurMhs = 22;
// var lulus = false;
// var IPSemester = [2.90, 3.10, 3.25, 2.88, 3.04];
// function IPKumulatif(IPSemester) {
//     var total = 0;
//     for (var i = 0; i <IPSemester.length; i++){
//         total += IPSemester[i];
//     }
//     return toptal/IPSemester.length;
// };


// var mahasiswa = ['Jefry Kurniawan', true, [2.90, 3.10, 3.25, 2.88, 3.04]];
// function IPKumulatif(IPSemester) { 
// var total = 0;
//     for (var i = 0; i <IPSemester.length; i++){
//     total += IPSemester[i];
//     }
//     return total/IPSemester.length;
// };
// IPKumulatif(mahasiswa[2]);



//object
// var mahasiswa = {
//     nama : 'Jefry Kurniawan',
//     IPSemester : [2.90, 3.10, 3.25, 2.88, 3.04],
//     IPKumulatif : function () //bjectnya, asosiasi array
//     {
//         var total = 0;
//         var ips = this.IPSemester;
//         for(   var i = 0; i<ips.length; i++){
//             total += ips[i];
//         }
//         return total/ips.length;
//     }
// }

// mahasiswa.IPKumulatif();//memanggil object dan memanggil fungsi didalam array

// var orang = {
//     nama : 'kopiireng',
//     umur : 23,
//     pekerjaan : 'pengangguran',
//     sapa : function () {
//         return 'alohhh, nama saya' + this.nama +
//         ' usia saya ' + this.umur + ' tahun, dan saya adalah seorang '
//         + this.pekerjaan;
//     }
// }

//membuat object
var mhs = {
    nama : "Jefry Kurniawan",
    umur : 23,
    ips : [],
    alamat : {
        jalan : "Gonggang - Karangudi",
        kota : "Magetan",
        provinsi : "Jawa Timur"
    }
}; //nama, umur, ips, alamat = properti dalam js, cara memanggil nya array.properti/array[properti] atau bisa mhs.alamat.kota/mhs["alamat"]["kota"] di konsole 
