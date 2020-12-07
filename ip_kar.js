//mulai dgn membuat fungsi hitungip()
function hitungip() {

//persiapkan empat input variable: absen, tugas, uts dan uas 
    var absen = parseFloat(document.fform.iabsen.value);
    var tugas = parseFloat(document.fform.itugas.value);
    var uacw  = parseFloat(document.fform.iuacw.value);

//persiapkan juga variable untuk output pengolahan ip dan keterangannya
    var ip    =" ";
    var ket   =" ";

//buat variable untuk wadah atas penghitungan ke-4 input dan untuk nilai IP/nilai akhir-->na
//var na2 menggunakan toFixed(2), agar hasil akhir hanya menggunakan 2 desimal saja
//untuk input absen, kita harus menghitung berapa % total kehadiran mahasiswa terlebih dahulu
//baru kemudian 10%
    var nabsen     = ((absen/10)*20);
    var ntugas     = (0.10*tugas);
    var nuacw      = (0.70*uacw);
    var na         = nabsen + ntugas + nuacw;
    var na2        = na.toFixed(2);

//buat fungsi logika untuk menentukan batas bawah dan batas atas nilai
//kemudian, hasilnya diisikan pada variable ip dan ket
     if (na2 > 100)
        {ip ="X"; ket="Angka Overdosis!";}
    else if ((na2 >= 80) && (na2 <=100))
        {ip ="A"; ket="Lulus dengan Sangat Baik";}
    else if ((na2 >= 70) && (na2 <=79))
        {ip ="B"; ket="Lulus dengan Baik";}
    else if ((na2 >= 60) && (na2 <=69))
        {ip ="C"; ket="Lulus dengan Cukup";}
    else if ((na2 >= 50) && (na2 <=59))
        {ip ="D"; ket="Lulus dengan Kurang";}
    else
        {ip ="E"; ket="Tidak Lulus";}

//proses akhir adalah menerapkan hasil pengolahan JS pada sub element form dalam HTML
//yakni, element input dgn name iabsen, itugas, ouacw, oip dan oket.
document.fform.iabsen.value= nabsen;
document.fform.itugas.value= ntugas;
document.fform.iuacw.value  = nuacw;
document.fform.oip.value   = ip + "  " + "(" +na2+ ")";
document.fform.oket.value  = ket;

//akhir kurung kurawal function
}
