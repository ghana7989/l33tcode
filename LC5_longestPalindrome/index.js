//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

/**
 * @param {string} s
 */

function longestPalindrome(s) {
	let maxLength = 1
	let startIndex = 0
	/**
	 * @param  {string} left
	 * @param  {string} right
	 */
	function expandFromMiddle(left, right) {
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			const tempMaxLength = right - left + 1
			if (tempMaxLength > maxLength) {
				maxLength = tempMaxLength
				startIndex = left
			}
			left -= 1
			right += 1
		}
	}
	for (let i = 0; i < s.length; i++) {
		expandFromMiddle(i - 1, i + 1)
		expandFromMiddle(i, i + 1)
	}
	return s.slice(startIndex, startIndex + maxLength)
}

module.exports = longestPalindrome
