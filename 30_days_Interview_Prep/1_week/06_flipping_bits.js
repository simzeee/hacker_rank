const flippingBits = (n) => {
  console.log("input", n);

  let binaryStr = n.toString(2).padStart(32, "0");

  let flippedStr = "";
  console.log("binaryStr", binaryStr);

  for (let i = 0; i < 32; i++) {
    flippedStr += binaryStr[i] === "0" ? "1" : "0";
  }

  console.log("flipped str", flippedStr);

  const flippedInt = parseInt(flippedStr, 2);

  return flippedInt;
};

console.log(flippingBits(2147483647));

// repeatedly divide the decimal number by 2 and keep track of the remainders until the quotient becomes zero.

function decimalToBinary(decimalNum) {
  if (decimalNum === 0) {
    return '0';
  }

  let binaryStr = '';
  while (decimalNum > 0) {
    const remainder = decimalNum % 2;
    binaryStr = remainder + binaryStr; // Prepend the remainder to the result
    decimalNum = Math.floor(decimalNum / 2);
  }

  return binaryStr;
}

// Example usage:
const decimalNum = 10;
const binaryStr = decimalToBinary(decimalNum);
console.log(binaryStr); // Output: "1010"