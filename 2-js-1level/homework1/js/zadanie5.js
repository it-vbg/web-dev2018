'use strict';

// language=ECMAScript 6
let enternumber = prompt('Введите число из 6 цифр');
let firstHalf = 0;
let secondHalf = 0;


for (let i = 0; i <= 5; i++) {

    let result = enternumber.substring(i, i+1);
    if (i < 3) {firstHalf = firstHalf + +result
    } else {
        secondHalf = secondHalf + +result
    }

}

if (firstHalf === secondHalf) { alert("Ваш билет счастливый"); }

console.log(`Сумма первых 3х цифр: ${firstHalf}, сумма следукющих 3х цифр : ${secondHalf}`);




