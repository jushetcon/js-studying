// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
	let strCamelize = str
		.split('-')
		.map((word, index) => (index == 0 ? word : word[0].toUpperCase() + word.slice(1)))
		.join('')
	return strCamelize
}

console.log(camelize('background-color'))

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.
let test1 = [5, 3, 8, 1]

function filterRange(arr, a, b) {
	return arr.filter(item => a <= item && item <= b)
}

console.log(filterRange(test1, 1, 6))

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < a || arr[i] > b) {
			arr.splice(i, 1)
			i--
		}
	}
}

let test2 = [5, 3, 8, 1]

filterRangeInPlace(test2, 1, 4)

console.log(test2)

// Сортировать в порядке по убыванию

let test3 = [1, 7, 4, 2, 15, 3]
test3.sort((a, b) => b - a)
console.log(test3)

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let test4 = ['HTML', 'JavaScript', 'CSS']
function copySorted(arr) {
	let newArr = arr.slice().sort()
	return newArr
}

console.log(copySorted(test4))
console.log(test4)

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

function Calculator() {
	this.operators = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
	}
	this.calculate = function (str) {
		let math = str.split(' ')
		let a = +math[0]
		let b = +math[2]
		let op = math[1]

		if (isNaN(a) || isNaN(b) || !this.operators[op]) {
			return NaN
		}
		return this.operators[op](a, b)
	}

	this.addOperators = function (name, func) {
		this.operators[name] = func
	}
}

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya = { name: 'Вася', age: 25 }
let petya = { name: 'Петя', age: 30 }
let masha = { name: 'Маша', age: 28 }

let users = [vasya, petya, masha]
let names = users.map(item => item.name)
console.log(names)

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

let ivan = { name: 'Иван', surname: 'Пупкин', id: 1 }
let katya = { name: 'Катя', surname: 'Иванова', id: 2 }
let dmitry = { name: 'Дмитрий', surname: 'Петров', id: 3 }

let users2 = [ivan, katya, dmitry]
let usersMapped = users2.map(user => ({
	fullName: user.name + ' ' + user.surname,
	id: user.id,
}))

console.log(usersMapped)

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

let igor = { name: 'Игорь', age: 25 }
let venya = { name: 'Веня', age: 30 }
let tolya = { name: 'Толя', age: 28 }

let arr9 = [igor, venya, tolya]

function ageSort(arr) {
	arr.sort((a, b) => (a.age > b.age ? 1 : -1))
}

ageSort(arr9)
console.log(arr9)

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

function shuffle(array) {
	array.sort(() => Math.random() - 0.5)
}

let arr10 = [1, 2, 3]
shuffle(arr10)
shuffle(arr10)
console.log(arr10)

// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

function getAverageAge(users) {
	return users.reduce((prev, user) => prev + user.age, 0) / users.length
}

let stas = { name: 'Стас', age: 25 }
let kira = { name: 'Кира', age: 30 }
let egor = { name: 'Егор', age: 29 }

let arr0 = [vasya, petya, masha]

console.log(getAverageAge(arr0))

//Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
	/* ваш код */
}

let strings = [
	'кришна',
	'кришна',
	'харе',
	'харе',
	'харе',
	'харе',
	'кришна',
	'кришна',
	':-O',
]

function unique(arr) {
	let result = []

	for (let str of arr) {
		if (!result.includes(str)) {
			result.push(str)
		}
	}

	return result
}

console.log(unique(strings))
