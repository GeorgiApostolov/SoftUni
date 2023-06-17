function numbersDivisibleBy9(input) {
    let start = Number (input[0])
    let end = Number(input[1])
    let sum = 0
    for (let index = start; index <= end; index++) {
        if (index % 9 == 0) {
            sum += index    
            
        }
        
    }
    console.log(`The sum: ${sum}`)
    for (let index2 = start; index2 <= end; index2++) {
        if (index2 % 9 == 0) {
            console.log(index2)
        }
        
    }

}
  numbersDivisibleBy9([1 , 100])