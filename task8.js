console.log('task8')

function f(a, b) {
    return b != undefined ? a + b : (b) => a + b
}

console.log(f(2, 3))
console.log(f(2)(3))