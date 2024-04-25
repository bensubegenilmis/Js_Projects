// çoklu if yapısı

/*  

ad soyad : coş geçilmez

TCKN: 11 karakterden oluşsun

*/



let ad = prompt("İsminizi giriniz:");
let tckn = prompt("TCKN giriniz:");


// kontrolEt(ad,tckn);
kontrolEt2(ad,tckn);

function kontrolEt(ad, tckn){

    if (ad !== ""){

        if(tckn.length == 11){
            console.log("Giriş yapıldı");
        }else{
            console.log("TCKN geçerli değil");
        }
    }else{
        console.log("Lütfen isim alanını boş bırakmayınız!");
    }
}


function kontrolEt2(ad, tckn){
    if(ad == ""){
        console.log("Lütfen isim alanını boş bırakmayınız!");
        return;
    }
    if(tckn.length !== 11){
        console.log("TCKN geçerli değil");
        return;
    }

    console.log("Giriş yapıldı");
}