function maxFrequency(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  var sum = 0;
  var start = 0;
  var maxLen = 0;
  for (var i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    if (sum + k >= nums[i] * (i - start + 1)) {
      maxLen = Math.max(maxLen, i - start + 1);
    } else {
      sum = sum - nums[start];
      start = start + 1;
    }
  }
  return maxLen;
}
