function miniMaxSum(arr) {
  // Write your code here
  const sortedArray = arr.sort((a, b) => a - b);
  const minSum = sortedArray.slice(0, 4).reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  const maxSum = sortedArray.slice(-4).reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  console.log(`${minSum} ${maxSum}`);
}

function miniMaxSumGPT(arr) {
  // Create a sorted copy of the array
  const sortedArray = [...arr].sort((a, b) => a - b);

  // Calculate the minimum and maximum sums
  const minSum = sortedArray.slice(0, 4).reduce((acc, cur) => acc + cur, 0);
  const maxSum = sortedArray.slice(-4).reduce((acc, cur) => acc + cur, 0);

  // Log the results
  console.log(`${minSum} ${maxSum}`);
}
