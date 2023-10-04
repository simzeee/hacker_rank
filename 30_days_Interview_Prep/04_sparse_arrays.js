function matchingStrings(strings, queries) {
  // go through each string and create an object with the key being the string and the value being how many times it exists

  const howMany = {};
  strings.forEach((str) => {
    if (!howMany[str]) {
      howMany[str] = 1;
    } else {
      howMany[str] = howMany[str] + 1;
    }
  });

  // iterate through the query strings as keys and push to a result array

  const result = [];
  queries.forEach((queryString) => {
    
    if (howMany[queryString] !== undefined) {
      result.push(howMany[queryString]);
    } else {
      
      result.push(0);
    }
  });
  
  return result;
}

// console.log(
//   matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
// );

function matchingStringsGPT(strings, queries) {
  // Use a Map to store the counts of strings
  const howMany = new Map();

  // Count the occurrences of each string
  strings.forEach((str) => {
    howMany.set(str, (howMany.get(str) || 0) + 1);
  });

  // Use map to create the result array
  const result = queries.map((queryString) => {
    return howMany.get(queryString) || 0;
  });

  return result;
}

console.log(
  matchingStringsGPT(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
);