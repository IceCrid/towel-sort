
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let matrixSort = [];

  // Check, if the parameters are not transmitted, return an empty array []
  if (!matrix || !matrix.length) {
    return [];
  }

  matrix.forEach((element, index) => {
    let result = [];

    if (index % 2 !== 0) {
      result = [...element].reverse();
    }

    if (index % 2 == 0) {
      result = [...element];
    }

    matrixSort.push(...result);
  });

  return matrixSort;
}
