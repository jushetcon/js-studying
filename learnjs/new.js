// Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?
// function A() { ... }
// function B() { ... }

// let a = new A;
// let b = new B;

// alert( a == b ); // true

let a = {}

function A() {
	return a
}

function B() {
	return a
}

console.log(new A() == new B())

// ------------------------------------------

// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

function Calculator() {
	this.read = function () {
		this.a = +prompt('a?', 0)
		this.b = +prompt('b?', 0)
	}
	this.sum = function () {
		return this.a + this.b
	}
	this.mul = function () {
		return this.a * this.b
	}
}

let calculator = new Calculator()
calculator.read()

console.log('Sum=' + calculator.sum())
console.log('Mul=' + calculator.mul())

// -------------------------------------------

// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.

function Accumulator(startingValue) {
	this.value = startingValue
	this.read = function () {
		this.value += +prompt('Введите число', 0)
	}
}

let accumulator = new Accumulator(5)
console.log(accumulator.value)
accumulator.read()
console.log(accumulator.value)
accumulator.read()
console.log(accumulator.value)
