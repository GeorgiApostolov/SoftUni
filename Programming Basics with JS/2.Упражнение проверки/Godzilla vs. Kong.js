function da(input) {
    let Buget = Number(input[0])  // buget za filma
    let Statist = Number(input[1])  // kolko statisti
    let PriceClothes = Number(input[2]) //cena na oblekloto
    let dekor = Buget * 0.10  // Dekor
   
    if (Statist > 150) {
        let otstupka = PriceClothes * 0.10
        let finalotstupka = PriceClothes - otstupka
        let sumClothes = Statist * finalotstupka // Suma za oblekloto
        let sum = dekor + sumClothes  // obshta suma za filma
   
        if (sumClothes < Buget) {
            let final = Buget - sum
            let roundedfinal = final.toFixed(2);
            console.log("Action!")
            console.log (`Wingard starts filming with ${roundedfinal} leva left.`)
        }
        else if (sumClothes > Buget) {
            let final = sum - Buget 
            let roundedfinal = final.toFixed(2);
            console.log("Not enough money!")
            console.log (`Wingard needs ${roundedfinal} leva more.`)
        }
    }
    else if (Statist < 150) {
        let sumClothes = Statist * PriceClothes // Suma za oblekloto
        let sum = dekor + sumClothes  // obshta suma za filma
   
        if (sumClothes < Buget) {
            let final = Buget - sum
            let roundedfinal = final.toFixed(2);
            console.log("Action!")
            console.log (`Wingard starts filming with ${roundedfinal} leva left.`)
        }
        else if (sumClothes > Buget) {
            let final = sum - Buget 
            let roundedfinal = final.toFixed(2);
            console.log("Not enough money!")
            console.log (`Wingard needs ${roundedfinal} leva more.`)
    }}
}
da([20000 , 120 , 55.5])