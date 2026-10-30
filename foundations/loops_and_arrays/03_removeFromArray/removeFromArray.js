const removeFromArray = function (array, ...removeArr) {
  const newArray = [];
  array.forEach((element) => {
    if (!removeArr.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
