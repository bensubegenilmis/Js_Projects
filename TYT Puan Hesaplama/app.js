/*

1-Türkçe ---> 4 puan
2-Matematik
3-Sosyal Bilimler
4-Fen Bilimleri


------> 100 puanı ÖSYM veriyor.
------> Okul puanı max 60 veriyor.


*/


let turkceDogru, turkceYanlis = 0;
let matDogru, matYanlis = 0;
let sosyalDogru, sosyalYanlis = 0;
let fenDogru, fenYanlis = 0;

let okulpuani = 0;
let puan = 0;


let yenisatir = "\r\n";

let mesaj = "TYT Puan Hesaplama uygulamasına hoşgeldiniz!" + yenisatir
    + "1-Puan hesapla" + yenisatir
    + "2-Çıkış yap";



let secim = prompt(mesaj);

switch (secim) {
    case 1:

        okulpuani = Number(prompt("Okul puanınızı giriniz:"));

        turkceDogru = Number(prompt("Türkçe doğru sayısı"));
        turkceYanlis = Number(prompt("Türkçe yanlış sayısı"));

        matDogru = Number(prompt("Matematik doğru sayısı"));
        matYanlis = Number(prompt("Matematik yanlış sayısı"));

        sosyalDogru = Number(prompt("Sosyal Bilimler doğru sayısı"));
        sosyalYanlis = Number(prompt("Sosyal Bilimler yanlış sayısı"));

        fenDogru = Number(prompt("Fen Bilimleri doğru sayısı"));
        fenYanlis = Number(prompt("Fen Bilimleri yanlış sayısı"));

        let dogruSayisi = turkceDogru + matDogru + fenDogru + sosyalDogru;
        let yanlisSayisi = turkceYanlis + matYanlis + fenYanlis + sosyalYanlis;

        let kalanDogruSayisi = dogruSayisi - (yanlisSayisi / 4);

        puan = (kalanDogruSayisi * 4) + 100 + okulpuani; //ÖSYM 100 veriyor

        alert("TYT Puanınız : " + puan);



        break;

    case 2:

        alert("Uygulamadan Çıkış Yapıldı")
        break;

    default:
        alert("Lütfen Geçerli Aralıkta Değer Giriniz")
        break;
}