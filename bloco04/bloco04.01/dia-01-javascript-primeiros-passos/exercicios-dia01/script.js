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

let pecaDeXadrez = 'tcasa';

switch (pecaDeXadrez.toLowerCase()) {
    case 'rei':
        console.log( 'Rei -> horizontal, vertical e diagonal somente uma casa de cada vez.');
        break;

    case 'rainha':
        console.log('Rainha -> ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
        break;

    case 'bispo':
        console.log('Bispo -> ao longo das diagonais mas não pode pular outras peças.');
        break;

    case 'cavalo':
        console.log('Cavalo -> forma de “L”, quer dizer, duas casas em sentido horizontal e ' +
            'mais uma na vertical ou vice-versa. Única peça que pode pular as outras.');
        break;

    case 'torre':
        console.log('Torre -> vertical ou horizontal, mas não pode pular outras peças.');
        break;

    case 'peão':
        console.log('Peão -> uma casa para frente e somente captura outras peças na diagonal.' +
            'Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.'
        );
        break;
    
    default:
        console.log('Erro, peça inválida');
        break;
}
