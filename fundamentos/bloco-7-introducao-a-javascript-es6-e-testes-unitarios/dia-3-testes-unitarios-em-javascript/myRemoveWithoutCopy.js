const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
    for (let index = 0, len = arr.length; index < len; index += 1) {
        if (arr[index] === item) {
            arr.splice(index, 1);
            index -= 1;
            len -= 1;
        }
    }

    return arr;
}

assert.strictEqual(typeof myRemoveWithoutCopy, 'function', 'Não é uma função!');
// 1. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'O elemento 3 é pra ser removido!');

// 2. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Não é pra retornar o array [1, 2, 3, 4]');

// 3. Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
const myArray = [9, 10, 11, 12, 13];
myRemoveWithoutCopy(myArray, 12);
assert.strictEqual(myArray.length, 4, 'É pra remover um elemento do array');

// 4. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Quando for passado um elemento inexistente é pra retornar o mesmo array!');