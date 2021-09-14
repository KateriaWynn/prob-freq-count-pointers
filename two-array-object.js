function makeObj(arrKeys, arrValues, i = 0, resultsObj = {}) {
  // base case
  // continue until the end of the arrKeys is reached
  if (arrKeys.length === i) return resultsObj;

  // iteration
  resultsObj[arrKeys[i]] = arrValues[i] || null;

  // return recurive call
  return makeObj(arrKeys, arrValues, i + 1, resultsObj);
}

function twoArrayObject(arrKeys, arrValues) {
  let resultsObj = makeObj(arrKeys, arrValues);
  return resultsObj;
}

module.exports = twoArrayObject;
