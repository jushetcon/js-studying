// Создайте объект calculator (калькулятор) с тремя методами:

//read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
//sum() (суммировать) возвращает сумму сохранённых значений.
//mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
	sum() {
		return this.a + this.b
	},

	mul() {
		return this.a * this.b
	},

	read() {
		this.a = +prompt('число 1', 0)
		this.b = +prompt('число 2', 0)
	},
}

calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())
