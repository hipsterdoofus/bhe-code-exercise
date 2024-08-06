class Sieve {
  constructor() {
    this.primes = [];
  }

  NthPrime(n) {
    this.primes = populatePrimes(n);
    return this.primes[n];
  }
}

populatePrimes = (n) => {
  // https://stackoverflow.com/questions/29540420/how-can-i-use-the-sieve-of-eratosthenes-to-get-the-nth-prime
  const max = n <= 6 ? 6 : Math.ceil(n * Math.log(n * Math.log(n)));
  const nums = new Uint8Array(max).fill(true);

  for(let i = 0; i <= Math.sqrt(max); i++) {
    if (nums[i]) {
      const num = i + 2; // number not index
      for(let j = num * num; j < max; j += num) {
        const multiple = j - 2;
        nums[multiple] = false;
      }
    }
  }
  
  return nums.reduce((acc, isPrime, index) => {
      if (isPrime) acc.push(index + 2);
      return acc;
  }, []);
};

module.exports = Sieve;
