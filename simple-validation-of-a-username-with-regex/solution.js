'use strict';

function validateUsr(username) {
  let res =  /^(([a-z]|[0-9]|[\_]){4,16})$/.test(username);
  return res;
}