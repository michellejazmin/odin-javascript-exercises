const removeFromArray = function(originalArray, ...argsToRemove) {
  let newArray = [];

  originalArray.forEach(element => {
    if (!argsToRemove.includes(element))
    {
      newArray.push(element);
    }
  });

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
