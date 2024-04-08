/* 

42. Trapping Rain Water
Solved
Hard
Topics
Companies
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105

*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let max_left = [0];
    let max_left_current = 0;
    let max_right = [];
    let max_right_current = 0;
    let totalTrapped = 0;
    for(let i = 1; i < height.length; i++)
    {
       if(max_left_current < height[i-1])
       {
        max_left_current = height[i-1];
       }
       max_left[i] = max_left_current;
       if(max_right_current < height[height.length-i])
       {
        max_right_current = height[height.length-i];
       }
       max_right[height.length-i-1] = max_right_current;
    }
    max_right[height.length-1] = 0;
    for(let i=0; i < height.length; i++)
    {   const minTrap = Math.min(max_left[i],max_right[i]);
        if(height[i] < minTrap)
        totalTrapped +=  minTrap - height[i];
    }
    return totalTrapped;
};