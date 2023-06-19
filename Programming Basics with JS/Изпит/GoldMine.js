function goldMining(input) {
    let locationsCount = Number(input.shift());
  
    for (let i = 0; i < locationsCount; i++) {
      let expectedAverageGold = Number(input.shift());
      let daysCount = Number(input.shift());
  
      let totalGold = 0;
  
      for (let j = 0; j < daysCount; j++) {
        let goldPerDay = Number(input.shift());
        totalGold += goldPerDay;
      }
  
      let averageGold = totalGold / daysCount;
  
      if (averageGold >= expectedAverageGold) {
        console.log(`Good job! Average gold per day: ${averageGold.toFixed(2)}.`);
      } else {
        let neededGold = expectedAverageGold - averageGold;
        console.log(`You need ${neededGold.toFixed(2)} gold.`);
      }
    }
  }
  goldMining([2
    ,10
    ,3
    ,10
    ,10
    ,11
    ,20
    ,2
    ,20
    ,10])