// 1 - Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const father = elementoOndeVoceEsta.parentElement;
father.style.color = 'red';
// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const firstSonOfSon = elementoOndeVoceEsta.firstElementChild;
firstSonOfSon.innerText = "Texto do primeiroFilhoDoFilho";

// 4 - Acesse o primeiroFilho a partir de pai .
// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// 8 - Agora acesse o terceiroFilho a partir de pai .