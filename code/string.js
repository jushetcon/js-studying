str = 'JavaScript'
console.log(str.toUpperCase()) // JAVASCRIPT
console.log(str.toLowerCase()) // javascript

// ------------------

str1 = 'tmnt JavaScript low'
console.log(str1.substr(5, 10)) // JavaScript
console.log(str1.substring(5, 15)) // JavaScript
console.log(str1.slice(5, 15)) // JavaScript

// ----------------

let str3 = 'abcde'
console.log(str3.indexOf('c')) // 2

function spamCheck(str) {
	if (str.includes('18+') == true) {
		console.log('spam')
	} else console.log('not spam')
}

let str4 = 'checktest18+'

spamCheck(str3) // not spam
spamCheck(str4) // spam

function endWith(str, letter) {
	let last = str.length - 1
	if (str.indexOf(letter) == last) {
		console.log(`end with ${letter}`)
	} else console.log(`does not end with a ${letter}`)
}

endWith(str4, '+') // ends with +
endWith(str3, 'b') // does not end with b

function startWith(str, letter) {
	if (str.indexOf(letter) == 0) {
		console.log(`starts with ${letter}`)
	} else console.log(`does not start with ${letter}`)
}

startWith(str4, 'c') // starts with c

console.log(str4.startsWith('ch')) // true
console.log(str4.endsWith('1')) // false

// ------------------------------------

let str5 = '1-2-3-4-5'
console.log(str5.split('-')) // ['1', '2', '3', '4', '5']

let str6 = '12345'
console.log(str5.split(' ')) // ['1-2-3-4-5']
