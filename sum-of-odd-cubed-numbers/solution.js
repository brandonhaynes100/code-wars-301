'use strict';

function cubeOdd(arr) {
  
  let returnValue = arr.map(element => Math.pow(element, 3))
    .filter(element => element % 2 !== 0)
    .reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
  
  if(returnValue || returnValue === 0) {
    return returnValue
  } else {
    return undefined;
  }
}