console.log('task3')

const arr = [
 {name: 'width', value: 10}, 
 {name: 'height', value: 20}
];


function arrToObj(arr) {
    const object = {}

    arr.forEach(obj => {
        const values = Object.values(obj)
        object[values[0]] = values[1]
    })

    console.log(object)
}


arrToObj(arr)