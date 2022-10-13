const findTheOldest = function (array) {
  let oldestAge = 0;

  let oldestPerson = array.reduce((oldest, person) => {   
    let age = 0; 
    if (!(person.yearOfDeath)) {
      age = new Date().getFullYear() - person.yearOfBirth;
    } else {
      age = person.yearOfDeath - person.yearOfBirth;
    }
    if (age > oldestAge) {
      oldestAge = age;
      oldest = person;
    }
    
    return oldest;
  }, {});

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
