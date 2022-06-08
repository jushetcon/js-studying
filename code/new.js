function Admin(name) {
	this.name = name
	this.isAdmin = true
}

let user = new Admin('Dey')
console.log(user.name) // Dey
console.log(user.isAdmin) // true

function User(name, age) {
	this.name = name
	this.age = age

	this.Hello = function () {
		console.log('Меня зовут ' + this.name + ', мне ' + `${this.age}лет`)
	}
}

let Kaya = new User('Kaya', 20) // new obj Kaya

console.log(Kaya.Hello()) // Меня зовут Kaya, мне 20лет

function Person(first, last, age, eyecolor) {
	this.firstName = first
	this.lastName = last
	this.age = age
	this.eyeColor = eyecolor
	this.name = function () {
		return this.firstName + ' ' + this.lastName
	}
}

let pers = new Person('James', 'Stone', 19, 'brown')
console.log(pers.name())

const manager = function (name, sales) {
	return {
		name: name,
		sales: sales,
		sell: function (thing) {
			this.sales += 1
			return 'Manager ' + this.name + ' sold ' + thing
		},
	}
}

const mary = manager('Jule', 120)

console.log(mary.sell('iphone'))
