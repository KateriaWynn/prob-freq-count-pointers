function makeFrequencyCounter(str, i = 0, freqObj = {}) {
  // base case
  if (str.length === i) return freqObj;

  // iteration
  // for the current element in the string
  // add it as a key in the freqObj and add 1 to it's value or set it to 1
  freqObj[str[i]] = freqObj[str[i]] + 1 || 1;

  // recursive func call
  return makeFrequencyCounter(str, i + 1, freqObj);
}

// msg and letters are both string variables

function constructNote(msg, letters) {
  // if letters in msg
  // want both to be objects

  // create frequency objects for both msg and letters
  const msgFreq = makeFrequencyCounter(msg);
  const lettersFreq = makeFrequencyCounter(letters);

  //   console.log(msgFreq['a'])
  //   console.log(lettersFreq['a'])

  // ensure both have the same key --> loop through one of the objects
  // looping through the keys in the object
  // msgFreq

  for (const letter in msgFreq) {
    // ensure both have the same value at that key
    if (letter in msgFreq && letter in lettersFreq) {
      if (msgFreq[letter] === lettersFreq[letter]) {
        return true;
      }
    }
  }

  return false;
}

module.exports = constructNote;
