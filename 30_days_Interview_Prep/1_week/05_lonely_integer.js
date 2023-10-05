const lonely_integerGPT = (a) => {
  const elementCountMap = new Map();

  a.forEach((element) => {
    if (elementCountMap.has(element)) {
      elementCountMap.set(element, elementCountMap.get(element) + 1);
    } else {
      elementCountMap.set(element, 1);
    }
  });

  const minCount = Math.min(...elementCountMap.values());

  const leastFrequentElements = [...elementCountMap.entries()]
    .filter(([element, count]) => count === minCount)
    .map(([element]) => element);

  return leastFrequentElements;
};

const myArray = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const leastFrequent = lonely_integerGPT(myArray);
console.log(leastFrequent); // Output: [1, 3]

function lonely_integer(a) {
  const occurrences = {};

  a.forEach((el) => {
    if (el in occurrences) {
      occurrences[el]++;
    } else {
      occurrences[el] = 1;
    }
  });

  let result = undefined

  for (const key in occurrences) {
    if (occurrences[key] === 1) {
      result = parseInt(key, 10);
      break
    }
  }
  return result;
}

const test2 = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const result2 = lonely_integer(test2);
console.log(result2); // Output: [1, 3]
