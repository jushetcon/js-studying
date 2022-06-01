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
