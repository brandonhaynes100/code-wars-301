function insertDash(num) {
  // convert the input to a string
  let stringNum = num.toString();
  // create a blank string to populate as we evaluate the input
  let returnString = '';

  // loop through the input to look for odds
  for(let i = 0; i < stringNum.length - 1; i++) {
    // add the current index to the returnString
    returnString += stringNum[i];
    // check to see if the current index is odd
    if(parseInt(stringNum[i]) % 2 > 0) {
      // check if the next index is odd
      if(stringNum[i + 1] % 2 > 0) {
        returnString += '-';
      }
    }
  }
  returnString += stringNum[stringNum.length - 1];
  return returnString;
}