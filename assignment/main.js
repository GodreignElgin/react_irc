// main.js
const fs = require('fs');
const getPrimeOrNegativeOne = require('./primeChecker');

function printPrimesInRange(start, end) {
  let htmlContent = '<html><head><title>Prime Numbers</title></head><body>';

  for (let number = start; number <= end; number++) {
    const result = getPrimeOrNegativeOne(number);

    if (result !== -1) {
      htmlContent += `<p>${number} is a prime number.</p>`;
    }
  }

  htmlContent += '</body></html>';

  // Write the HTML content to a file
  fs.writeFileSync('primeNumbers.html', htmlContent);

  console.log('Prime numbers have been written to primeNumbers.html');
}

// Specify the range you want to check for prime numbers
const startRange = 1;
const endRange = 20;

printPrimesInRange(startRange, endRange);
