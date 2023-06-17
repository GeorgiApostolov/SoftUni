function da (input) {
    let lentgh = Number(input[0])
    let l = Number(input[1])
    let h = Number(input[2])
    let precent = Number(input[3])
    let v = lentgh * l * h
    let vl = v / 1000
    let finalPrecent = precent / 100
    let final = vl * (1-finalPrecent)
    console.log(final)
}
da([105,77,89,18.5])