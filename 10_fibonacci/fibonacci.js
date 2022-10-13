const fibonacci = function(num) {
  const sequence = [1, 1];
  
  const number = Number(num);
  if (number < 1 || isNaN(number)) return "OOPS";

  for (let i = 2; i < number; i++) {
    const newNumber = sequence[i - 2] + sequence[i - 1];
    sequence.push(newNumber);
  }
  
  return sequence[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
