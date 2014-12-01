var big = require('big.js');

var VALID_DOLLAR_STRING_REGEX = /^\$?[\d]+(\.\d{1,2})?$/;

var stripDollarSign = function(dollarString) {
  return dollarString.replace('$', '');
}

var addDollarSign = function(value) {
  return "$" + value
}

exports.toCents = function(dollarString) {
  if(typeof(dollarString) !== 'string') {
    return dollarString;
  }
  dollarString = stripDollarSign(dollarString);
  return parseInt(big(dollarString).times(100).toFixed(0));
}

exports.toDollars = function(dollarString) {
  return parseFloat(stripDollarSign(dollarString));
}

exports.fromCents = function(cents) {
  return addDollarSign((big(cents).div(big(100))).toFixed(2));
}

exports.fromDollars = function(dollars) {
  return addDollarSign(big(dollars).toFixed(2));
}

exports.compare = function(val1, val2) {
  var centVal1 = exports.toCents(val1);
  var centVal2 = exports.toCents(val2);

  if(centVal1 < centVal2) {
    return -1;
  }
  else if (centVal1 > centVal2) {
    return 1;
  }
  else {
    return 0;
  }
}

exports.multipleOf = function(val1, val2) {
  var centVal1 = exports.toCents(val1);
  var centVal2 = exports.toCents(val2);
  return (centVal1 % centVal2) === 0;
}

exports.valid = function(value) {
  return VALID_DOLLAR_STRING_REGEX.test(value);
}
