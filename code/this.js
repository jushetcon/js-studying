this.a = 444

console.log(window.a) // 444

// --------------------------
function mainF() {
	'use strict'
	console.log(this)
}
mainF() // undefined

// -----------------------

let obj1 = {
	number: 10,
	method: function () {
		console.log(this)
		console.log(this.number)
	},
}
obj1.method() // {obj}, 10

// ---------------------------

let obj2 = {
	number: 10,
}

function func() {
	console.log(this)
	console.log(this.number)
}
obj2.method = func
obj2.method() // {obj}, 10

// ------------------------

function func() {
	console.log(this)
	console.log(this.number)
}

let obj3 = {
	number: 10,
	innerObj: {
		number: 5,
		method: func,
	},
}
obj3.innerObj.method() // {obj3}, 5

// -------------------------------------

function func() {
	console.log(this)
	console.log(this.number)
}

let obj4 = {
	number: 10,
	innerObj: {
		number: 5,
		method: func,
	},
}

let target = obj4.innerObj
target.method() //

// ---------------------------------
