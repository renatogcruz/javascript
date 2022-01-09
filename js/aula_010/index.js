/**
 * Operadores aritméticos
 * adição/concatenação +
 * potenciação **
 * resto %
 * 
 */

const num1 =  5;
const num2 =  10;
const str1 = '10';

let contador = 1;
const passo = 5;

console.log(num1 + num2);
console.log(num1 ** num2);
console.log(10 % 3);
console.log(num1 + str1);

contador++;
console.log(contador);
console.log(--contador);

console.log(contador + passo);

// casos curiosos - js converte a string e realiza a multiplicação
const num5 = 5;
const num10 = '10';
console.log(num5 * num10)

const num1010 = parseInt('10');
console.log(num1010 + num5)
