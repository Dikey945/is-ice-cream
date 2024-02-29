// List of popular ice cream flavors
const iceCreamFlavors = ['vanilla', 'chocolate', 'strawberry', 'mint chocolate chip', 'cookies and cream', 'rocky road', 'pistachio', 'neapolitan', 'cookie dough', 'salted caramel'];

/**
 * Checks if the string contains a popular ice cream flavor.
 * @param {string} str - The string to check.
 * @return {boolean} True if the string contains an ice cream flavor, false otherwise.
 */
function isIceCream(str) {
  return iceCreamFlavors.some(flavor => str.toLowerCase().includes(flavor));
}

// Export the function
module.exports = isIceCream;