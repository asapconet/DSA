const charCount = (s1, s2) => {
  //separates all the characters in the string
  let char = s1.split(""),
    count = 0;
    //looping through s1
  while (char.length) {
    //this takes out the last item in the array and sends to the 'newChar'
    let newChar = char.pop();
    //checking if strings in s2 is contained in the staged string in s2
    if (s2.includes(newChar)) {
      count++; //if true then count be added
      s2 = s2.replace(newChar, "");
    }
  }
  return count;
};

//this funtion finds the number of common characters in the strings passed 's1 & s2'
