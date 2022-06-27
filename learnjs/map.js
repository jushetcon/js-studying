// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(arr) {
	let result = Array.from(new Set(arr))
	return result
}

let values = [
	'Hare',
	'Krishna',
	'Hare',
	'Krishna',
	'Krishna',
	'Krishna',
	'Hare',
	'Hare',
	':-O',
]

console.log(unique(values))

// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
function aclean(arr) {
	let object = {}

	for (let i = 0; i < arr.length; i++) {
		clean = arr[i].toLowerCase().split('').sort().join('')
		object[clean] = arr[i]
	}
	return object
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']
console.log(aclean(arr))
