function da(input) {
    let team = input[0]
    let souvenir = input[1]
    let countSouvenir = Number (input[2])
    let priceSouvenir = 0
    if (team == "Argentina") {
        if (souvenir == "flags") {
            priceSouvenir = 3.25
            let finalSum = countSouvenir * priceSouvenir
            let roundedFinalSum = finalSum.toFixed(2)
            console.log(`Pepi bought ${countSouvenir} ${souvenir} of ${team} for ${roundedFinalSum} lv.`)
        }
        else if (souvenir == "caps") {
            priceSouvenir = 7.20
            let finalSum = countSouvenir * priceSouvenir
            let roundedFinalSum = finalSum.toFixed(2)
            console.log(`Pepi bought ${countSouvenir} ${souvenir} of ${team} for ${roundedFinalSum} lv.`)
        }
        else if (souvenir == "posters") {
            priceSouvenir = 5.10
            let finalSum = countSouvenir * priceSouvenir
            let roundedFinalSum = finalSum.toFixed(2)
            console.log(`Pepi bought ${countSouvenir} ${souvenir} of ${team} for ${roundedFinalSum} lv.`)
        }
        else if (souvenir == "stickers") {
            priceSouvenir = 1.25
            let finalSum = countSouvenir * priceSouvenir
            let roundedFinalSum = finalSum.toFixed(2)
            console.log(`Pepi bought ${countSouvenir} ${souvenir} of ${team} for ${roundedFinalSum} lv.`)
        }
    }
    else if (team == "Brazil") {
        if (souvenir == "flags") {
            priceSouvenir = 4.20
            let finalSum = countSouvenir * priceSouvenir
            let roundedFinalSum = finalSum.toFixed(2)
            console.log(`Pepi bought ${countSouvenir} ${souvenir} of ${team} for ${roundedFinalSum} lv.`)
        }
        else if (souvenir == "caps") {
            priceSouvenir = 8.50
            let finalSum = countSouvenir * priceSouvenir
            let roundedFinalSum = finalSum.toFixed(2)
            console.log(`Pepi bought ${countSouvenir} ${souvenir} of ${team} for ${roundedFinalSum} lv.`)
        }
        else if (souvenir == "posters") {
            priceSouvenir = 5.35
            let finalSum = countSouvenir * priceSouvenir
            let roundedFinalSum = finalSum.toFixed(2)
            console.log(`Pepi bought ${countSouvenir} ${souvenir} of ${team} for ${roundedFinalSum} lv.`)
        }
        else if (souvenir == "stickers") {
            priceSouvenir = 1.20
            let finalSum = countSouvenir * priceSouvenir
            let roundedFinalSum = finalSum.toFixed(2)
            console.log(`Pepi bought ${countSouvenir} ${souvenir} of ${team} for ${roundedFinalSum} lv.`)
        }

    }
    else if (team == "Croatia") {
        if (souvenir == "flags") {
            priceSouvenir = 2.75
            let finalSum = countSouvenir * priceSouvenir
            let roundedFinalSum = finalSum.toFixed(2)
            console.log(`Pepi bought ${countSouvenir} ${souvenir} of ${team} for ${roundedFinalSum} lv.`)
        }
        else if (souvenir == "caps") {
            priceSouvenir = 6.90
            let finalSum = countSouvenir * priceSouvenir
            let roundedFinalSum = finalSum.toFixed(2)
            console.log(`Pepi bought ${countSouvenir} ${souvenir} of ${team} for ${roundedFinalSum} lv.`)
        }
        else if (souvenir == "posters") {
            priceSouvenir = 4.95
            let finalSum = countSouvenir * priceSouvenir
            let roundedFinalSum = finalSum.toFixed(2)
            console.log(`Pepi bought ${countSouvenir} ${souvenir} of ${team} for ${roundedFinalSum} lv.`)
        }
        else if (souvenir == "stickers") {
            priceSouvenir = 1.10
            let finalSum = countSouvenir * priceSouvenir
            let roundedFinalSum = finalSum.toFixed(2)
            console.log(`Pepi bought ${countSouvenir} ${souvenir} of ${team} for ${roundedFinalSum} lv.`)
        }

    }
    else if (team == "Denmark") {
        if (souvenir == "flags") {
            priceSouvenir = 3.10
            let finalSum = countSouvenir * priceSouvenir
            let roundedFinalSum = finalSum.toFixed(2)
            console.log(`Pepi bought ${countSouvenir} ${souvenir} of ${team} for ${roundedFinalSum} lv.`) 
        }
        else if (souvenir == "caps") {
            priceSouvenir = 6.50
            let finalSum = countSouvenir * priceSouvenir
            let roundedFinalSum = finalSum.toFixed(2)
            console.log(`Pepi bought ${countSouvenir} ${souvenir} of ${team} for ${roundedFinalSum} lv.`) 
        }
        else if (souvenir == "posters") {
            priceSouvenir = 4.80
            let finalSum = countSouvenir * priceSouvenir
            let roundedFinalSum = finalSum.toFixed(2)
            console.log(`Pepi bought ${countSouvenir} ${souvenir} of ${team} for ${roundedFinalSum} lv.`) 
        }
        else if (souvenir == "stickers") {
            priceSouvenir = 0.90
            let finalSum = countSouvenir * priceSouvenir
            let roundedFinalSum = finalSum.toFixed(2)
            console.log(`Pepi bought ${countSouvenir} ${souvenir} of ${team} for ${roundedFinalSum} lv.`) 
        }

    }
    if (team != "Argentina" && team != "Brazil" && team != "Croatia" && team != "Denmark") {
        console.log("Invalid country!")
    }
    else if (souvenir != "flags" && souvenir != "caps" && souvenir != "posters" && souvenir != "stickers") {
        console.log("Invalid stock!")
    }
}

da(["Argentina" , "shirts" , 35])