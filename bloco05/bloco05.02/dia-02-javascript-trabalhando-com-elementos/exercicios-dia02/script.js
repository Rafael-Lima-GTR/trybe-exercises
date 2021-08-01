// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const h1CreateElement = document.createElement('h1');
h1CreateElement.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1CreateElement);

// 2 - Adicione a tag main com a classe main-content como filho da tag body;
const mainCreateElement = document.createElement('main');
mainCreateElement.className = 'main-content'
document.body.appendChild(mainCreateElement);

// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const sectionCenterCreateElement = document.createElement('section');
sectionCenterCreateElement.className = 'center-content';
mainCreateElement.appendChild(sectionCenterCreateElement);

// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const paragraphCreateElement = document.createElement('p');
paragraphCreateElement.innerHTML = 'Estudar JavaScript está sendo muito gratificante!!!';
sectionCenterCreateElement.appendChild(paragraphCreateElement);

// 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const sectionLeftCreateElement = document.createElement('section');
sectionLeftCreateElement.className = 'left-content';
mainCreateElement.appendChild(sectionLeftCreateElement);

// 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const sectionRightCreateElement = document.createElement('section');
sectionRightCreateElement.className = 'right-content';
mainCreateElement.appendChild(sectionRightCreateElement);

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 
// e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const imgCreateElement = document.createElement('img');
imgCreateElement.src = 'https://picsum.photos/200';
imgCreateElement.className = 'small-image';
sectionLeftCreateElement.appendChild(imgCreateElement);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso,
// ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser
// filha do section criado no passo 6;
const ulCreateElement = document.createElement('ul');
sectionRightCreateElement.appendChild(ulCreateElement);

const numberWords = ['Um', 'Dois', 'Três', 'Quatro',
 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']

 for(let index in numberWords){

    const liCreateElement = document.createElement('li');
    liCreateElement.innerHTML = numberWords[index];

    ulCreateElement.appendChild(liCreateElement);
 }
// 9 - Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
