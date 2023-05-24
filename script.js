// function threeSum(arr, target) {
// // write your code here
  
// }

// module.exports = threeSum;

function decimalToBinary(decimal) {
  let binary = "";
  if (decimal === 0) {
    binary = "0";
  } else {
    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
    }
  }
  return binary;
}

module.exports = decimalToBinary;