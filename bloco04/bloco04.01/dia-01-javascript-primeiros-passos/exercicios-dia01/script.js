// Programa 01
// let a = 13;
// let b = 9;

// let adicao = a + b;
// let subtracao = a - b;
// let multiplicacao = a * b;// Programa 01
// let a = 13;
// let b = 9;

// let adicao = a + b;
// let subtracao = a - b;
// let multiplicacao = a * b;
// let divisao = a / b;
// let modulo = a % b;

// console.log('O resultado da adição de ' + a + ' mais ' + b + ' é igual à ' + adicao + '.');
// console.log('O resultado da subtração de ' + a + ' menos ' + b + ' é igual à ' + subtracao + '.');
// console.log('O resultado da multiplicação de ' + a + ' vezes ' + b + ' é igual à ' + multiplicacao + '.');
// console.log('O resultado da divisao de ' + a + ' por ' + b + ' é igual à ' + divisao + '.');
// console.log('O resultado do módulo de ' + a + ' por ' + b + ' é igual à ' + modulo + '.');

// Programa 02
// let a = 18;
// let b = 125;

// if (a > b) {
//     console.log('O número ' + a + ' é maior que o número ' + b + '.');
// } else {
//     console.log('O número ' + b + ' é maior que o número ' + a + '.')
// }

// Programa 03
// let a = 34;
// let b = 98;
// let c = 59;

// if (a > b && a > c) {
//     console.log('O número ' + a + ' é maior que os números ' + b + ' e ' + c + '.');
// } else if (b > a && b > c) {
//     console.log('O número ' + b + ' é maior que os números ' + a + ' e ' + c + '.');
// } else {
//     console.log('O número ' + c + ' é maior que os números ' + a + ' e ' + b + '.');
// }

// Programa 04
// let numTestado = 33;

// if (Math.sign(numTestado) > 0) {
//     console.log('O valor ' + numTestado + " é um número positivo.");
// } else if (Math.sign(numTestado) < 0) {
//     console.log('O valor ' + numTestado + " é um número negativo.");
// } else if (Math.sign(numTestado) === 0 || Math.sign(numTestado) === -0) {
//     console.log('O valor ' + numTestado + " é igual à zero.");
// } else {
//     console.log('O valor ' + numTestado + " não é um número válido.");
// };

// Programa 05
// let primeiroAngulo = 150;
// let segundoAngulo = 15;
// let terceiroAngulo = 30;

// let valorTotalDosAngulos = primeiroAngulo + segundoAngulo + terceiroAngulo;

// if (primeiroAngulo > 0 && segundoAngulo > 0 && terceiroAngulo > 0) {

//     if (valorTotalDosAngulos === 180) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// } else {
//     console.log('Erro de ângulo inválido');
// }

// Programa 06
// let pecaDeXadrez = 'tcasa';

// switch (pecaDeXadrez.toLowerCase()) {
//     case 'rei':
//         console.log( 'Rei -> horizontal, vertical e diagonal somente uma casa de cada vez.');
//         break;

//     case 'rainha':
//         console.log('Rainha -> ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
//         break;

//     case 'bispo':
//         console.log('Bispo -> ao longo das diagonais mas não pode pular outras peças.');
//         break;

//     case 'cavalo':
//         console.log('Cavalo -> forma de “L”, quer dizer, duas casas em sentido horizontal e ' +
//             'mais uma na vertical ou vice-versa. Única peça que pode pular as outras.');
//         break;

//     case 'torre':
//         console.log('Torre -> vertical ou horizontal, mas não pode pular outras peças.');
//         break;

//     case 'peão':
//         console.log('Peão -> uma casa para frente e somente captura outras peças na diagonal.' +
//             'Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.'
//         );
//         break;

//     default:
//         console.log('Erro, peça inválida');
//         break;
// }

//Programa 07
// let porcentagem = 200;

// if (porcentagem >= 90 && porcentagem <= 100) {
//     console.log('A');
// } else if (porcentagem >= 80 && porcentagem <= 89) {
//     console.log('B');
// } else if (porcentagem >= 70 && porcentagem <= 79) {
//     console.log('C');
// } else if (porcentagem >= 60 && porcentagem <= 69) {
//     console.log('D');
// } else if (porcentagem >= 50 && porcentagem <= 59) {
//     console.log('E');
// } else if (porcentagem < 50 && porcentagem >= 0) {
//     console.log('F');
// } else if (porcentagem > 100 || porcentagem < 0) {
//     console.log('Nota Inválida!')
// }

//Programa 08
// let numero01 = 3;
// let numero02 = 2;
// let numero03 = 11;

// if ((numero01 % 2 === 0) || (numero02 % 2 === 0) || (numero03 % 2 === 0)){
//     console.log(true);
// } else {
//     console.log(false);
// }

// Programa 09
// let numero01 = 40;
// let numero02 = 28;
// let numero03 = 1164;

// let numeroImpar = false;

// if ((numero01 % 2 !== 0) || (numero02 % 2 !== 0) || (numero03 % 2 !== 0)){
//     numeroImpar = true;
// }
// console.log(numeroImpar);

// Programa 10
// let custoDoProduto = 10;
// let valorDeVenda = 30;

// if (custoDoProduto <= 0 || valorDeVenda <= 0) {
//     console.log('Valor inválido!');
// } else {
//     let valorCustoTotal = custoDoProduto + (custoDoProduto * 0.2);
//     let lucro = (valorDeVenda - valorCustoTotal) * 1000;
//     console.log('O lucro  que a empresa terá ao vender mil desses produtos será de R$' + lucro);
// }

// Programa 11
let aliquotaINSS;
let aliquotaIR;

let salarioBruto = 800

if (salarioBruto <= 1556.94){
    aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    aliquotaINSS = salarioBruto * 0.11;
} else {
    aliquotaINSS = 570.88;
}

let salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98){
    aliquotaIR = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    aliquotaIR = (salarioBase * 0.225) - 636.13;
} else{
    aliquotaIR = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - aliquotaIR;
console.log('Salário é R$' + salarioLiquido);