console.log(Math.pow(2, 10)) // 1024

// --------------------------

console.log(Math.sqrt(245)) // 15.652475842498529

// ----------------------------

let arr = [4, 2, 5, 19, 13, 0, 10]
let sum = 0
for (let i = 0; i < arr.length; i++) {
	sum += Math.sqrt(Math.pow(arr[i], 3))
}

console.log(sum)

// -----------------------------

let testNum = 379
console.log(testNum.toFixed(0)) // 379
console.log(testNum.toFixed(1)) // 379.0
console.log(testNum.toFixed(2)) // 379.00
console.log(Math.round(testNum)) // 379
console.log(Math.ceil(testNum)) // 379

// ------------------------------------

console.log(Math.max(4, -2, 5, 19, -130, 0, 10)) // 19
console.log(Math.min(4, -2, 5, 19, -130, 0, 10)) // -130

// -------------------------------------

// Рандомное дробное число
function RandomNum1(min, max) {
	return Math.random() * (max - min) + min
}

console.log(RandomNum1(1, 6))

// Рандомное целое число
function RandomNum2(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(RandomNum2(1, 6))
console.log(RandomNum2(1, 100))

let arrTest = []
for (let i = 0; i < 10; i++) {
	arrTest[i] = RandomNum2(1, 100)
}

console.log(arrTest)

// -------------------------

let a = -5
let b = -10
console.log(Math.abs(a) + Math.abs(b)) // 15

// -----------------------------

let eTest = 1e6
console.log(eTest)

let eTest2 = 1e-6
console.log(eTest2)

// -------------------------

let uSum = 0.1 + 0.2
console.log(uSum) // 0.30000000000000004
console.log(uSum.toFixed(1)) // 0.3
console.log(uSum.toFixed(2)) // 0.30

let numInf = Infinity
let numNotInf = 5
console.log(isFinite(numInf)) // false
console.log(isFinite(numNotInf)) // true
console.log(isNaN(numInf)) // false
console.log(isNaN(numNotInf)) // false

console.log(parseInt('94test')) // 94
console.log(parseFloat('94.5test')) // 94.5

// --------------------------------
