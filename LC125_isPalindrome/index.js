/**
 * @param  {string} s
 */
function isPalindrome(s) {
	s = s.toLowerCase().replace(/[\W_]/g, '')
	let leftIndex = 0
	let rightIndex = s.length - 1
	while (leftIndex < rightIndex) {
		if (s[leftIndex] !== s[rightIndex]) return false

		leftIndex++
		rightIndex--
	}
	return true
}

module.exports = isPalindrome
