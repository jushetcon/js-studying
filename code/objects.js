const v = {}

console.log(v)

const objSyn = new Object() // синтаксис создания нового обьекта

console.log(objSyn)

const info = {
	isAdmin: true,
	addedAt: Date(),
	age: '30',
}

console.log(info.addedAt)
console.log(info.notCreated) // неопределённое свойство = undefined
console.log(info['age'])

const obj1 = {
	a: 1,
	b: 2,
	c: 3,
}

const obj2 = obj1

obj2.c = 5

console.log(obj1.c)

const text = { test: 'test' }
const anotherText = { test: 'test' }
console.log(text === anotherText) // false

const anotherText2 = text
console.log(text === anotherText2) // true переменные с ссылками равны друг другу

const name = 'Dmitry'
const age = 30
const isAdmin = function () {
	console.log(true)
}

const person = {
	name,
	age,
	isAdmin,
}

console.log(person)
console.log(person.isAdmin())

let g = 'name:' + person.name + ' ' + 'age:' + person.age // name:Dmitry age:30
console.log(g)

const objInObj = {
	obj: {
		obj: {
			arr: [undefined],
		},
	},
}

console.log(objInObj.obj.obj.arr[0]) // undefined

const testObj = {
	test: 'test',
}

let check = 'test' in testObj
console.log(check)
