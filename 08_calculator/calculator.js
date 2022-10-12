const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArray) {
	return numArray.reduce((total, number) => total + number, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((total, number) => total * number, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num === 0) return 1;
  else return num * factorial(num - 1);
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
