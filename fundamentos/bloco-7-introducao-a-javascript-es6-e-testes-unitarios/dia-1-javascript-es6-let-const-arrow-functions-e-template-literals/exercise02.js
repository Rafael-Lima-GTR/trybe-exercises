// PARTE 2
// 1. Crie uma função que receba um número e retorne seu fatorial.
// * Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// * Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator.

// const factorial = number => {
//     let result = number;
//     while (number > 2) {
//         result *= --number;
//     }

//     return result;
// }

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));

// // Resolução através do for
// const factorial = number => {
//     let result = 1;

//     for (let index = 2; index <= number; index += 1) {
//         result *= index;
//     }

//     return result;
// }

// console.log(factorial(5));

// // Resolução de forma recursiva
// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(5));


// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.
// * Exemplo:
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'


const longestWord = phrase => {
    // Fonte de pesquisa: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
    let wordArray = phrase.split(' ');

    // Fonte de pesquisa: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    return wordArray.sort((a, b) => b.length - a.length)[0];

}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

// EXEMPLO 1 do gabarito no course da Trybe
// const longestWord = text => {
//     let wordArray = text.split(' ');
//     let maxLength = 0;
//     let result = '';

//     for (const word of wordArray) {
//         if (word.length > maxLength) {
//             maxLength = word.length;
//             result = word;
//         }
//     }

//     return result;
// }

// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

// EXEMPLO 2 do gabarito no course da Trybe
// const longestWord = phrase => phrase.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

// console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
