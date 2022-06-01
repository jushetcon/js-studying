// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name
console.log(user)

// ---------------------------------------------

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
	for (let key in obj) {
		return true
	}
	return false
}

let obj1 = {}
let obj2 = { name: 'John' }

console.log(isEmpty(obj1))
console.log(isEmpty(obj2))

// -------------------------------------------

// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
}

let sum = 0

for (let key in salaries) {
	sum += salaries[key]
}

console.log(sum)

// ------------------------------

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
}

function multiplyNumeric(obj) {
	for (let k in obj) {
		if (typeof obj[k] == 'number') {
			obj[k] += obj[k]
		}
	}
}

multiplyNumeric(menu)
console.log(menu)
