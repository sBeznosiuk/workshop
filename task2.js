console.log('task2')

const arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"]

function ggg(arr) {
    let newArr = [...arr]
    newArr.forEach((elem, i)  => {
        if (elem === 0) {
            newArr.splice(i, 1)
            newArr.push(elem)
        }
    })
console.log(newArr)
}

ggg(arr)