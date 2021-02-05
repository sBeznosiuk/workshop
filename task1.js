console.log('task1')

const arr = [[1, 2, 3], [5, 3, 2], [7, 3, 2]]
const arr2 = [[1, 4, 5], [4, 5, 6], [4, 4, 4]]

function common(arr) {
    
    const newArr = [];

    arr.forEach(array => {
        newArr.push(...array)
        
    })
    
    const reduced = newArr.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1
        return acc
    }, {})

    console.log(reduced)

    let total = 0;

    for (const key in reduced) {
        if (reduced[key] > 1) {
            total += reduced[key] * key
        }

    }

    console.log(total)
}

common(arr)
common(arr2)


// function common(a, b, c) {
//     let arr = [];
//     const arg = [...arguments]
//     const sup = arg[0]
   
//     let total = 0;


//     arg.forEach(argument => {
//         arr.push(...argument)
        
//         arr.forEach((num, i) => {
//             if (!argument.includes(num)) {
//                 arr.splice(i, 1)
//             }

//             if (!sup.includes(num)) {
//                 arr.splice(i, 1)
//             }
//         })

//     })

//     arr.forEach(num => total += num)

//     console.log(total)
  
// }
   

// common(arr1, arr2, arr3)

