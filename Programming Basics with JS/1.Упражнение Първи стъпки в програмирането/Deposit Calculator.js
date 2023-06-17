function da(input) {
    let depositSum = Number(input[0])
    let TimeDeposit = Number (input[1])
    let yearprecent = Number(input[2])
    let sum 
    console.log( sum= depositSum+ TimeDeposit* ((depositSum * (yearprecent/100) ) / 12))
}
da([200 , 3 , 5.7])