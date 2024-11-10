/* 1. Perhitungan nilai
    x = 4
    y = 3
    z = 2

    w = ((x+y*z)/(x*y))^z
    w = ?
*/

const x = 4;
const y = 3;
const z = 2;

const w = Math.pow((x + y * z) / (x * y), z);
const w2 = ((x + y * z) / (x * y)) ** z;
// console.log(w);
// console.log(w2)


/* 
    2. Input number => result ^2 dari input
*/

// const input = prompt("Silahkan masukkan angka berapapun : ")
// const pangkat2 = Math.pow(input, 2)

// alert(`Kuadran dari angka ${input} = ${pangkat2}`)
// console.log(pangkat2)

/* 
    3. result ^3 of 8
*/
const result = Math.cbrt(8)
// console.log(result)

/* 
    4. 485 days => separate by year, month, day
*/

const totalDays = 485 

const DAYS_IN_YEAR = 360
const DAYS_IN_MONTH = 30
const DAYS_IN_WEEK = 7

// Year
const year = Math.floor(totalDays / DAYS_IN_YEAR)
const yearRemain = totalDays % DAYS_IN_YEAR

// Month
const month = Math.floor(yearRemain / DAYS_IN_MONTH)
const monthRemain = yearRemain % DAYS_IN_MONTH

// Week
const week = Math.floor(monthRemain / DAYS_IN_WEEK)
const weekRemain = monthRemain % DAYS_IN_WEEK

// console.log(`${totalDays} separated by year = ${year}, month = ${month}, week = ${week}, days = ${weekRemain}`)

/* 
    5. Soal
    Andi + Budi = 49thn
    rasio between Andi & Budi = 0.4
    Berapa usia Andi & Budi 2 tahun lagi ?
*/

let totalAge = 49
// rasio 0.4 == 4/10 == 2/5
let andi = 2, budi = 5, totalRatio = 7

let andiAge = totalAge * (andi / totalRatio)
let budiAge = totalAge * (budi / totalRatio)
// console.log(`Usia andi saat ini ${andiAge} \nUsia budi saat ini ${budiAge}`)

andiAge += 2
budiAge += 2
// console.log(`Usia andi saat ini ${andiAge} \nUsia budi saat ini ${budiAge}`)


/* 
    6. Soal
    Jarak mobil A, B = 120km
    A berjalan = 60km/h dari timur
    B berjalan = 40km/h dari barat
    A, B start pukul 9 WIB
    Jam berapa A & B bertabrakan?
*/
const jarakMobil = 120 
let startTimeHours = 9
const startTimeMinutes = 0

let distanceA = 60
let distanceB = 40

let crashedTime;
let totalDistance;
let comparedDistance;
let hourInMinutes = 60;
let remainMinutes;

// total jarak, bandingnkan dengan totalJarak mobil
totalDistance = distanceA + distanceB
// console.log(totalDistance)

comparedDistance = (jarakMobil / totalDistance) * hourInMinutes
// console.log(comparedDistance)

startTimeHours *= hourInMinutes
// console.log(`Start time in minutes ${startTimeHours}`)
startTimeHours += comparedDistance

// find remainMinutes in minutes
remainMinutes = startTimeHours % 60 
// console.log(remainMinutes)

startTimeHours /= hourInMinutes

// console.log(`Mobil akan bertabrakan pada pukul ${Math.floor(startTimeHours)}:${remainMinutes}`)



/* 
    7. Random number 1 - 100
*/

// 0.000 - 0.999
const rand = Math.random()
// 000.0 - 99.9
const randTimesHund = rand * 100
// 0 - 99
const randFloor = Math.floor(randTimesHund)
// 1 - 100
const randFinal = randFloor + 1

// console.log(randFinal)


// const rand = Math.floor(Math.random() * 100 + 1)
// console.log(rand)
// https://flaviocopes.com/how-to-generate-random-number-between/

/* 
    8. Fruits market
*/

// const applePrice = 10000
// const grapePrice = 15000
// const orangePrice = 20000

// let totalPriceApple;
// let totalPriceGrape;
// let totalPriceOrange;

// const inputApple = prompt(`Input Quantity of Apple = `)
// const inputGrape = prompt(`Input Quantity of Grape = `)
// const inputOrange = prompt(`Input Quantity of Orange = `)

// totalPriceApple = applePrice * inputApple
// let totalPriceAppleFormatted = new Intl.NumberFormat('id-ID', {style: "currency", currency: "IDR"}).format(totalPriceApple)
// totalPriceGrape = grapePrice * inputGrape
// let totalPriceGrapeFormatted = new Intl.NumberFormat('id-ID', {style: "currency", currency: "IDR"}).format(totalPriceGrape)
// totalPriceOrange = orangePrice * inputOrange
// let totalPriceOrangeFormatted = new Intl.NumberFormat('id-ID', {style: "currency", currency: "IDR"}).format(totalPriceOrange)

// let totalPrice = totalPriceApple + totalPriceGrape + totalPriceOrange
// totalPrice = new Intl.NumberFormat('id-ID', {style: "currency", currency: "IDR"}).format(totalPrice)

// alert(`Total price of Apples : ${totalPriceAppleFormatted} \n Total price of Grapes : ${totalPriceGrapeFormatted} \n Total price of Oranges : ${totalPriceOrangeFormatted} \n Total price of Apple, Grape and Orange = ${totalPrice}`)



// falsy values
const numberZero = 0
const emptyString = ''
const nullValue = null
const undefinedValue = undefined
const nanValue = NaN

console.log(Boolean(nanValue))

// truthy values
// All expect the falsy values
const emptyArray = []
const emptyObj = {}
