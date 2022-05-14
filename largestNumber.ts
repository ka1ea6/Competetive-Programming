function largestNumber(nums: number[]): string {
  const stringNums: string[] = nums.map((el) => {
    return el.toString();
  });

  stringNums.sort((a, b) => {
    const strA = a + b;
    const strB = b + a;

    return Number(strB) - Number(strA);
  });
  if (stringNums[0] === "0") {
    return "0";
  }

  return stringNums.join("");
}
