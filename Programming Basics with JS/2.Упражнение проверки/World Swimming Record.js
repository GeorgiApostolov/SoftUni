function da(input){
    let recordSeconds = Number(input[0])  //10464
    let lengthMeter = Number(input[1]) // 1500
    let timeSecondsMeter = Number(input[2])    // 20
    let a = lengthMeter * timeSecondsMeter  // 30000
    let delay = lengthMeter / 15     // 1250
    let roundedDelay = Math.floor(delay)
    finalDelay = roundedDelay * 12.5
    let total = a + finalDelay
    if (recordSeconds <= total) {
        let secondsLeft = total - recordSeconds
        let roundedSecondsLeft = secondsLeft.toFixed(2)
        console.log(`No, he failed! He was ${roundedSecondsLeft} seconds slower.`)
    }
    else if (recordSeconds > total) {
        let roundedTotal = total.toFixed(2)
        console.log(`Yes, he succeeded! The new world record is ${roundedTotal} seconds.`)
    }
}
da([55555.67 , 3017 , 5.03])