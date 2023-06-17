function evenPowersOfTwo(n) {
    for (let i = 0; i <= n; i += 2) {
      let result = Math.pow(2, i);
      console.log(result);
    }
  }
evenPowersOfTwo([6])