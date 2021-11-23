// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (number) => {
//   // Adiciona seu código aqui
//   if(number % 3 === 0 && number % 5=== 0)
//   return number;
// }

// const divisibleBy3And5 = numbers.find(findDivisibleBy3And5);

// console.log(divisibleBy3And5);

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
}

console.log(findDivisibleBy3And5())