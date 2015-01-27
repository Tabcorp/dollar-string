var should         = require('should'),
    dollarString   = require('../src/index');

describe('DollarString', function(){

  describe('ToCents', function() {
    it('should convert dollar string to number in cents', function() {
      dollarString.toCents('$1.00').should.equal(100);
    });

    it('should convert dollar string with cents to number in cents', function() {
      dollarString.toCents('$1.50').should.equal(150);
      dollarString.toCents('$2.22').should.equal(222);
    });

    it('should return null or undefined for invalid input', function() {
      should.not.exist(dollarString.toCents('abc'));
      should.not.exist(dollarString.toCents(''));
      should.not.exist(dollarString.toCents());
    });
  });

  describe('ToDollars', function() {
    it('should convert dollar string to number in dollars', function() {
      dollarString.toDollars('$1.00').should.equal(1);
    });

    it('should convert dollar string with cents to number in dollars', function() {
      dollarString.toDollars('$1.50').should.equal(1.5);
      dollarString.toDollars('$2.22').should.equal(2.22);
    });

    it('should return null or undefined for invalid input', function() {
      should.not.exist(dollarString.toDollars('abc'));
      should.not.exist(dollarString.toDollars(''));
      should.not.exist(dollarString.toDollars());
    });
  });

  describe('FromCents', function() {
    it('should convert cents to dollar string', function() {
      dollarString.fromCents(100).should.equal('$1.00');
      dollarString.fromCents(150).should.equal('$1.50');
      dollarString.fromCents(222).should.equal('$2.22');
    });
  });

  describe('FromDollars', function() {
    it('should convert dollars to dollar string', function() {
      dollarString.fromDollars(1).should.equal('$1.00');
      dollarString.fromDollars(1.5).should.equal('$1.50');
      dollarString.fromDollars(2.22).should.equal('$2.22');
    });
  });

  describe('Compare', function() {
    it('should return -1 when first value is less than second', function() {
      dollarString.compare("$1.00", "$2.00").should.equal(-1);
      dollarString.compare("$2.00", "$10.00").should.equal(-1);
      dollarString.compare("$3.30", "$3.40").should.equal(-1);
    });

    it('should return 1 when first value is greater than second', function() {
      dollarString.compare("$2.00" , "$1.00").should.equal(1);
      dollarString.compare("$10.00", "$2.00").should.equal(1);
      dollarString.compare("$3.40" , "$3.30").should.equal(1);
    });

    it('should return 0 when first value and second value are equal', function() {
      dollarString.compare("$2.00" , "$2.00").should.equal(0);
      dollarString.compare("$10.00", "$10").should.equal(0);
      dollarString.compare("$1"    , "$1.0").should.equal(0);
    });
  });

  describe('MultipleOf', function() {
    it('should return false when first value is not a multiple of the second', function() {
      dollarString.multipleOf("$1.00", "$1.50").should.equal(false);
      dollarString.multipleOf("$1.00", "$2.00").should.equal(false);
    });

    it('should return true when first value is a multiple of the second', function() {
      dollarString.multipleOf("$3.00", "$1.50").should.equal(true);
      dollarString.multipleOf("$2.00", "$1.00").should.equal(true);
      dollarString.multipleOf("$2.00", "$2").should.equal(true);
    });
  });

  describe('Valid', function() {
    it('should return true for valid dollar strings', function() {
      dollarString.valid("$1.00").should.equal(true);
      dollarString.valid("$2.53").should.equal(true);
      dollarString.valid("$10.2").should.equal(true);
      dollarString.valid("$5").should.equal(true);
      dollarString.valid("1.00").should.equal(true);
      dollarString.valid("2.53").should.equal(true);
      dollarString.valid("10.2").should.equal(true);
      dollarString.valid("5").should.equal(true);
    });
    it('should return false for invalid dollar strings', function() {
      dollarString.valid("$1.004").should.equal(false);
      dollarString.valid("$1.00c").should.equal(false);
      dollarString.valid("$1.a0").should.equal(false);
      dollarString.valid("abc").should.equal(false);
      dollarString.valid("").should.equal(false);
      dollarString.valid(123).should.equal(false);
      dollarString.valid({}).should.equal(false);
      dollarString.valid([]).should.equal(false);
      dollarString.valid().should.equal(false);
    });
  })
});
