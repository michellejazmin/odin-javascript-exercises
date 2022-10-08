const sumAll = function(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR'
  if (num1 < 0 || num2 < 0) return 'ERROR';
  
  let min;
  let max;

  if (num1 < num2) {
    min = num1;
    max = num2;
  } else {
    min = num2;
    max = num1;
  }

  let result = 0;

  for (let i = min; i <= max; i++) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
