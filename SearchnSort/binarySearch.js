// BINARY SORTING
const my_list = [1, 3, 4, 6, 7, 6, 8, 9, 10];

const binSearch = (list, elmt) => {
  let low = 0; //LB
  let high = list.length; // UB

  while (low < high) {
    let mid = low + high / 2; // divides the list by two
    let guess = list[mid]; //sets the new UB

    if (guess == elmt) {
      elmt; // this is the element being searched
    } else if (guess > elmt) {
      let low = mid - 1; // sets the new LB to other side of the divided item
    } else if (guess < elmt) {
      let high = mid + 1;
    } else {
      null;
    }
  }
};

console.log(binSearch(my_list, 4));

/*
Now this data struc divides the elements into two and search half of it, and 
keep doing thesame until it reaches the indivisible limit of the size of the elements.
i.e it continue bisecting the an array by half until it archieves it goal of finding the element in 
question.
*/
