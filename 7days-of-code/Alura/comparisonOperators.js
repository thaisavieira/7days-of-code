//Utilizando operadores de comparação de maneira que seja impresso as informações de maneira correta, que faça sentido e sem erros:

let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if ( numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if ( numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if ( numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

/* Explicação: Se usarmos o operador “==” em uma condição, saberemos que ela só será verdadeira se o valor da esquerda for o mesmo valor da direita. 
O símbolo de “idêntico a” (===). Ele não só compara os valores dos dois lados da equação, como também verifica se eles são do mesmo tipo.
*/ 