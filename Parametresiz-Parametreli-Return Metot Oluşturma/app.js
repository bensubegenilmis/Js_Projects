// // parametresiz ve geriye değer döndürmeyen metot tanımlamak

// function yazdir(){
//     debugger;
//     console.log("Bensu");
// }

// yazdir();
// debugger;
// yazdir();

// function topla(){
//     console.log(5+7);
// }

// topla();

// -----------------------------------------------------------

// Parametreli metot oluşturma

// function yazdir(isim,soyisim){
//     console.log(isim+ " "+ soyisim);
// }

// yazdir("Bensu","Beğenilmiş");
// yazdir("Ali","Ali")


// cube(2);

// function cube(sayi){
//     console.log(sayi*sayi*sayi);
// }

// cube(5);


// let yas = Number(prompt("Yaşınızı giriniz:"));

// function kontrolEt(yas){
//     if(yas>=18){
//         console.log("Ehliyeti alabilirsiniz");
//     }else{
//         console.log("Ehliyeti alamazsınız!");
//     }
// }

// kontrolEt(yas);


//----------------------------------------

// Return ile değer döndürmek

let donenDeger = cube(2);
kareAl(donenDeger);

function kareAl(sayi){
    let sonuc = sayi*sayi;
    console.log(sonuc);


}

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc;
}

console.log(donenDeger);


// Return
// bir değeri metodun dışarısına çıkarmak , taşımak için kullanılır
// bir metodu bitiren anahtar kelimedir, returndan sonraki kodlar çalışmaz

// void geriye değer döndürmeyen metot

