const diagonalDifference = (arr) => {
  const numberOfArrays = arr.length;

  // add one to the index of the array of arrays

  // get first diagonal sum]
  let sum1 = 0;
  for (let i = 0; i < numberOfArrays; i++) {
    let num = arr[i][i];
    sum1 += num;
  }

  let sum2 = 0;

  let j = arr.length;
  for (let i = 0; i < numberOfArrays; i++) {
    let num = arr[i][j - 1];
    console.log(num);
    sum2 += num;
    j--;
  }
  return Math.abs(sum1 - sum2);
};

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);

// I do think doing them both at the same time is better. Thank you, AI.

const diagonalDifferenceGPT = (arr) => {
  const numRows = arr.length;
  const numCols = arr[0].length; // Assuming all rows have the same length

  // Check if it's a square matrix
  if (numRows !== numCols) {
    throw new Error("Input matrix is not a square matrix.");
  }

  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  for (let i = 0; i < numRows; i++) {
    primaryDiagonalSum += arr[i][i];
    secondaryDiagonalSum += arr[i][numCols - 1 - i];
  }

  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
};
