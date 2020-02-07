import { isEqual } from 'lodash';

const getLetterCount = (string) => {
  const letters = string.split('');
  const letterCount = {};

  letters.forEach((letter) => {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter] += 1;
    }
  });

  return letterCount;
};

// \s for white spaces, + for 1 or more.
const formatString = (string) => string.toLowerCase().replace(/\s+/g, '');

const isAnagram = (string1, string2) => {
  const string1LetterCount = getLetterCount(formatString(string1));
  const string2LetterCount = getLetterCount(formatString(string2));

  // deep equality check.
  return isEqual(string1LetterCount, string2LetterCount);
};


export { getLetterCount, formatString, isAnagram };
