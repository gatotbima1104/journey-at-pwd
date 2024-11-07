// 1. get lowest, highest, average value (with and without sort function)
// Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
let arr_0 = [12, 5, 23, 18, 4, 45, 32]

// with sort
let lowest: undefined | number = arr_0.sort((a,b)=> a-b)[0]
let highest: undefined | number = arr_0.sort((a,b)=> a-b).pop()
let sum: number = 0
arr_0 = [12, 5, 23, 18, 4, 45, 32]

for(let i of arr_0 ){
    sum += i
}

console.log((sum / arr_0.length).toFixed(4))

// without sort
arr_0 = [12, 5, 23, 18, 4, 45, 32]

// without sort
lowest = Math.min(...arr_0)
highest = Math.max(...arr_0)
let avg = (arr_0.reduce((sum, curr) => sum + curr, 0) / arr_0.length).toFixed(4)

console.log("reduce sum ",avg)


// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
let arr_words: string[] = ["apple", "banana", "cherry", "date"]

function splitWords(words: string[]) {
    let modifiedArrWords: string = ''
    words.map((item, index) => {
        if(index == words.length - 1) modifiedArrWords += " and " + item
        else modifiedArrWords += item + ","
    })

    return modifiedArrWords;
}

console.log(splitWords(arr_words))

// 3. Write a function from a given array of numbers and return the second smallest number
// Example : numbers = [5, 3, 1, 7, 2, 6] → 2
let num: number[] = [5, 3, 1, 7, 2, 6]

function findSmallestSecondNum(num:number[]) {
    let smallest = num.sort((a,b)=> a-b)
    return smallest[1]
}
console.log("from smallest second number ", findSmallestSecondNum(num))

// 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays
// are of the same length.
// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
let arr_1: number[] = [1, 2, 3]
let arr_2: number[] = [3, 2, 1]

function calculateBetweenArrays(arr_1: number[], arr_2: number[]) {

    // let calculatedArray: number[] = []
    // for(let i = 0; i < arr_1.length; i++){
    //     calculatedArray[i] = arr_1[i] + arr_2[i] 
    // }

    // return calculatedArray;

    // mas jordan 
    return arr_1.map((n, i) => n + arr_2[i])
}

console.log(calculateBetweenArrays(arr_1, arr_2))

// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

arr_1 = [1, 2, 3, 4]
let newElement_1: number = 7
let newElement_2: number = 7

function pushToArray(arr:number [], newElement_1: number, newElement_2: number):number [] {

    if(!arr.includes(newElement_1)){
        arr.push(newElement_1)
    }

    if(!arr.includes(newElement_2)){
        arr.push(newElement_2)
    }

    return arr
}

// console.log(new Array(pushToArray(arr_1, newElement_1, newElement_2)))

// mas jordan
const addElement = (number: number[], newElement: number) =>  
    console.log("from number 5", number.indexOf(newElement) == -1 ? [...number, newElement] : number)

addElement([1,2,3,4], 7)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Write a function from a given array of mixed data types and return the sum of all the number
// Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
let mixedArray: any[] = ["3", 1, "string", null, false, undefined, 2]

function sumOfMixedArr(mixArr:any[]) {
    let sumNumArr: number = 0;
    mixArr.map((item, i) => {
        if(typeof(item) === "number"){
            sumNumArr += item
        }
    })

    return sumNumArr;
}

console.log(sumOfMixedArr(mixedArray))

// mas jordan 
const sumArray = (mix: any[]) => 
    console.log("from sum arr", mix.reduce((sum, prev) => (typeof prev == "number" ? sum + prev : sum), 0))
    
sumArray(mixedArray)

// 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]
let maxSize:number = 5

function inputByMaxsize(maxSize:number, ...args: any[]) {
    return args.splice(0, maxSize)
}

console.log(inputByMaxsize(maxSize, "5", "10", "24", "3", "6", "7", "8"))

// mas jordan
const insertArr = (max: number, ...number: number[]) => 
    console.log("from insert arr", [...new Array(max)].map((e, i) => number[i]))

insertArr(5, 5, 10, 24, 3, 6, 7, 8)

// 3. Write a function that will combine 2 given array into one array
// Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
arr_1 = [1, 2, 3]
arr_2 = [4, 5, 6]

function mergedArr(arr_1:number[], arr_2: number[]) {
    return arr_1.concat(arr_2)
}

console.log(mergedArr(arr_1, arr_2))

// 4. Write a function to find duplicate values in an array
// Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
arr_1 = [1, 2, 2, 2, 3, 3, 4, 5, 5]

// mas jordan
const findDuplicate = (number: number[]) => 
    console.log(
        number.reduce(
            (arr: number[], val: number) =>
                number.filter((el) => el == val).length > 1 && arr.indexOf(val) == -1 
                ? [...arr, val] 
                : arr, []
        )
    )

findDuplicate(arr_1)

// 5. Write a function to find the difference in 2 given array
// Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
arr_1 = [1, 2, 3, 4, 5]
arr_2 = [3, 4, 5, 6, 7]

function differentBetweenArray(arr_1: number[], arr_2: number[]) {

    let differentNumber: number[] = []

    for(let i = 0; i < arr_1.length; i++){
        if(!arr_2.includes(arr_1[i])) differentNumber.push(arr_1[i])
        if(!arr_1.includes(arr_2[i])) differentNumber.push(arr_2[i])
    }

    return differentNumber
}

console.log("from different between arr", differentBetweenArray(arr_1, arr_2))

// mas jordan
const findDifferent = (arr1: number[], arr2: number[] ) => 
    console.log(
        arr1
            .concat(arr2)
            .reduce((arr: number[], val: number, i, currArr) =>
                currArr.filter((el) => el == val).length == 1 && arr.indexOf(val) == -1 
                ? [...arr, val] 
                : arr, []
            )

    )


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Based on the array below write a function that will return primitive data types only.
// let arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

mixedArray = [1, [], undefined, {}, "string", {}, []];
function findPrimitiveType(mixArr:any) {

    let primitiveTypes: any[] = []
    mixedArray.map((item) => {
        if(typeof(item) !== "object") primitiveTypes.push(item)   // Array and Obj is same as "object"
    })

    return primitiveTypes
}

console.log(findPrimitiveType(mixedArray))

// mas jordan
const primitive = (arr: any[]) =>
    console.log(
        "from primitive",
        arr.filter((e,i) => typeof(e) != "object")
    )

primitive(mixedArray)

// 2. Write a function from the below array of number that will return sum of duplicate values.
// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

arr_1 = [10, 20, 40, 10, 50, 30, 10, 60, 10];
function sumDuplicateValues(arrs: number[]) {

    let temp_1 = arrs[0]
    let sumOfDuplicate: number = 0
    
}
console.log(sumDuplicateValues(arr_1))

// mas jordan
const sumDuplicates = (arr: number[]) =>
    console.log(
        arr.reduce((sum, prev) => arr.indexOf(prev) != arr.lastIndexOf(prev) ? sum + prev : sum, 0)
    )

sumDuplicates(arr_1)

// 3. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

// mas jordan
const computer = ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)] 
const rps = (user: string) => 
    console.log(
        `${user} vs ${computer} ${
            (user == "rock" && computer == "scissor") || (user == "paper" && computer == "rock") || (user == "scissor" && computer == "paper") 
            ? "win" : user == computer ? "draw" : "lose"  
        }`
    )

rps("paper")