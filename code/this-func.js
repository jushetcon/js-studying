function globalFunc() {
	console.log(this)
}
const globalArrowFunc = () => {
	console.log(this)
}

globalFunc() // undefined or global object

globalArrowFunc() //  undefined or global object

// ----------------------------------

let calc = {
	num: 0,
	increment: function () {
		this.num += 1
		return this.num
	},
}

console.log(calc.increment()) //  1
console.log(calc.increment()) //  2

// -----------------------------

function greetAgain() {
	console.log(`Hello, ${this.name}!`)
	setTimeout(() => {
		console.log(`Hello again, ${this.name}!`)
	})
}

const user = { name: 'Alex' }

greetAgain.call(user) // hello alex, hello again, alex!

// ------------------------------------

function test() {
	console.log(this.help)
}

let obj44 = {
	help: 44,
	meta: test,
}

console.log(obj44.meta()) // 44

// -------------------

const obj2 = {
	problem: false,
	arrowFunc: () => {
		console.log(this.problem)
	},
}

obj2.arrowFunc() // undefined
// -----------------

const fcArr = () => {
	console.log(this.isAdmin)
}
const fcNonArr = function func() {
	console.log(this.isAdmin)
}

let obj4 = {
	isAdmin: true,
	met1: fcArr,
	met2: fcNonArr,
}

console.log(obj4.met1()) // undefined
console.log(obj4.met2()) // true

// ----------------

let tes = 1

const obj = {
	tes: 2,
	method: () => {
		let tes = 3
		test()
		function test() {
			let tes = 4
			console.log(this.tes)
			console.log('test')
		}
	},
}

obj.method() // undefined test  ??

// ----------------------------------
