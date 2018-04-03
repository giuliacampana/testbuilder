// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var prefix1 = cardNumber.substring(0, 1);
  var prefix2 = cardNumber.substring(0, 2);
  var prefix3 = cardNumber.substring(0, 3);
  var prefix4 = cardNumber.substring(0, 4);
  var prefix6 = cardNumber.substring(0, 6);
  var switchPrefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];

  if ((cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) && (switchPrefixes.includes(prefix4) || switchPrefixes.includes(prefix6))) {
  	return 'Switch';
  }
  if (cardNumber.length === 14 && (prefix2 === '38' || prefix2 === '39')) {
  	return 'Diner\'s Club';
  }
  if (cardNumber.length === 15 && (prefix2 === '34' || prefix2 === '37')) {
  	return 'American Express';
  }
  if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && prefix1 === '4') {
  	return 'Visa';
  }
  if (cardNumber.length === 16 && (parseInt(prefix2) >= 51 && parseInt(prefix2) <= 55)) {
  	return 'MasterCard';
  }
  if ((cardNumber.length === 16 || cardNumber.length === 19) && (prefix4 === '6011' || prefix2 === '65' || (parseInt(prefix3) >= 644 && parseInt(prefix3) <= 649))) {
  	return 'Discover';
  }
  if ((cardNumber.length >= 12 && cardNumber.length <= 19) && (prefix4 === '5018' || prefix4 === '5020' || prefix4 === '5038' || prefix4 === '6304')) {
  	return 'Maestro';
  }
  if ((cardNumber.length >= 16 || cardNumber.length <= 19) && ((parseInt(prefix6) >= 622126 && parseInt(prefix6) <= 622925) || (parseInt(prefix3) >= 624 && parseInt(prefix3) <= 626) || (parseInt(prefix4) >= 6282 && parseInt(prefix4) <= 6288))) {
  	return 'China UnionPay';
  }
};


