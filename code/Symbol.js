// Для создания символа используется функция Symbol(). Он будет считаться неглобальным символом

let kk = Symbol('true')

// ---------------------------

// Два символа с одиннаковым описанием не равны друг другу

let vv = Symbol('H')
let gg = Symbol('H')

console.log(vv === gg)

// ------------------------

// Один символ может использоваться в качестве ключа для разных обьектов

let obj1 = {
	name: 'Igor',
}

let obj2 = {
	name: 'Igor',
}

let obj3 = {
	name: 'Igor',
}

let isAdmin = Symbol('isAdmin')

obj1[isAdmin] = true
obj2[isAdmin] = false
obj3[isAdmin] = true

console.log(obj1[isAdmin])
console.log(obj2[isAdmin])
console.log(obj3[isAdmin])

//-----------------------------------------

// Создание символа в глобальном реестре символов при помощи функции Symbol.for() . sym1 и sym2 равны друг другу, и гарантированно будут возвращать один и тот же символ. При отсутствии символа, он будет создан.

let sym1 = Symbol.for('id')
let sym2 = Symbol.for('id')

console.log(sym1 === sym2)

// ---------------------------------------------

// Symbol.keyFor метод который принимает символ и возвращает его имя. Не работает для неглобальных символов
// Для неглобальных символов можно использовать свойство description.

let sym = Symbol.for('test')
let sym3 = Symbol.for('test2')

console.log(Symbol.keyFor(sym))
console.log(Symbol.keyFor(sym3))
