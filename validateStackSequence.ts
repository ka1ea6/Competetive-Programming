function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let j: number = 0;
  let stack: number[] = [];
  for (let i of pushed) {
    stack.push(i);
    while (
      stack &&
      j < popped.length &&
      stack[stack.length - 1] === popped[j]
    ) {
      stack.pop();
      j++;
    }
  }
  return j === popped.length;
}
