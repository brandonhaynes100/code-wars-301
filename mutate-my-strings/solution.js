'use strict';

function mutateMyStrings(stringOne, stringTwo){
  let returnString = stringOne + '\n';
  for(let i = 0; i < stringOne.length; i++) {
    if(stringOne.charAt(i) !== stringTwo.charAt(i)) {
      returnString += stringTwo.slice(0, i + 1) + stringOne.slice(i + 1) + '\n';
    }

  }
  return returnString;
}