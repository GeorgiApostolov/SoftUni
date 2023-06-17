function da (input) {
    let figure = input[0]
    if (figure == "square") {
        let a = Number(input[1])
        let final = a * a
        let end = final . toFixed(3)
        console.log(end)
    }
    else if (figure == "rectangle") {
        let a = Number(input[1])
        let b = Number(input[2])
        let final = a*b
        let end = final.toFixed(3)
        console.log(end)
    }
    else if (figure == "circle") {
        let a = Number(input[1])
        let area = Math.PI * Math.pow(a, 2)
        let end = area.toFixed(3)
        console.log(end)
    }
    else if (figure == "triangle") {
        let a = Number(input[1])
        let b = Number(input[2])
        let final = (a*b)/2
        let end = final.toFixed(3)
        console.log(end)
    }
}
da(["triangle" , 4.5 , 20])