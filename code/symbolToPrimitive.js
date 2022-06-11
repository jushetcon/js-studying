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
