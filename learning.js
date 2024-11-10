// random 1 - 100
// while (true) {
//     let rand = Math.floor(Math.random() * 100 + 1)
//     console.log(rand)

//     if(rand == 100){
//         break
//     }
// }


// drawing
let result = ''

for(let i = 0; i <= 4; i++){
    for(let j = 0; j <= 4; j++){
        result += ' * '
    }

    result += '\n'
}

console.log(result)