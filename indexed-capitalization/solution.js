'use strict';

function capitalize(s,arr){
  let returnString = '';
  for(let i = 0; i < s.length; i++) {
    if(arr.includes(i)) {
      returnString += s.charAt(i).toUpperCase();
    } else {
      returnString += s.charAt(i);
    }
  }
  return returnString;
};