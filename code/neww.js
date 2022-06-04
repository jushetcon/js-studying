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
