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
