function timeConversion(s) {
  // fails the 12PM/12AM test case
  const timeType = s.slice(-2);

  if (timeType === "PM") {
    const splitArray = s.split(":");
    const numToChange = splitArray[0];
    const convertedNumber = (parseInt(numToChange, 10) + 12).toString();
    splitArray[0] = convertedNumber;
    return splitArray.join(":").substring(0, s.length - 2);
  } else {
    return s.substring(0, s.length - 2);
  }
}

function timeConversionGPT(s) {
  const timeType = s.slice(-2);
  const splitArray = s.slice(0, -2).split(":");

  let hours = parseInt(splitArray[0], 10);

  if (timeType === "PM" && hours !== 12) {
    hours += 12;
  } else if (timeType === "AM" && hours === 12) {
    hours = 0;
  }

  const convertedTime = `${hours.toString().padStart(2, "0")}:${
    splitArray[1]
  }:${splitArray[2]}`;
  return convertedTime;
}
