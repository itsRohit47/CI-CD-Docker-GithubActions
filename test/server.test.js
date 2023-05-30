// test.js

const chai = require("chai");
const expect = chai.expect;
const { sumNumbers } = require("../sum"); // Replace './your-module' with the path to your module containing the function to be tested

describe("sumNumbers", () => {
  it("should return the sum of two numbers", () => {
    const result = sumNumbers(5, 10);
    expect(result).to.equal(15);
  });

  it("should return the correct sum for negative numbers", () => {
    const result = sumNumbers(-5, -10);
    expect(result).to.equal(-15);
  });

  it("should return the correct sum for decimal numbers", () => {
    const result = sumNumbers(2.5, 2.5);
    expect(result).to.equal(5);
  });
});
