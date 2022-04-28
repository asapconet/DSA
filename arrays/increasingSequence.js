const array = (sequence) => {
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      if (count > 1) {
        return false;
      }
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
        return false;
    }
  }
  return true;
};

// This functions ensures increasing sequence in an array of intergers without
// removing more than one element from the array
