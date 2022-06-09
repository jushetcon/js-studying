function globalFunc() {
	console.log(this)
}
const globalArrowFunc = () => {
	console.log(this)
}

globalFunc() // undefined

globalArrowFunc() //  undefined

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
