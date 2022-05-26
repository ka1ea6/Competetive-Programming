function reverseParentheses(s: string): string {
  let sArr: string[] = s.split("");
  let revArr: string[] = [];
  while (sArr.length) {
    let popped: string = sArr.pop();
    revArr.unshift(popped);
    if (popped !== "(") continue;
    let tempArr = revArr.splice(0, revArr.indexOf(")") + 1);
    tempArr.reverse();
    tempArr.pop();
    tempArr.shift();
    revArr = tempArr.concat(revArr);
  }
  return revArr.join("");
}
