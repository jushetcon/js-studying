objTest = {
	[Symbol.toPrimitive](hint) {
		console.log(hint)
		if (hint == 'number') {
			return 10
		}
		if (hint == 'string') {
			return 'hello'
		}
		return true
	},
}

console.log(+objTest) // 10 (hint:number)
console.log(objTest + '') // true (hint:default)
console.log(`${objTest}`) // hello (hint: string)

// ------------------------------------------------

let user = {
	name: 'Max',
	age: 33,

	[Symbol.toPrimitive](hint) {
		console.log(`hint: ${hint}`)
		return hint == 'string' ? `{name: "${this.name}"}` : this.age
	},
}

console.log(+user) //  33 (hint:number)
console.log(user + 222) // 255 (hint: default)
console.log(user + user) // 66 (hint: default)

// ---------------------------------------------------

let userr = {
	name: 'Alex',
	age: 24,

	toString() {
		return this.name
	},
}

console.log(userr + 500) // Alex500

// --------------------------------------

let user5 = {
	name: 'Alex',
	age: 24,

	valueOf() {
		return this.age
	},
}

console.log(user5 + 'test') // 24test

// -----------------------------------

let obj8 = {
	// toString обрабатывает все преобразования в случае отсутствия других методов
	toString() {
		return '2'
	},
}

console.log(obj8 * 5) // 10
