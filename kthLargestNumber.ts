function kthLargestNumber(nums: string[], k: number): string {
  let arr: BigInt[] = [...nums]
    .map((el) => BigInt(el))
    .sort((a, b) => (a > b ? -1 : 1));

  return arr[k - 1].toString();
}
