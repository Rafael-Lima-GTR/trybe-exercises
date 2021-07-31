// Parte I - Objetos e For/In

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// // 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
// console.log('Bem vinda, ' + info.personagem);

// // 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e,
// // em seguida, imprima o objeto no console.
info['recorrente'] = 'Sim';
// console.log(info);

// // 3 - Faça um for/in que mostre todas as chaves do objeto.
// for (let key in info) {
//     console.log(key);
// }

// // 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
// for (let key in info) {
//     console.log(info[key]);
// }

// // 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro 
// //e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178',
// // 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
// };

// for (let key in info) {
//     if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
//         console.log('Ambos recorrentes');
//     } else {
//         console.log(info[key] + ' e ' + info2[key]);
//     }
// }

// Parte II - Funções
// // 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// let stringWord = 'arara'

// function palindromoTest(stringWord) {
//     const reverseString = stringWord.split('').reverse().join('');
//     if (reverseString === stringWord) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(palindromoTest(stringWord));
// console.log(palindromoTest('desenvolvimento'));

// // 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// let arrayTeste = [2, 3, 6, 7, 10, 1];

// function maiorNumero(arrayTeste){

//     let higherNumber = 0;
//     for (let index in arrayTeste){
//         if (arrayTeste[higherNumber] < arrayTeste[index]){
//              higherNumber = index;    
//         }    
//     }

//     return higherNumber;
// }

// console.log(maiorNumero(arrayTeste));


// // 3- Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// let arrayTeste = [2, 4, 6, 7, 10, 0, -3];

// function menorNumero(arrayTeste){

//     let smallerNumber = 0;
//     for (let index in arrayTeste){
//         if (arrayTeste[smallerNumber] > arrayTeste[index]){
//              smallerNumber = index;    
//         }    
//     }

//     return smallerNumber;
// }

// console.log(menorNumero(arrayTeste));

// // 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function maiorCaracter(arrayTeste){

//     let higherCaracterNumber = 0;
//     for (let index in arrayTeste){
//         if (arrayTeste[higherCaracterNumber].length < arrayTeste[index].length){
//              higherCaracterNumber = index;    
//         }    
//     }

//     return arrayTeste[higherCaracterNumber];
// }

// console.log(maiorCaracter(arrayTeste));

// // 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// let arrayTeste = [2, 3, 2, 5, 8, 2, 3];

// function maisRepetido(numeros) {

//     let contRepetido = 0;
//     let contNumero = 0;
//     let indexNumeroRepetido = 0;
//     for (let index in numeros) {
//         let verificaNumero = numeros[index];
//         for (let index2 in numeros) {
//             if (verificaNumero === numeros[index2]) {
//                 contNumero += 1;
//             }
//         }
//         if (contNumero > contRepetido) {
//             contRepetido = contNumero;
//             indexNumeroRepetido = index;
//         }
//         contNumero = 0;
//     }
//     return numeros[indexNumeroRepetido];
// }

// console.log(maisRepetido(arrayTeste));

// // 6 - Crie uma função que receba um número inteiro N e retorne o
// // somatório de todos os números de 1 até N.
// let number = 5;

// function factorSumNumber(number){

//     let factorSum = 0
//     for(index = 1; index <= number; index += 1){
//          factorSum += index; 
//     }

//     return factorSum;
// }

// console.log(factorSumNumber(5));

// // 7 - Crie uma função que receba uma string word e outra string ending . 
// // Verifique se a string ending é o final da string word. Considere que a 
// // string ending sempre será menor que a string word.

// function verificaFimPalavra(stringWord, stringEnd) {
//     let inversoPalavra = stringWord.split('').reverse().join('');
//     let inversoFimPalavra = stringEnd.split('').reverse().join('');
//     let result;

//     for (let index = 0; index < inversoFimPalavra.length; index += 1) {
//         if (inversoPalavra[index] !== inversoFimPalavra[index]) {
//             result = false;
//             break;
//         } else {
//             result = true;
//         }
//     }

//     return result;
// }


// console.log(verificaFimPalavra('trybe', 'be'));
// console.log(verificaFimPalavra('joaofernando', 'fernan'));

//Bônus
// 1 - (Difícil) Faça um programa que receba uma string em 
// algarismos romanos e retorne o número que a string representa.

const numerosRomanos = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
};

function romanoParaDecimal(numero) {
    numero = numero.toLowerCase();
    const len = numero.length;
    let soma = numerosRomanos[numero[len - 1]];
    let atual = numerosRomanos[numero[len - 1]];
    for (let i = 2; i <= len; i += 1) {
        const prox = numerosRomanos[numero[len - i]];
        if (atual <= prox) {
            soma += prox;
        } else {
            soma -= prox;
        }
        atual = prox;
    }
    return soma;
}

console.log(romanoParaDecimal('MMXVIII')); // 2018
console.log(romanoParaDecimal('VI')); // 6
console.log(romanoParaDecimal('IV')); // 4