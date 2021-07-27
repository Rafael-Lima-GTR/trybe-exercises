let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // 01 -Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log():
// for (let number of numbers){
//     console.log(number);
// }

// // 02 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let sumNumbers = 0;
// for (let number of numbers) {
//     sumNumbers += number;    
// }

// console.log(sumNumbers);

// // 03 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// let sumNumbers = 0;
// for (let number of numbers) {
//     sumNumbers += number;    
// }

// console.log(sumNumbers/(numbers.length));

// // 04 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem:
// // "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// let sumNumbers = 0;
// for (let number of numbers) {
//     sumNumbers += number;    
// }

// let media = sumNumbers/(numbers.length);

// if(media > 20) {
//     console.log('valor maior que 20');
// } else{
//     console.log('valor meno ou igual 20');
// }

// 05 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// let higherNumber = 0;
// for (let number of numbers){
//     if(number > higherNumber){
//         higherNumber = number;
//     }
// }

// console.log(higherNumber);

// 06 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let oddAmount = 0;
// for (let number of numbers) {
//     if ((number % 2) > 0) {
//         oddAmount += 1;
//     }
// }

// if (oddAmount > 0) {
//     console.log(oddAmount);
// } else {
//     console.log('nenhum valor ímpar encontrado');
// }

// // 07 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// let smallestNumber = numbers[0];

// for (let number of numbers) {
//     if (number <= smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log(smallestNumber);


// 08 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let exercicioArray = [];

for (index = 0; index < 25; index += 1) {
    exercicioArray.push(exercicioArray.length + 1);
}

console.log(exercicioArray);
// 09 -Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
for(let divisao of exercicioArray){
    console.log(divisao/2);
}