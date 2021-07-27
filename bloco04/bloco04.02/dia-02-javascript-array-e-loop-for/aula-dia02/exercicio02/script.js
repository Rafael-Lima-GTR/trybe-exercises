// // Exemplo sem for
// let cars = ['Saab', 'Volvo', 'BMW'];

// console.log(cars[0]); // Saab
// console.log(cars[1]); // Volvo
// console.log(cars[2]); // BMW

// // Exemplo com for
// let cars = ["Saab", "Volvo", "BMW"];

// for (let index = 0; index < cars.length; index += 1) {
//   console.log(cars[index]);
// }

// // Programa 01 - Utilize o for para imprimir os elementos da lista groceryList com o console.log():
// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let index = 0; index < groceryList.length; index += 1) {
//     console.log(groceryList[index]);
// }

// // O for/of nos permite criar loops em objetos iteráveis como strings, arrays,
// // entre outros, mas vamos focar somente nesses dois!
// let numeros = [1,2,3,4,5];
// for(let numero of numeros) {
//   console.log(numero);
// }
// // resultado: 
// //1
// //2
// //3
// //4
// //5

// // O laço for/of permite iterar os valores das propriedades, nos retornando os números dentro do array numeros
// let word = 'Hello';
// for (let letter of word) {
//   console.log(letter);
// }
// // resultado:
// // "H"
// // "e"
// // "l"
// // "l"
// // "o"

// // Com o for/of , nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma:
// let arrOfNumbers = [10, 20, 30];
// for (let sum of arrOfNumbers) {
//     sum += 1;
//     console.log(sum);
// }
// // 11
// // 21
// // 31
// // É importante ressaltar que o for/of não irá alterar o array, e sim trazer os valores de dentro, e no caso, adicionando 1 à soma.

// Programa 01 - Utilize o for/of para imprimir os elementos da lista names com o console.log():
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log(name);
}