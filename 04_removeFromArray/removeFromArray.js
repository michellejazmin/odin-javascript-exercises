const removeFromArray = function(originalArray, ...argsToRemove) {
  // For each argument in argsToRemove
  for (let i = 0; i < argsToRemove.length; i++)
  {
    // For each element in the original array
    for (let j = 0; j < originalArray.length; j++)
    {
      if (argsToRemove[i] === originalArray[j])
      {
        originalArray.splice(j, 1);
      }
    }
  }

  return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
