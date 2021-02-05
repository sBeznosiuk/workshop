console.log('task4')

const students = [
    {name: 'Olha', gender: 'female'},
    {name: 'Oleh', gender: 'male'},
    {name: 'Kristi', gender: 'female'}
];

function sortByGender(students) {
    let obj = {
        male: [],
        female: [],
    }
    students.forEach(student => {
        student.gender === 'male' ? obj.male.push(student) : obj.female.push(student)
    })

    console.log(obj)
}

sortByGender(students)