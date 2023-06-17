function da(input) {
    let countpen = Number(input[0])
    let countmarker = Number(input[1])
    let Preparation = Number(input[2])
    let precent = Number (input[3])
    let pricepen = countpen *5.80
    let pricemarker = countmarker * 7.20
    let pricePreparation = Preparation * 1.20
    let sumMaterial = pricepen + pricemarker + pricePreparation
    let precentFinal = precent / 100
    let FINAL = sumMaterial - (sumMaterial * precentFinal)
    console.log(FINAL)
}
da([2 , 3 , 4 , 25])