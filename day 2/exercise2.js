/* 
    1. Ganjil genap number
*/

// let number = 22

// if(number % 2 == 0){
//     console.log(`${number} adalah bilangan genap`)
// }else{
//     console.log(`${number} adalah bilangan ganjil`)
// }

/* 
    2. hitung IMT 
        IMT = massa(kg) / tinggi(m)^2
        cases: 
            a. IMT < 18.5 berat badang kurang 
            b. 18.5 - 24.9 ideal
            c. 25.0 - 29.9 BB lebih
            d. 30.0 - 39.9 BB over
            e. IMT > 39.9 obesitas
*/

// let massa = 58
// let tinggi = 174
// let IMT;

// // convert cm to m
// tinggi /= 100

// IMT = massa / Math.pow(tinggi, 2)
// console.log(IMT)

// if(IMT < 18.5){
//     console.log(`Berat:${massa}kg \nTinggi;${tinggi}cm \nBerat badan kurang`)
// }else if(IMT <= 24.9 && IMT >= 18.5){
//     console.log(`Berat:${massa}kg \nTinggi;${tinggi}cm \nBerat badan ideal`)
// }else if(IMT >= 25.0 && IMT <= 29.9){
//     console.log(`Berat:${massa}kg \nTinggi;${tinggi}cm \nBerat badan lebih`)
// }else if(IMT >= 30.0 && IMT <= 39.9){
//     console.log(`Berat:${massa}kg \nTinggi;${tinggi}cm \nBerat badan over`)
// }else{
//     console.log(`Berat:${massa}kg \nTinggi;${tinggi}cm \nObesitas`)
// }

/*  
    3. Fruits market
        - fitur stock
        - input quantity, handle stock 
        - input nominal uang bayar (kurang(tx batal), pas(thanks), lebih(thanks kembalian))
*/

// prices
let applePrice = 10000
let grapePrice = 15000
let orangePrice = 20000

// stocks
let appleStocks = 10
let grapeStocks = 5
let orangeStocks = 9

// totalPrices
let totalPriceApple;
let totalPriceGrape;
let totalPriceOrange;


// apple
let inputApple = prompt(`Input Quantity of Apple = `)
while(inputApple > appleStocks){
    alert(`Available stocks : ${appleStocks} please try again ...`)
    inputApple = prompt(`Input Quantity of Apple = `)
}
appleStocks -= inputApple

// grape
let inputGrape = prompt(`Input Quantity of Grape = `)
while(inputGrape > grapeStocks){
    alert(`Available stocks : ${grapeStocks} please try again ...`)
    inputGrape = prompt(`Input Quantity of Grapes = `)
}
grapeStocks -= inputGrape

// orange
let inputOrange = prompt(`Input Quantity of Orange = `)
while(inputOrange > orangeStocks){
    alert(`Available stocks : ${orangeStocks} please try again ...`)
    inputOrange = prompt(`Input Quantity of orange`)
}
orangeStocks -= inputOrange
    


totalPriceApple = applePrice * inputApple
let totalPriceAppleFormatted = new Intl.NumberFormat('id-ID', {style: "currency", currency: "IDR"}).format(totalPriceApple)
totalPriceGrape = grapePrice * inputGrape
let totalPriceGrapeFormatted = new Intl.NumberFormat('id-ID', {style: "currency", currency: "IDR"}).format(totalPriceGrape)
totalPriceOrange = orangePrice * inputOrange
let totalPriceOrangeFormatted = new Intl.NumberFormat('id-ID', {style: "currency", currency: "IDR"}).format(totalPriceOrange)

let totalPrice = totalPriceApple + totalPriceGrape + totalPriceOrange
let totalPriceFormatted = new Intl.NumberFormat('id-ID', {style: "currency", currency: "IDR"}).format(totalPrice)


alert(`Total price of Apples : ${totalPriceAppleFormatted} \n Total price of Grapes : ${totalPriceGrapeFormatted} \n Total price of Oranges : ${totalPriceOrangeFormatted} \n Total price of Apple, Grape and Orange = ${totalPriceFormatted}`)

// payment
const payment = parseInt(prompt("Please input your payment :"))
// return balances
let returnBalance = payment - totalPrice
returnBalance = new Intl.NumberFormat('id-ID', {style: "currency", currency: "IDR"}).format(returnBalance)

if(payment < totalPrice){
    alert(`Maaf uang anda kurang !`)
}else if(payment > totalPrice){
    alert(`Thanks for choosing us, here is your return ${returnBalance}`)
}else{
    alert(`Thanks for choosing us`)
}