function da(input){
    let printOneList = Number (input[0])           // Цена за отпечатване на една страница                               0.01
    let printOneCover = Number (input[1])          // Цена за отпечатване на една корица                                1
    let precentDiscount = Number (input[2])         // Процентно намаление за отпечатване на хартия                      10
    let amountDesigner = Number (input[3])         // Сумата, която трябва да се заплати на дизайнер                     20
    let precentTotalAmount = Number (input[4])       // Процент от цялата дължима сума, който е заплатен от екипа        20
    let startAmountToPrint = (printOneList * 899) + (printOneCover * 2)       // Начална сума за отпечатване         10.99
    let precent = startAmountToPrint * (precentDiscount / 100)
    let subtractingPercentage = startAmountToPrint - precent     // = 9.891 лв. са разходите за отпечатване след намалението
    let designerSalaries = subtractingPercentage + amountDesigner
    let precentTeam = designerSalaries * (precentTotalAmount / 100)
    let teamTakesOver = designerSalaries - precentTeam
    let roundedTeamTakesOver = teamTakesOver.toFixed(2)
    console.log(`Avtonom should pay ${roundedTeamTakesOver} BGN.`)
}
da([0.02 , 0.50 , 18 , 21 , 50])