// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.

let styles = ['Джаз', 'Блюз']
styles.push('Рок-н-ролл')
console.log(styles)
styles[Math.floor((styles.length - 1) / 2)] = 'Классика'
console.log(styles)
console.log(styles.shift())
styles.unshift('Рэп', 'Регги')
console.log(styles)

// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.

function sumInput() {
	let arr = []

	while (true) {
		let numb = prompt('Введите число', 0)
		if (numb == '' || !isFinite(numb) || numb == null) {
			break
		}
		arr.push(+numb)
	}
	let sum = 0
	for (let num of arr) {
		sum += num
	}
	return sum
}

// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

function getMaxSubSum(arr) {
	let maxSum = 0

	for (let i = 0; i < arr.length; i++) {
		let startSum = 0
		for (let k = i; k < arr.length; k++) {
			startSum += arr[k]
			maxSum = Math.max(maxSum, startSum)
		}
	}
	return maxSum
}

console.log(getMaxSubSum([-2, 5, 3, -7]))
console.log(getMaxSubSum([-32, 5, 23, 64]))
console.log(getMaxSubSum([20, 5, -37, 30]))
