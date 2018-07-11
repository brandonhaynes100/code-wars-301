'use strict';
function fixTheMeerkat(arr) {
  let indexZero = arr[0];
  let indexTwo = arr[2];
  arr[2] = indexZero;
  arr[0] = indexTwo;
  return arr;
 }