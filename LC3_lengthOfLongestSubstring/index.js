// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"
/**
 * @param  {string} s
 */
function lengthOfLongestSubstring(s) {
	let [window, windowStart, maxLength] = [{}, 0, 0]
	// let windowStart = 0
	// let maxLength = 0
	for (let index = 0; index < s.length; index++) {
		const endChar = s[index]
		if (window[endChar] >= windowStart) {
			windowStart = window[endChar] + 1
		}
		window[endChar] = index
		maxLength =
			maxLength > index - windowStart + 1 ? maxLength : index - windowStart + 1
	}
	return maxLength
}

module.exports = lengthOfLongestSubstring
