const assert = require('assert');

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
        if (item !== arr[index]) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}

assert.strictEqual(typeof myRemove, 'function', 'Não é uma função!');
// 1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'O elemento 3 é pra ser removido!');

// 2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Não é pra retornar o array [1, 2, 3, 4]');

// 3. Verifique se o array passado por parâmetro não sofreu alterações
const myArray = [9, 10, 11, 12, 13];
myRemove(myArray, 12);
assert.deepStrictEqual(myArray, [9, 10, 11, 12, 13], 'O array não deve sofrer alterações');

// 4. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Quando for passado um elemento inexistente é pra retornar o mesmo array!');