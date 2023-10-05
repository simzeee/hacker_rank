function plusMinus(arr) {
  const count = { positive: 0, negative: 0, zero: 0 };

  arr.forEach((num) => {
    if (num > 0) {
      count.positive = count.positive + 1;
    }
    if (num < 0) {
      count.negative = count.negative + 1;
    }
    if (num === 0) {
      count.zero = count.zero + 1;
    }
  });

  const positiveRatio = count.positive / arr.length;
  const negativeRatio = count.negative / arr.length;
  const zeroRatio = count.zero / arr.length;
  console.log(
    `${positiveRatio.toFixed(6)}\n${negativeRatio.toFixed(
      6
    )}\n${zeroRatio.toFixed(6)}`
  );
}

// ChatGPT's answer

function plusMinusGPT(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (const num of arr) {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  const totalCount = arr.length;
  const positiveRatio = positiveCount / totalCount;
  const negativeRatio = negativeCount / totalCount;
  const zeroRatio = zeroCount / totalCount;

  console.log(
    `${positiveRatio.toFixed(6)}\n${negativeRatio.toFixed(
      6
    )}\n${zeroRatio.toFixed(6)}`
  );
}
