function catFood(input) {
    let catCount = Number(input.shift());
  
    let group1Count = 0;
    let group2Count = 0;
    let group3Count = 0;
    let sum = 0
  
    for (let i = 0; i < catCount; i++) {
      let foodWeight = Number(input.shift());
        sum+=foodWeight
      if (foodWeight >= 100 && foodWeight < 200) {
        group1Count++;
      } else if (foodWeight >= 200 && foodWeight < 300) {
        group2Count++;
      } else if (foodWeight >= 300 && foodWeight < 400) {
        group3Count++;
      }
    }
  
    let foodPricePerKg = 12.45;
    let totalFoodPrice = (sum / 1000) * foodPricePerKg;
    totalFoodPrice = totalFoodPrice.toFixed(2);
  
    console.log(`Group 1: ${group1Count} cats.`);
    console.log(`Group 2: ${group2Count} cats.`);
    console.log(`Group 3: ${group3Count} cats.`);
    console.log(`Price for food per day: ${totalFoodPrice} lv.`);
  }
  catFood([7,100,200,342,300,234,123,212])