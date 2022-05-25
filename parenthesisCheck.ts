function isValid(s: string): boolean {
  const sArr = s.split("");
  let checkStack: string[] = [];
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "(" || sArr[i] === "{" || sArr[i] === "[") {
      checkStack.push(s[i]);
      continue;
    } else {
      if (sArr.length < 1) return false;
      switch (sArr[i]) {
        case "}":
          if (checkStack[checkStack.length - 1] == "{") {
            checkStack.pop();
          } else return false;
          break;
        case ")":
          if (checkStack[checkStack.length - 1] == "(") {
            checkStack.pop();
          } else return false;
          break;
        case "]":
          if (checkStack[checkStack.length - 1] == "[") {
            checkStack.pop();
          } else return false;
          break;
      }
    }
  }
  if (checkStack.length < 1) return true;
  else return false;
}
console.log(isValid("()[]{}"));
