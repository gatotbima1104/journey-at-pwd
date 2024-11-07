// 2703
// type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

// function argumentsLength(...args: JSONValue[]): number {
//     return args.length
// };

// console.log(argumentsLength({}, null, "3"))

// 2665
// type Counter = {
//     increment: () => number,
//     decrement: () => number,
//     reset: () => number,
// }

// function createCounter(init: number): Counter {
//     let initVal: number = init
//     return {
//         increment () {
//             return initVal += 1
//         },
//         decrement() {
//             return initVal -= 1
//         },
//         reset() {
//             return initVal = init
//         },
//     }
// };


//  const count = createCounter(0)
//  console.log(count.increment()); // 6
//  console.log(count.increment()); // 6
//  console.log(count.decrement()); // 4
//  console.log(count.reset()); // 5
//  console.log(count.reset()); // 5

//2618
// object of instance
function checkIfInstanceOf(obj: any, classFunction: any): boolean{

    //solution
    if(obj == null || obj == undefined || classFunction == undefined) return false

    let objPrototype = Object.getPrototypeOf(obj)
    while(objPrototype !== null){
        if(objPrototype == classFunction.prototype) return true
        objPrototype = Object.getPrototypeOf(objPrototype)
    }

    return false
};

// const five: number = 5
// console.log(typeof(five))
// console.log(checkIfInstanceOf(5, Number))
// class Animal {};
// class Dog extends Animal {} 
// console.log(checkIfInstanceOf(new Dog(), Animal))
// console.log("from date", checkIfInstanceOf(Date, Date))
// console.log(typeof(Date))
// console.log(checkIfInstanceOf(null, null))
// console.log(checkIfInstanceOf(null, []))

// const tes = new Animal()
// console.log(Object.getPrototypeOf(tes))
/**
 * checkIfInstanceOf(new Date(), Date); // true
 * * checkIfInstanceOf(Date, Date); // true
 * 
 */



/**
 * argumentsLength(1, 2, 3); // 3
 */

// 2667
// function createHelloWorld() {
//     return function(): string{
//         return "Hello World"
//     }
// };

 
// const f = createHelloWorld()
// f()

// 2634
// type Fn = (n: number, i: number) => any

// function filter(arr: number[], fn: Fn): number[] {
//     return function
// };
 
// //2620
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
function createCounter(n: number): () => number {
    
    return function() {
        return n++ // post [10,11,12]
        // return ++n // pre [11,12,13]
    }
}

const count = createCounter(10)
console.log(count())
console.log(count())
console.log(count())


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */


//2620
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]   
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:

// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

// function createCounter(n: number): () => number {
    
//     return function() {
//         return n
//     }
// }

// const counter = createCounter(10)
// counter()


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */



//2695
class ArrayWrapper {

    sum: number = 0
    stringArr: any[] = []

    constructor(nums: number[]) {
        for(let i = 0; i < nums.length; i++){
            this.sum += nums[i]
            this.stringArr.push(nums[i])
        }
    }
    
    valueOf(): number {
        return this.sum
    }
    
    toString(): string {
        return JSON.stringify(this.stringArr)
    }
};


const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);

console.log(String(obj1))
console.log(String(obj2))

//2634
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.
// type Fn = (n: number, i: number) => any // shortcut

// type Fn = {
//     fn: (n: number, i: number) => any
// }

function filter(arr: number[], fn: Fn): number[] {
    const filteredResult: number[] = []

    for(let i = 0; i<arr.length; i++){
        if(fn(arr[i], i)) filteredResult.push(arr[i])
    }

    return filteredResult
};

// console.log(filter([0,10,20,30], 
//     function greaterThan10(n) { return n > 10; }))

// console.log(
//     filter([99,2,5,6,7,0], function findFirstIndex(n,i) {return i === 0})
// )

// 2621
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
// async function sleep(millis: number): Promise<void> {
//     return setTimeout(()=> {

//     }, millis)
// }

// let promis = new Promise((resolve, reject)=> setTimeout(() => {

// }, milis))



// let t = Date.now()
// sleep(100).then(() => console.log(Date.now() - t)) //100
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

//2619
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
// You may assume the array is the output of JSON.parse.
interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function() {
    return this.length ? this[this.length - 1] : -1
};

// const arrProto = [1,2,3]
// console.log(arrProto.last())

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */


// 2626
// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {

    let result: number = init
    for(let i=0; i<nums.length; i++){
        // console.log(nums[i])
        result = fn(result,nums[i])  // assign the result here result + nums
    }

    return result
};

const reducer = reduce([1,2,3,4], function sum(accum, curr) {return accum + curr}, 0)
// console.log(reducer)

// 2635
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

// type FN = (n: number, i: number) => number
function map(arr: number[], fn: (n: number, i: number) => number): number[] {

    let result: number[] = []
    for(let i = 0; i<arr.length; i++){
        result.push(fn(arr[i], i))
    }

    return result
};

const mapper = map([1,2,3], function plusI(n, i) { return n + i; })
// console.log(mapper)


//2677
// Given an array arr and a chunk size size, return a chunked array.
// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
// Please solve it without using lodash's _.chunk function.

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: JSONValue[], size: number): JSONValue[][] {
    
    let result: JSONValue[][] = []
    for(let i = 0; i<arr.length; i++){
        if(i % size == 0 ){
            // console.log("from index",i)
            result.push([])
            // console.log(result)
        }

        // console.log("from lastchunk", result.at(-1)!)
        const lastChunk = result.at(-1)!
        lastChunk.push(arr[i])
        // console.log(result)
    }

    return result
};

const chunkedArr = chunk([1,2,3,4,5], 2)
// console.log(chunkedArr)


//  2704
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe(val_2){
            if(val_2 == val) {
                return true
            }else{
                throw "Not Equal"
            }
        },
        notToBe(val_2: any){
            if(val_2 != val) {
                return true
            }else{
                throw "Equal"
            }
        }
    }
};

console.log(expect(5).toBe(5))
console.log(expect(5).notToBe(5))

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */


// 2648
// Write a generator function that returns a generator object which yields the fibonacci sequence.
// The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.
// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

function* fibGenerator(): Generator<number, any, number> {
    let temp_1 = 0
    let temp_2 = 1

    while(true){
        yield temp_1;
        [temp_1, temp_2] = [temp_2, temp_1 + temp_2]
    }
};

const gen = fibGenerator()
console.log(gen.next().value) // 0
console.log(gen.next().value)   // 1
console.log(gen.next().value)   // 1
console.log(gen.next().value)   // 2
console.log(gen.next().value)   // 3
console.log(gen.next().value)   // 5
console.log(gen.next().value)   // 8




/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

