function da (input) {
    let priceHoliday = Number (input[0])
    let puzel = Number (input[1] )
    let barby = Number (input[2] )
    let bear = Number (input[3] )
    let minions = Number (input[4] )
    let trucks = Number (input[5])
    let TotalToys = puzel + barby + bear + minions + trucks
    let puzelPrice = puzel * 2.60
    let barbyPrice = barby * 3
    let bearPrice = bear * 4.10
    let minionsPrice = minions * 8.20
    let trucksPrice = trucks  * 2
    let TotalPrice = puzelPrice + barbyPrice + bearPrice + minionsPrice + trucksPrice
    let profit
    if (TotalToys >= 50) {
        let discount = TotalPrice * 0.25
        let finalPrice =  TotalPrice - discount
        let rent = finalPrice * 0.10
         profit = finalPrice - rent
    }
    else 
    {
        let rent = TotalPrice * 0.1
        profit = TotalPrice - rent
    }
    if (profit > priceHoliday) {
        let FINAL = profit - priceHoliday
        let FINAL2 = FINAL.toFixed(2)
        console.log(`Yes! ${FINAL2} lv left.`)
    }
    else if (profit < priceHoliday) {
        let FINAL = priceHoliday - profit
        let FINAL2 = FINAL.toFixed(2)
        console.log(`Not enough money! ${FINAL2} lv needed.`)
    }
}
da([320 , 8 , 2 , 5 , 5 , 1])