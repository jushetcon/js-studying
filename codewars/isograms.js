function isIsogram(str) {
	str = str.toLowerCase()
	for (i = 0; i < str.length; i++) {
		for (k = i + 1; k < str.length; k++)
			if (str[i] === str[k]) {
				return false
			}
	}
	return true
}
