function isPowerOfThree(n: number): boolean {
  if (n === 1) return true;
  else if (n < 1) return false;
  return isPowerOfThree(n / 3);
}
