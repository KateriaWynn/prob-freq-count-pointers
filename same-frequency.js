function numToStr(num) {
  const str = num.toString();
  return str;
}

function makeFreqObj(str1, str2, i = 0, freqObj1 = {}, freqObj2 = {}) {
  // base case
  if (str1.length === i) return { freqObj1, freqObj2 };

  // interation
  freqObj1[str1[i]] = freqObj1[str1[i]] + 1 || 1;
  freqObj2[str2[i]] = freqObj2[str2[i]] + 1 || 1;

  // return recursive func call
  return makeFreqObj(str1, str2, i + 1, freqObj1, freqObj2);
}

function sameFrequency(num1, num2) {
  const num1Str = numToStr(num1);
  const num2Str = numToStr(num2);

  if (num1Str.length !== num2Str.length) return false;

  const { freqObj1, freqObj2 } = makeFreqObj(num1Str, num2Str);

  for (const key in freqObj1) {
    if (!(key in freqObj2)) {
      return false;
    } else if (freqObj1[key] === freqObj2[key]) {
      return true;
    }
  }
  return false;
}

module.exports = sameFrequency;
