// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()

// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos.
// (Não gaste tempo pensando no texto e sim realizando o exercício)
const myText = document.getElementsByTagName('p')[1];
myText.innerText = 'Já me vejo trabalhando na área e muito bem realizado tanto no' +
' âmbito profissional, como no pessoal!';

// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
const mainContent = document.getElementsByClassName('main-content')[0];
mainContent.style.backgroundColor = 'rgb(76,164,109)';

// 3. Crie uma função que mude a cor do quadrado vermelho para branco.
// 4. Crie uma função que corrija o texto da tag <h1>.
// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
// 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
