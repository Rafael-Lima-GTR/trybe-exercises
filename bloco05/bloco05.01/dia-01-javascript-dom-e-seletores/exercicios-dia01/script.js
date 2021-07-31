// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()

// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos.
// (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeText() {
    const myText = document.getElementsByTagName('p')[1];
    myText.innerText = 'Já me vejo trabalhando na área e muito bem realizado tanto no' +
        ' âmbito profissional, como no pessoal!';
}
changeText();

// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeSquareToGreen() {
    const mainContent = document.getElementsByClassName('main-content')[0];
    mainContent.style.backgroundColor = 'rgb(76,164,109)';
}
changeSquareToGreen();

// 3. Crie uma função que mude a cor do quadrado vermelho para branco.
function changeSquareToWhite() {
    const centerContent = document.getElementsByClassName('center-content')[0];
    centerContent.style.backgroundColor = 'rgb(255,255,255)';
}
changeSquareToWhite();

// 4. Crie uma função que corrija o texto da tag <h1>.
function correctTitle() {
    const textCorrection = document.getElementsByClassName('title')[0];
    textCorrection.innerText = 'Exercício 5.1 - JavaScript';
}
correctTitle();

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function paragraphUpperCase() {
    const paragraphUpperCase = document.getElementsByTagName('p')[0];
    paragraphUpperCase.innerHTML = paragraphUpperCase.innerHTML.toUpperCase();
}
paragraphUpperCase();

// 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function showParagraphs() {
    let paragraphs = document.getElementsByTagName('p');
    
    for (let index = 0; index < paragraphs.length; index += 1) {
        console.log(paragraphs[index].innerHTML);
    }
}
showParagraphs();
