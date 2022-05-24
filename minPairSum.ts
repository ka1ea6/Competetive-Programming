function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let maxSum: number = Number.MIN_SAFE_INTEGER;
  while (nums.length) {
    maxSum = Math.max(nums.shift() + nums.pop(), maxSum);
  }
  return maxSum;
}
