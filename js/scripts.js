// checking if number is prime

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  //optional alternative way of checking
  //let root = Math.ceil(Math.sqrt(num));
  // for (let i = 2; i <= root; i++) {
  //   if (num % i === 0) {
  //     return false;
  //   }
  // }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// collects prime numbers between specified boundaries
function primeNum(min, max) {
  const prime = [];
  for (let i = min; i <= max; i++) {
    if (isPrime(i) === true) {
      prime.push(i);
    }
  }

  return prime;
}

console.log(primeNum(9500, 10000));
