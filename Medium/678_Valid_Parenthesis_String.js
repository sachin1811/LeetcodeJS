/* 
678. Valid Parenthesis String
Solved
Medium
Topics
Companies
Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

The following rules define a valid string:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "(*)"
Output: true
Example 3:

Input: s = "(*))"
Output: true
 

Constraints:

1 <= s.length <= 100
s[i] is '(', ')' or '*'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let leftMin = 0;
    let leftMax = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s[i] !== ')') {
             leftMin++;
        } else if (leftMin > 0) {
             leftMin--;
        } else {
            return false;
        }
        if (s[s.length - 1- i] !== '(') {
             leftMax++;
        } else if (leftMax > 0) {
             leftMax--;
        } else {
            return false;
        }
    }
    return true;
};