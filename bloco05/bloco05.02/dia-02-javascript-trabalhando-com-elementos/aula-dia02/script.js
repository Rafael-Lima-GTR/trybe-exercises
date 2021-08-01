// // Parte I - Buscando elementos

// // 1 - Acesse o elemento elementoOndeVoceEsta.
// const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// // 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// const father = elementoOndeVoceEsta.parentElement;
//     father.style.color = 'orange';

// // 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// const firstSonOfSon = elementoOndeVoceEsta.firstElementChild;
//     firstSonOfSon.innerText = 'primeiroFilhoDoFilho';

// // 4 - Acesse o primeiroFilho a partir de pai.
// let firstSon = father.firstElementChild;

// // 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// firstSon = elementoOndeVoceEsta.previousElementSibling;

// // 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// const textAcess = elementoOndeVoceEsta.nextSibling;

// // 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// let thirdSon = elementoOndeVoceEsta.nextElementSibling;

// // 8 - Agora acesse o terceiroFilho a partir de pai.
// thirdSon = father.children[2];


// // Parte II - Criando elementos
// // 1. Crie um irmão para `elementoOndeVoceEsta`.
// const father = document.getElementById('pai');
// const brotherElementoOndeVoceEsta = document.createElement('section');
// brotherElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
// father.appendChild(irmaoElementoOndeVoceEsta); 

// // 2. Crie um filho para `elementoOndeVoceEsta`.
// const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// const sonOfElementoOndeVoceEsta = document.createElement('section');
// sonOfElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
// elementoOndeVoceEsta.appendChild(sonOfElementoOndeVoceEsta);


// // 3. Crie um filho para `primeiroFilhoDoFilho`.
// const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
// const sonOfPrimeiroFilhoDoFilho = document.createElement('section');
// sonOfPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
// primeiroFilhoDoFilho.appendChild(sonOfPrimeiroFilhoDoFilho);


// // 4. A partir desse filho criado, acesse `terceiroFilho`.
// console.log(sonOfPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling);


// Parte III - Removendo elementos
// Remova todos os elementos filhos de paiDoPai exceto pai,
//  elementoOndeVoceEsta e primeiroFilhoDoFilho.
const pai = document.getElementById('pai');

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
    const currentChildren = pai.childNodes[index];

    if (currentChildren.id !== 'elementoOndeVoceEsta') {
        currentChildren.remove();
    }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();
