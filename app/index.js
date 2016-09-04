// app/index.js
const calc = require('./calc');

const numbersToAdd = [
    3,
    4,
    10,
    2
];

function callResult() {
    return calc.sum(numbersToAdd);
}
const result = calc.sum(numbersToAdd);
console.log('The result is:' + result);

module.exports.callResult = callResult;
