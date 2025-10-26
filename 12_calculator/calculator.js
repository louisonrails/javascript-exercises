const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });

  return sum;
};

const multiply = function(numbers) {
  let value = 1;
  
  numbers.forEach(number => {
    value *= number;
  });

  return value;

};

const power = function(a , b) {
	return Math.pow(a, b);
};

const factorial = function(number) {
	let value = 1;
  for(let i = number; i > 0; i--){
    value *= i;
  }
  return value;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
