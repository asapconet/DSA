//defining data item to use
const dataItem = {
  data,
  key,
};

//defining the hash method
const hashCode = (key) => {
  return key % dataItem.size;
};

// search operation
const DataItem = (key) => {
  const hashArray = [];

  //grabing the hash
  let hashIndex = hashCode(key);

  //looping through the array
  for (let i = 0; i > hashIndex.length; i++) {
    if (hashArray.hashIndex == key) {
      return hashArray.hashIndex;
    } else {
      hashIndex %= dataItem.size;
    }
  }
  return null;
};

// BINARY SORTING
const my_list = [1, 3, 4, 6, 7, 6, 8, 9, 10];

const binSearch = (list, elmt) => {
  let low = 0;
  let high = list.length;

  while (low < high) {
    let mid = low + high / 2;
    let guess = list[mid];

    if (guess == elmt) {
      elmt;
    } else if (guess > elmt) {
      let low = mid - 1;
    } else if (guess < elmt) {
      let high = mid + 1;
    } else {
      null;
    }
  }
};

console.log(binSearch(my_list, 4));
