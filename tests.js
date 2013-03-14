require("mocha");
var prettyRange = require("./index");
var should = require("should");

describe("prettyRange", function() {
   it("should throw an error when input is undefined", function() {
      prettyRange.should.throw();
   });
   it("should format consecutive numbers with dash", function() {
      return prettyRange([1,2,3]).should.equal("1-3");
   });
   it("should format place comma between number sequences", function() {
      return prettyRange([1,2,3,5,6,7]).should.equal("1-3, 5-7");
   });
   it("should not put a dash between a set of only two numbers", function() {
      return prettyRange([1,2,5,6,7]).should.equal("1, 2, 5-7");
   });
   it("should correctly sort input", function() {
      return prettyRange([7,5,6,3,4,10]).should.equal("3-7, 10");
   });
});