const sum = (matrix) => {
  let summing = 0;

  // looping rows
  for (let row = 0; row < matrix.length; row++) {
    // looping cols
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[col][row] === 0) break; // to stop execution if meeting point of row&col is same as 0
      summing += matrix[col][row];
    }
  }
  return summing;
};

// This function returns the sum of all elements in a matrix which are not less than zero
