function da(input) {
    let yearTax = Number(input[0])
    let shoes = yearTax - (yearTax * 0.4) 
    let outfit = shoes - (shoes * 0.2)
    let ball = outfit / 4
    let accessories = ball / 5
    let final = yearTax + shoes + outfit + ball + accessories
    console.log (final)
}
da([550])