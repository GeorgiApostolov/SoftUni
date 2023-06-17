function da(input) {
    let a = Number(input[0])
    let b = Number(input[1])
    let c = Number(input[2])
    let sum = a + b + c
    let minute = Math.floor(sum / 60)
    let seconds = sum % 60
    if (seconds < 10) {
        console.log(`${minute}:0${seconds}`)
    }else
    {
        console.log(`${minute}:${seconds}`)
    }
}
da([14,12,10])