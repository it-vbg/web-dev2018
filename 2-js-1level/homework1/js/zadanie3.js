'use strict';

// language=ECMAScript 6
let a = 10 + 10 + "10";
console.log(a); //Получится 2010, так как 2 первых числа сложатся, а 10 пристыкуется как текст
let b = 10 + "10" + 10;
console.log(b); //Получится 101010, так как 2 значение строковое, у плюсов приоритет одинаковый и выводится значения будут по порядку
let c = 10 + 10 + + "10";
console.log(c); //Получится 30, так как 3 значение из строкового преобразуется в число
let d = 10 / -"";
console.log(d); //Получится -Infinity, так как 10 делим на -ничего
let e = 10 / +"2,5";
console.log(e); //Получится Nan (не число), так как 10 делим на не числовое значение