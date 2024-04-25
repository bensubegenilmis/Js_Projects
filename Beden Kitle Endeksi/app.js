// Beden Kitle Endeksi

let kilo = Number(prompt("Kilonuzu giriniz:"));

let boy = Number(prompt("Boyunuzu mettre cinsinden giriniz:"));


let sonuc = kilo / (boy * boy);

if (sonuc < 18.5) {
    console.log("İdeal Kilonuun Altındasınız " + sonuc);
} else if (sonuc >= 18.5 && sonuc <= 24.9) {
    console.log("İdeal Kilodasınız " + sonuc);

} else if (sonuc >= 25 && sonuc <= 29.9) {
    console.log("İdeal Kilonun Üstündesiniz " + sonuc);

} else if (sonuc >= 30 && sonuc <= 39.9) {
    console.log("İdeal Kilonun Çok Üstündesiniz (Obez) " + sonuc);
} else if (sonuc >= 40) {
    console.log("İdeal Kilonun Çok Üstündesiniz (Morbid Obez) " + sonuc);
}


