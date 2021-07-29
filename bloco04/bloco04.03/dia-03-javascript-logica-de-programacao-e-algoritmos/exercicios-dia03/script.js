// // 1- Para o primeiro exercício de hoje, faça um programa que, 
// // dado um valor n qualquer, seja n > 1 , imprima na tela um 
// // quadrado feito de asteriscos de lado de tamanho n.

// let n = 7;
// let oneLine = ''

// for (let index = 0; index < n; index += 1) {

//     oneLine = oneLine + '*';
// }

// for (let index = 0; index < n; index += 1) {
//     console.log(oneLine);
// }


// // 2- Para o segundo exercício, faça o mesmo que antes,
// // mas que imprima um triângulo retângulo com 5 asteriscos de base.

// let n = 5;
// let oneLine = ''

// for (let index = 0; index < n; index += 1) {

//     oneLine = oneLine + '*';
//     console.log(oneLine);
// }


// 3- Agora inverta o lado do triângulo. (Resolução desse exercício, foi necessário eu consultar a resolução no gabarito do Bloco)
let n = 5;
let oneLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      oneLine = oneLine + ' ';
    } else {
      oneLine = oneLine + '*';
    }
  }
  console.log(oneLine);
  oneLine = '';
  inputPosition -= 1;
};