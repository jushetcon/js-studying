let obj1 = {
	isAdmin: true,
	name: 'Ivan',
}

let obj2 = {}

function cloneObj(a, b) {
	for (let key in a) {
		b[key] = a[key]
	}
}

cloneObj(obj1, obj2)

console.log(obj2)

let obj3 = {}

Object.assign(obj3, obj1)

console.log(obj3)

let obj4 = JSON.parse(JSON.stringify(obj1))

console.log(obj4)

let obj5 = { ...obj1 }

console.log(obj5)
