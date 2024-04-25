/*

1-Bakiye görüntüleme
2-Para Çekme
3-Para Yatırma
4-Çıkış


ATM Uygulaması

*/

let yenisatir = "\r\n";
let bakiye = 1000;


let metin = "1-Bakiye görüntüleme" + yenisatir
    + "2-Para Çekme" + yenisatir
    + "3-Para Yatırma" + yenisatir
    + "4-Çıkış" + yenisatir
    + "Lütfen bir değer seçiniz";

let secim = prompt(metin);

switch (secim) {
    case "1":
        alert("Bakiyeniz : " + bakiye);
        break;
    case "2":
        let cekilecektutar = Number(prompt("Çekmek istediğiniz tutarı giriniz : "));
        if (cekilecektutar < bakiye) {
            //başarılıdır
            bakiye = bakiye - cekilecektutar;
            alert("Kalan bakiye : " + bakiye);;
        } else {
            alert("Bakiyenizen fazla para çekemzsiniz!" + yenisatir
                + "Bakiyeniz : " + bakiye + " " + " Çekilecek tutar : " + cekilecektutar);
        }
        break;

    case "3":
        let yatirilacakTutar = Number(prompt("Yatırılacak tutarı giriniz : "));
        bakiye = bakiye + yatirilacakTutar;
        alert("Güncel bakiyeniz : " + bakiye);
        break;

    case "4":
        alert("Sistemden çıkış yapılmıştır...")
        break;

    default:
        alert("Lütfen 1 - 4 arasında değer giriniz !");
}
