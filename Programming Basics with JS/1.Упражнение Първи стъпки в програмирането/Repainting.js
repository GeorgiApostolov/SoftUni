function da(input) {
        let nylon = Number ((input[0] + 2) * 1.5)      
        let precent = input[1] * 0.10 
        let paint = Number ((input[1] + precent )* 14.50)    
        let PaintThinner = Number (input[2] * 5.00)    
        let hours = Number (input[3])     
        let torbichki = 0.40 
        let obshto = nylon + paint + PaintThinner + torbichki
        let SumMaistor = (obshto * 0.30) * hours
        let FINAL = obshto + SumMaistor
        console.log (FINAL)
}
da([10 , 11 , 4 , 8])