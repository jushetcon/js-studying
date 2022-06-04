let obj = ['Hello, ', 'my ', 'name ', 'is ', 'Vlad']

let str = obj[0] + obj[1] + obj[2] + obj[3] + obj[4]

console.log(str) // Hello, my name is Vlad

let arr = {
	'Ru': ['Голубой', 'Красный', 'Зеленый'],
	'En': ['Blue', 'Red', 'Green'],
	'Ru2': [],
}
arr['Ru2'] = arr['Ru']

console.log(arr['En'][2]) // Green
console.log(arr['Ru'][0]) // Голубой
console.log(arr['Ru2']) // ['Голубой', 'Красный', 'Зеленый']

let copyObj = []
Object.assign(copyObj, [obj])

console.log(copyObj) // ['Hello, ', 'my ', 'name ', 'is ', 'Vlad']

let user = {
	name: 'James',
	isAdmin: false,

	helloName() {
		console.log(`Hello ${this.name}`) // Hello James
	},
}

console.log(user.helloName())

let user2 = {
	hello() {
		console.log('Hello world')
		return this
	},
	user3: {
		animal: 'bear',
		speak() {
			console.log('test')
			return this
		},
	},
}

console.log(user2.hello()) // Hello world + object user2
console.log(user2.user3.speak()) // test + object user3

function test() {
	return this
}

console.log(test()) // object window

let objectA = {
	isAdmin: true,
	creation: 'low',
}

function objTest(s) {
	console.log(this.isAdmin + ' test ' + this.creation + '.')
}
objectA.test = objTest
objectA.test() // true test low.
