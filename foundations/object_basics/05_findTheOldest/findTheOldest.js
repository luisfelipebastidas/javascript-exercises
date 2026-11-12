const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();

  function getAge(person) {
    const endYear = person.yearOfDeath ?? currentYear;
    return endYear - person.yearOfBirth;
  }

  return people.reduce((oldest, person) => {
    if (getAge(person) > getAge(oldest)) {
      return person;
    }

    return oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
