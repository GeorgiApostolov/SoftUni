function da(input){
    let countChicken = Number(input[0])
    let priceChicken = countChicken * 10.35
    let countFish = Number(input[1])
    let priceFish = countFish * 12.40
    let countVegetable = Number(input[2])
    let priceVegetable = countVegetable * 8.15
    let Sum = priceChicken + priceFish + priceVegetable
    let desert = Sum *0.2
    let shipping = 2.50
    let final = Sum + desert + shipping
    console.log(final)

}
da([9,2,6])