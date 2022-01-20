// sum01.test.js

const sum01 = require('./sum01');

test('sums two values', () => {
    expect(sum01(2, 3)).toEqual(5);
});