'use strict';
function abbrevName(name) {
  let fullname = name;
  let regex = /(\w+)\s(\w+)/;
  let firstName = fullname.replace(regex, '$1');
  let lastName = fullname.replace(regex, '$2');
  return firstName[0].toUpperCase() + '.' + lastName[0].toUpperCase();
}