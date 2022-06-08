// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

//Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match

function points(games) {
	var sum = 0
	for (var i = 0; i < games.length; ++i) {
		if (games[i][0] > games[i][2]) sum += 3
		if (games[i][0] == games[i][2]) sum += 1
	}
	return sum
}
