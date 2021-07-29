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


// // 3- Agora inverta o lado do triângulo. (Resolução desse exercício, foi necessário eu consultar a resolução no gabarito do Bloco)
// let n = 5;
// let oneLine = '';
// let inputPosition = n;

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex < inputPosition) {
//       oneLine = oneLine + ' ';
//     } else {
//       oneLine = oneLine + '*';
//     }
//   }
//   console.log(oneLine);
//   oneLine = '';
//   inputPosition -= 1;
// };


// // 4- Depois, faça uma pirâmide com n asteriscos de base:
// let n = 5;
// let symbol = '*';
// let inputLine = '';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex > controlLeft && columnIndex < controlRight) {
//       inputLine = inputLine + symbol;
//     } else {
//       inputLine = inputLine + ' ';
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   controlRight += 1;
//   controlLeft -= 1
// };

// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}