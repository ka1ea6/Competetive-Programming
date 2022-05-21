// function maxFrequency(nums: number[], k: number): number {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j <= k; j++) {
//       if (nums.includes(nums[i] + j)) {
//         nums[i] += j;
//         k--;
//       }
//     }
//   }
//   const freq: any = {};
//   for (const element of nums) {
//     if (freq[element]) {
//       freq[element] += 1;
//     } else {
//       freq[element] = 1;
//     }
//   }
//   return Math.max(...(Object.values(freq) as number[]));
// }
function maxFrequency(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  var sum = 0;
  var start = 0;
  var maxLen = 0;
  for (var i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    if (sum + k >= nums[i] * (i - start + 1)) {
      console.log(start, nums[i]);
      //valid condition: accumulated sum + k >= current element * (window size)
      maxLen = Math.max(maxLen, i - start + 1);
    } else {
      sum = sum - nums[start];
      start = start + 1;
    }
  }
  return maxLen;
}
console.log(maxFrequency([1, 2, 9, 4, 11, 12, 13, 13], 5));
