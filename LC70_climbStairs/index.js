const climbStairs = n => {
	if (n === 1) return 1;
	if (n === 2) return 2;
	let first = 1;
	let second = 2;
	let result = 0;
	for (let i = 3; i <= n; i++) {
		result = first + second;
		first = second;
		second = result;
	}
	return result;
};

module.exports = climbStairs;
