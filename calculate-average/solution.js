'use strict';

function find_average(array) {
  // add up every element
  const sumUsingReduce = array.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0
  );
  // divide by total number of elements
  return sumUsingReduce / array.length;
}