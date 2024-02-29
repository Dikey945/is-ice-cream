const assert = require('assert');
const isIceCream = require('../lib'); // Import your library function

// Test cases
try {
  // Testing for true values
  assert.strictEqual(isIceCream("I love vanilla"), true, "Vanilla should be recognized as ice cream");
  assert.strictEqual(isIceCream("Chocolate is the best!"), true, "Chocolate should be recognized as ice cream");
  assert.strictEqual(isIceCream("Cookies and cream time"), true, "Cookies and cream should be recognized as ice cream");

  // Testing for false values
  assert.strictEqual(isIceCream("I prefer cake"), false, "Cake is not ice cream");
  assert.strictEqual(isIceCream("Just water, please"), false, "Water is not ice cream");
  assert.strictEqual(isIceCream("Time for pie"), false, "Pie is not ice cream");

  console.log("All tests passed!");
} catch (err) {
  console.error("A test failed:");
  console.error(err.message);
}