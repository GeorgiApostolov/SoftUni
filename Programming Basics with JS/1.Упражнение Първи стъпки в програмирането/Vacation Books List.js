function da(input) {
    let countList = Number (input[0])
    let lists = Number(input[1])
    let countday = Number(input[2])
    let hours = countList / lists 
    let final = hours / countday
    console.log(final)
} 
da([212 , 20 , 2])