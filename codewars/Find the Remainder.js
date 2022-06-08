// https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript

//Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

function remainder(a, b) {
	if (a > b && b === 0) {
		return NaN
	} else if (b > a && a === 0) {
		return NaN
	} else return a > b ? a % b : b % a
}
