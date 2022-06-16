//  Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
let num1 = +prompt('Первое число', '')
let num2 = +prompt('Второе число', '')

alert(num1 + num2)

// ---------
// Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

// Как правильно округлить 6.35?
console.log(Math.round(6.35 * 10) / 10) // 6.4

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт

function readNumber() {
	let number

	do {
		number = prompt('Число?', 0)
	} while (!isFinite(number))

	if (number == '' || number == null) return null
	return +number
}

alert(`Число ${readNumber()}`)

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

function random(min, max) {
	return min + Math.random() * (max - min)
}

console.log(random(1, 6))

// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

function randomNumber(min, max) {
	let num = min + Math.random() * (max - min)
	return Math.round(num)
}

alert(randomNumber(1, 3))
