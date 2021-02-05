console.log('task6')

const words = ['кот', 'ток', 'окт'];


function fff(words) {

    let arr = []
    
    words.forEach(word => {
        arr.push(word.split('').sort().join(''))
       
    })

    console.log(arr)

    arr[0] === arr[1] && arr[0] === arr[2] ? console.log(true) : console.log(false)
}

fff(words)