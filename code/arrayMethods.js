let arrA = [1, 2, 3]
arrA.push(4, 5, 6)
console.log(arrA) // [1, 2, 3, 4, 5, 6]

let arrB = [4, 5, 6]
arrB.unshift(1, 2, 3)
console.log(arrB) // [1, 2, 3, 4, 5, 6]

let arrC = [1, 2, 3]
console.log(arrC.shift()) // 1
console.log(arrC.pop()) // 3

let arrD = [1, 2, 3, 4, 5]
console.log(arrD.slice(0, 3)) // [1, 2, 3]

let arrE = [1, 2, 3, 4, 5]
let arrF = arrE.slice(3, 5) // [4, 5]
console.log(arrF)

let arrG = [1, 2, 3, 4, 5]
arrG.splice(1, 2)
console.log(arrG) // [1, 4, 5]

let arrH = [1, 2, 3, 4, 5]
arrH.splice(3, 0, 'a', 'b', 'c')
console.log(arrH)

let arrI = [1, 2, 3, 4, 5]
console.log(arrI.indexOf(3)) // 2

// ------------------------------------------

let arr = ['php', 'php', 'css', 'css', 'script', 'script', 'html', 'html', 'java']
function a(arr) {
	let res = []
	for (let i = 0; i < arr.length; i++) {
		if (res.includes(arr[i]) === false) {
			res.push(arr[i])
		}
	}
	return res
}

console.log(a(arr))

// -----------------------------------------

let reverse = array => {
	let reversed = []

	for (let i = array.length - 1; i >= 0; i -= 1) {
		reversed.push(array[i])
	}

	return reversed
}

// --------------

let chunk = (array, size) => {
	let chunkedArr = []
	let index = 0
	while (index < array.length) {
		chunkedArr.push(array.slice(index, size + index))
		index += size
	}
	return chunkedArr
}
