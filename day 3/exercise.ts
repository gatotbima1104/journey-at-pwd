// bilangan prima
let number: number = 29
function isPrime(number: number) {
    if(number <= 1) return false

    for(let i = 2; i < number; i++){
        // if can be divided by the loop, false
        if(number % i === 0){
            return false
        }
    }

    return true
    
}

console.log(isPrime(number))


// fibonacci
number = 15
let temp_1:number = 0
let temp_2:number = 1
let result: number = 0

for(let i = 1; i < number; i++){
    result = temp_1 + temp_2
    temp_1 = temp_2
    temp_2 = result
}

console.log(result)

// palindrome
let str:string = 'katak'
// str.length = 3
// str.length - 1 = 2
// c = 0
// a = 1
// t = 2

// str[i] taking the str per charatcer

let reversed: string = ''
function isPalindrome(str: string) {
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i]
    }
    
    return reversed == str ? true : false
}

console.log(isPalindrome(str))

// capitalized first word
str = "hello world in the ra mayu"
let capitalizedFirstWord: string = ''
function capitaliedWords(str: string) {
    if(str[0]) capitalizedFirstWord += str[0].toUpperCase()
    for(let i = 1; i < str.length; i++){
        if(str[i - 1] == ' '){
            capitalizedFirstWord += str[i].toUpperCase()
        }else{
            capitalizedFirstWord += str[i]
        }
    }

    return capitalizedFirstWord
}

console.log(capitaliedWords(str))

// reverse upper-lower str
str = "cOki PardeDE"
let reverseUpperLowerStr: string = ''
function reverseUpperLower(str: string) {
    for(let i = 0; i < str.length; i++){ // c o k i p a r d e d e
        if(str[i] === str[i].toUpperCase()){  // c == C
            reverseUpperLowerStr += str[i].toLowerCase()  // C => c  
        } 
        else {
            reverseUpperLowerStr += str[i].toUpperCase()  // c => C
        }
    }

    return reverseUpperLowerStr
}

console.log(reverseUpperLower(str))

// remove vocal to *
str = "I have an apple abracadabra"
let removedVocal: string = ''
function removeVocalToStars(str: string, vocal: string) {
    for(let i = 0; i < str.length; i++){
        if(str[i] == vocal) removedVocal += '*'
        else removedVocal += str[i]
    }
    return removedVocal
}

console.log(removeVocalToStars(str, 'a'))