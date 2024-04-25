// Benzin İstastonu

/*  
   1- Dizel  : 24.53
   2- Benzin : 22.25
   3- LPG    : 11.1


   Gelen müşterilerden alacağımız bilgiler
   1- Yakıt Tipi
   2- Yüklenecek Yakıt litresi
 
*/




let dizel = 24.53, benzin = 22.25, lpg = 11.1;

const yenisatir = "\r\n";

const yakitMetni = 
    "1- Dizel" + yenisatir
    + "2- Benzin" + yenisatir
    + "3- LPG" + yenisatir
    + " Yakıt Türünüzü Seçiniz "

let yakitTipi = prompt(yakitMetni);
if(yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3"){
    
}
let yakitLitresi = Number(prompt("Yakıt Litresini Giriniz"));
let bakiye = Number(prompt("Bakiyenizi Giriniz:"));

if (yakitTipi == "1") {
    //Dizel
    let odenecekTutar = dizel * yakitLitresi;
    if (odenecekTutar < bakiye) {
        //bakiye yeterli
        bakiye = bakiye-odenecekTutar
        alert("Yakıt alma işlemi başarılı" + yenisatir
            + "Kalan bakiye: " + bakiye);
    } else {
        //bakiye yetersiz
        alert("Bakiyeniz yeterli değildir" + yenisatir
            + "Ödenecek tutar : " + odenecekTutar + yenisatir
            + "Bakiye :" + bakiye + yenisatir
            + "Eksik Tutar: " + (odenecekTutar - bakiye));
    }
} else if (yakitTipi == "2") {
    //Benzin
    let odenecekTutar = benzin * yakitLitresi;
    if (odenecekTutar < bakiye) {
        //bakiye yeterli
        bakiye = bakiye-odenecekTutar
        alert("Yakıt alma işlemi başarılı" + yenisatir
            + "Kalan bakiye: " + bakiye);
    } else {
        //bakiye yetersiz
        alert("Bakiyeniz yeterli değildir" + yenisatir
            + "Ödenecek tutar : " + odenecekTutar + yenisatir
            + "Bakiye :" + bakiye + yenisatir
            + "Eksik Tutar: " + (odenecekTutar - bakiye));
    }
} else if (yakitTipi == "3") {
    //LPG
    let odenecekTutar = lpg * yakitLitresi;
    if (odenecekTutar < bakiye) {
        //bakiye yeterli
        bakiye = bakiye-odenecekTutar
        alert("Yakıt alma işlemi başarılı" + yenisatir
            + "Kalan bakiye: " + bakiye);
    } else {
        //bakiye yetersiz
        alert("Bakiyeniz yeterli değildir" + yenisatir
            + "Ödenecek tutar : " + odenecekTutar + yenisatir
            + "Bakiye :" + bakiye + yenisatir
            + "Eksik Tutar: " + (odenecekTutar - bakiye));
    }
} else {
    alert("Lütfen geçerli bir yakıt türü seçiniz!");
}
