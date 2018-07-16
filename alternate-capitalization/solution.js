'use strict';

function capitalize(s){
  let sReturn1 = '';
  let sReturn2 = '';
  let arrReturn = [];
  for(let i = 0; i < s.length; i ++) {
    if(i % 2 === 0) {
      sReturn1 += s.charAt(i).toUpperCase();
      sReturn2 += s.charAt(i);      
    } else {
      sReturn1 += s.charAt(i);
      sReturn2 += s.charAt(i).toUpperCase();
    }
  }
  
  arrReturn.push(sReturn1);
  arrReturn.push(sReturn2);
  
  return arrReturn;
};