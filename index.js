function checkPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If divisible by any number other than 1 and itself
    }
  }
  return true; // The number is prime
}

console.log(checkPrime(5));

function evenOdd(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(evenOdd(3));
console.log(evenOdd(2));
