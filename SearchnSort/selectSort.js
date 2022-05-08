// SELECTION SORTING

//func to find the smallest elememt in a array
const smallestElmt = (arr) => {
  let smallest = arr[0];
  let smallest_index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
      return smallest_index;
    }
  }
};

//SELECT SORTING FUNCTION PROPER
const selectSort = (arr) => {
  let newArr = [];
  for (let i = 0; i < newArr.length; i++) {
    let smallest = smallestElmt(arr);
    newArr.append(arr.pop(smallest)); // this action search the smallest item and add to the newArr
  }
};

console.log(selectSort([3, 5, 66, 6, 2, 7]));

// The code sort an array from smallest to largest

/*
the runtime of this function is 0(n^2) because it firstly go through the array n times to find the smallest 
number and furtherly does thesame action in the second array 'newArr',
which results to [0(n) * 0(n) = 0(n^2)]
*/
