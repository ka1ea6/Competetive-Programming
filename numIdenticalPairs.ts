function numIdenticalPairs(nums: number[]): number {
  let goodPairs: number = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length; j > i; j--) {
      if (nums[j] === nums[i]) goodPairs++;
    }
  }
  return goodPairs;
}
