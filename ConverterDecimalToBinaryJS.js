function convertToBinary(x) {

    let binary = 0;
    let remainder;
    let i = 1;
    let step = 1;

    while (x !== 0){
        remainder = x % 2;
        console.log(`Step ${step++}: ${x}/2, Remainder = ${remainder}, Quotient = ${parseInt(x/2)}`);
        x = parseInt(x / 2);
        binary = binary + remainder * i;
        i *= 10;
    }
    console.log(`${number} in binary is: ${binary}`);
}

const prompt = require("prompt-sync")({sigint:true});

let number = prompt('Enter a decimal number: ');

convertToBinary(number);