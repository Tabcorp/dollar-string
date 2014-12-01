# Dollar String

> Helper utilities for dealing with dollar strings.

[![NPM](http://img.shields.io/npm/v/dollar-string.svg?style=flat)](https://npmjs.org/package/dollar-string)
[![License](http://img.shields.io/npm/l/dollar-string.svg?style=flat)](https://github.com/TabDigital/dollar-string)

[![Build Status](http://img.shields.io/travis/TabDigital/dollar-string.svg?style=flat)](http://travis-ci.org/TabDigital/dollar-string)
[![Dependencies](http://img.shields.io/david/TabDigital/dollar-string.svg?style=flat)](https://david-dm.org/TabDigital/dollar-string)
[![Dev dependencies](http://img.shields.io/david/dev/TabDigital/dollar-string.svg?style=flat)](https://david-dm.org/TabDigital/dollar-string)


## Getting started

```
npm install dollar-string
```

```js
var dollarString = require('dollar-string');
```

## Usage

### dollarString.valid(value)

```js
console.log(dollarString.valid("$1.00"));  //TRUE
console.log(dollarString.valid("$2.53"));  //TRUE
console.log(dollarString.valid("$10.2"));  //TRUE
console.log(dollarString.valid("$5"));     //TRUE
console.log(dollarString.valid("1.00"));   //TRUE

console.log(dollarString.valid("$1.004")); //FALSE
console.log(dollarString.valid("$1.00c")); //FALSE
console.log(dollarString.valid("$1.a0"));  //FALSE
```

### dollarString.toCents(value)


``` js
console.log(dollarString.toCents("$1.00")); // 100
console.log(dollarString.toCents('$2.22')); // 222
console.log(dollarString.toCents('$1.50')); // 150
```

### dollarString.toDollars(value)


``` js
console.log(dollarString.toDollars("$1.00")); // 1
console.log(dollarString.toDollars('$2.22')); // 2.22
console.log(dollarString.toDollars('$1.50')); // 1.5
```

### dollarString.fromCents(value)


``` js
console.log(dollarString.fromCents(100)); // '$1.00'
console.log(dollarString.fromCents(222)); // '$2.22'
console.log(dollarString.fromCents(150)); // '$1.50'
```

### dollarString.fromDollars(value)


``` js
console.log(dollarString.fromDollars(1));    // '$1.00'
console.log(dollarString.fromDollars(2.22)); // '$2.22'
console.log(dollarString.fromDollars(1.5));  // '$1.50'
```

### dollarString.compare(val1, val2)

returns
* -1 if val1 is smaller than val2
* 0  if both values are equal
* 1  if val1 is greater than val2

``` js
console.log(dollarString.compare("$1.00", "$2.00"));  // -1
console.log(dollarString.compare("$10.00", "$10"));   // 0
console.log(dollarString.compare("$2.00" , "$1.00")); // 1
```

### dollarString.multipleOf(val1, val2)

returns
* true if val1 is a multiple of val2
* false otherwise

``` js
console.log(dollarString.multipleOf("$2.00", "$1.25"));  // false
console.log(dollarString.compare("$10.00", "$1"));   // true
```
