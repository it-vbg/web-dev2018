'use strict';

// language=ECMAScript 6
let Tc = prompt('Введите температуру градусов по Цельсию');
console.log(Tc); //
console.log(typeof Tc);
Tc = +Tc;
console.log(typeof Tc);

let Tf = (9 / 5) * Tc + 32;

alert(`Температура по Фаренгейту ${Tf} градуса`);