// Parte I - Buscando elementos

// 1 - Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const father = elementoOndeVoceEsta.parentElement;
    father.style.color = 'orange';

// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const firstSonOfSon = elementoOndeVoceEsta.firstElementChild;
    firstSonOfSon.innerText = 'primeiroFilhoDoFilho';

// 4 - Acesse o primeiroFilho a partir de pai.
let firstSon = father.firstElementChild;

// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
firstSon = elementoOndeVoceEsta.previousElementSibling;

// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const textAcess = elementoOndeVoceEsta.nextSibling;

// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let thirdSon = elementoOndeVoceEsta.nextElementSibling;

// 8 - Agora acesse o terceiroFilho a partir de pai.
thirdSon = father.children[2];