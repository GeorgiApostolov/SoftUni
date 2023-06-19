function christmasGifts(input) {
    let command = input.shift();
  
    let adultsCount = 0;
    let kidsCount = 0;
    let toysPrice = 5;
    let sweatersPrice = 15;
  
    let toysTotalPrice = 0;
    let sweatersTotalPrice = 0;
  
    while (command !== "Christmas") {
      let age = Number(command);
  
      if (age <= 16) {
        kidsCount++;
        toysTotalPrice += toysPrice;
      } else {
        adultsCount++;
        sweatersTotalPrice += sweatersPrice;
      }
  
      command = input.shift();
    }
  
    console.log(`Number of adults: ${adultsCount}`);
    console.log(`Number of kids: ${kidsCount}`);
    console.log(`Money for toys: ${toysTotalPrice}`);
    console.log(`Money for sweaters: ${sweatersTotalPrice}`);
  }
  christmasGifts([18 , 20 , 48 , 45 , 56 , 37 , 12 , 14 , "Christmas"])