function da (input) {
        let place = Number(input[0])
        let final = place * 7.61 
        let firm = final * 0.18 
        let finalprice = final - firm
        console.log(`The final price is: ${finalprice} lv.`)
        console.log(`The discount is: ${firm} lv.`)
}
da([550])