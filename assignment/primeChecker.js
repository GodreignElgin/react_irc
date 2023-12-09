// primeChecker.js

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function getPrimeOrNegativeOne(inputNumber) {
  if (isPrime(inputNumber)) {
    return inputNumber;
  } else {
    return -1;
  }
}

module.exports = getPrimeOrNegativeOne;
