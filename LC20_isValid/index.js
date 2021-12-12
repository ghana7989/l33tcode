const isValid = s => {
	let stackArray = [];
	let pairHashMap = {
		'(': ')',
		'[': ']',
		'{': '}',
	};

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (!!pairHashMap[char]) {
			stackArray.push(char);
		} else if (pairHashMap[stackArray.pop()] !== char) {
			return false;
		}
	}
	return !!stackArray.length === 0;
};

module.exports = isValid;
