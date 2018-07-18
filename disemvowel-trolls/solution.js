'use strict';

function disemvowel(str) {
  let filter = /[^aeiou]/gi;
  let returnStr = str.match(filter).join('');
  
  return returnStr;
}