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