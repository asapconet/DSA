// THE INTERNALS OF QUICK_SORT ALGO
// This function sorts an array, in form of 'qsort' format

const quickSort = (array) => {
  if (array.length < 2) {
    return array; // when base case condition is archived
  } else {
    let pivot = array[0]; // in recursive case, index can be any location.
    // let less =  [i for i in array[1:] if(i <= pivot) ] (pheudo for LHS of the pivot)
    // uncertain js logic
    for (let i = array[i]; i <= pivot; i++) {
      let less = i;
    }
    // let greater = [i for i in array[1:] if(i > pivot) ] (pheudo for RHS of the pivot)
    for (let i = array[i]; i > pivot; i++) {
      let greater = i;
    }
    return quickSort(less) + pivot + quickSort(greater);
  }
};
console.log(quickSort([2, 5, 33, 8, 4, 1]));


// Every language have it's dedicated inbuilt function for the act