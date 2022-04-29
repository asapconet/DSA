const strings = (inputArray) => {

  //getter method mapping and returning the string with the maximum length
  let maxSize = Math.max(...inputArray.map((x) => x.length));

  //this checks and return the max size of the string from the array
  return inputArray.filter((x) => x.length === maxSize);
};
