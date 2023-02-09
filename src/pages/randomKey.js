export default function randomKey() {
	const letters = [
		"a",
		"b",
		"c",
		"d",
		"f",
		"e",
		"g",
		"j",
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
	];

	const keyLength = 5;
	const key = [];

	for (let i = 0; i < keyLength; i++) {
		key.push(letters[rundomIndex(letters)]);
		// key.push(numbers[rundomIndex(numbers)]);
	}

	function rundomIndex(arr) {
		return Math.floor(Math.random() * (arr.length - 1));
	}

	return key.join("");
}