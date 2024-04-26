// Decimal To Binary Conversion

// convertDecimalToBinary(6);

// function convertDecimalToBinary(number){
//     let binary = "";
//     while(true){
//         binary+=(number%2).toString();
//         number=Math.floor(number/2);
//         if(number == 1){
//             //artık bölmek yok
//             binary+=1;
//             break;
//         }
//     }
//     let result = reverse(binary);
//     console.log("Sonuç : " + result);

// }

// function reverse(binary){
//     reverseBinary = "";
//     for(let i = binary.length-1; i>=0 ; i--){
//         reverseBinary+=binary.charAt(i);
//     }
//     return reverseBinary;
// }


// Binary to Decimal Conversion


let binary = "1011";

function convertBinaryToDecimal(binary) {
    let toplam = 0;
    let ust = 0;

    for (let i = binary.length - 1; i >= 0; i--) {
        if(Number(binary.charAt(i))!=0){
            toplam += Number(binary.charAt(i)) * Math.pow(2, ust);
        }
       
        ust++;
    }

    console.log("Sonuç : " + toplam);
}

convertBinaryToDecimal(binary);


