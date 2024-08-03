class Sieve {
  constructor() {
    this.primes = populatePrimes();
  }

  NthPrime(n) {
    return this.primes[n];
  }
}

populatePrimes = (n = 1000000000) => {
  const max = n;
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
