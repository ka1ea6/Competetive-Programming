function maxOperations(nums: number[], k: number): number {
  nums.sort((a, b) => {
    return a - b;
  });

  let i: number = 0,
    j: number = nums.length - 1,
    ans: number = 0;
  while (i < j) {
    if (nums[i] + nums[j] == k) {
      ans++;
      i++;
      j--;
    } else if (nums[i] + nums[j] > k) {
      j--;
    } else {
      i++;
    }
  }
  return ans;
}
