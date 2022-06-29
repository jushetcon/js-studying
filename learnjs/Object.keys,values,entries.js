// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

let salaries = {
	'John': 100,
	'Pete': 300,
	'Mary': 250,
}

function sumSalaries(salaries) {
	let result = 0
	for (let sum of Object.values(salaries)) {
		result += sum
	}
	return result
}

console.log(sumSalaries(salaries)) // 650

// Напишите функцию count(obj), которая возвращает количество свойств объекта

let user = {
	name: 'John',
	age: 30,
}

function count(obj) {
	return Object.keys(obj).length
}

console.log(count(user)) // 2
