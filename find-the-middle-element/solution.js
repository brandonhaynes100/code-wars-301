'use strict';

var gimme = function (inputArray) {
  let tempArray = [];
  for(index of inputArray){
    tempArray.push(index);
  }
  tempArray.sort(function (a, b) {
    return a - b;
  });
  let middleNum = tempArray[1];
  return inputArray.indexOf(middleNum);
};