console.log('task7')

Number.prototype.plus = function (val) {
    return this + val
}

Number.prototype.minus = function(val) {
    return this - val
}
console.log((2).plus(2).minus(1))

