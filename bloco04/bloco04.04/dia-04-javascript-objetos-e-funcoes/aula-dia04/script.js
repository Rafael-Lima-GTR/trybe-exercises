// 1 - Crie um objeto player contendo as variáveis listadas abaixo.
// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {golden: 2, silver: 3}
};

// // 2 - Acesse as chaves name , lastName e age e concatene as suas 
// // informações para imprimir no console uma mensagem no seguinte 
// // formato: "A jogadora Marta Silva tem 34 anos de idade".

// console.log('A jogadora ' + player.name + ' ' + player.lastName +
// ' tem ' + player.age + ' anos de idade');

// // 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta
// // chave um array contendo as datas em que a jogadora Marta foi 
// //considerada a melhor do mundo.

// player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

// // 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte 
// // formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
// console.log('A jogadora ' + player.name + ' ' + player.lastName + 
// ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');

// // 5 - Acesse a chave medals e faça um console.log no seguinte formato:
// // "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' +
// player.medals.silver + ' medalhas de prata');

//Exemplos For/In
// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let index in car) {
//     console.log(index, car[index]);
//   }

// let food = ['hamburguer', 'bife', 'acarajé'];

// for (let position in food) {
//     console.log(position);
//   };
//   //resultado: 0, 1, 2;


// for (let value of food) {
//   console.log(value);
// };
//resultado: hamburguer, bife, acarajé;


// Para fixar
// 1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx'
//  para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

for(let key in names){
    console.log('Olá ' + names[key]);
}