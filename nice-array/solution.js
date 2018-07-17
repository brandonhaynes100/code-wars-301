'use strict';

function isNice(arr){
  
  // variable for tracking whether a match was found
  let matchFound = false;
  
  // verify correct type of input
  if(!Array.isArray(arr) || !arr.length) {
    return false;
  }
  
  // inspect each element in the array
  for(let i = 0; i < arr.length; i++) {
    // no match has been found yet, because we just started
    matchFound = false;
    // compare each element to every other element
    for(let j = 0; j < arr.length; j++) {
      // if the difference is exactly 1, that's nice
      if(Math.abs(arr[i] - arr[j]) === 1) {
        matchFound = true;
      }
    }
    // if no match was found for any given value, return false
    if(matchFound === false) {
      return false;
    }
  }
  // when the loop finishes, that means no value triggered a false, and they've all been inspected.
  return true;
}