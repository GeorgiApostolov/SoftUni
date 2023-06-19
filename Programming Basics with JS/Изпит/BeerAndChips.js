function da(input) {
    let footballFan = input[0]
    let earlyBuget = Number (input[1])
    let countBeer = Number(input[2])
    let countChips = Number(input[3])
    let priceTotalBeer = 1.20 * countBeer
    let priceOneChips = priceTotalBeer * 0.45
    let totalPriceChips = priceOneChips * countChips
    let roundedTotalPriceChips = Math.ceil(totalPriceChips)
    let TotalPrice = roundedTotalPriceChips + priceTotalBeer

    if (TotalPrice <= earlyBuget) {
        let moneyLeftOver = earlyBuget - TotalPrice
        let roundedMoneyLeftOver = moneyLeftOver.toFixed(2)
        console.log(`${footballFan} bought a snack and has ${roundedMoneyLeftOver} leva left.`)
    }
    else if (TotalPrice > earlyBuget) {
        let moneyLeftOver = TotalPrice - earlyBuget
        let roundedMoneyLeftOver = moneyLeftOver.toFixed(2)
        console.log(`${footballFan} needs ${roundedMoneyLeftOver} more leva!`)
    }
}
da(["Valetin" , 5 , 2 , 4])