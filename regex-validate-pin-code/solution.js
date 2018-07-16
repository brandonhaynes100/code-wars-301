'use strict';
function validatePIN (pin) {
  let regExPinPattern = /(^\d{4}$)|(^\d{6}$)/;
  return regExPinPattern.test(pin);
}