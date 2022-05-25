var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function evalRPN(tokens) {
    if (tokens.length === 1)
        return Number(tokens[0]);
    var tokenAny = __spreadArray([], tokens, true);
    var negative = false;
    var value = 0;
    var i = 0;
    while (tokenAny.length > 2) {
        negative = false;
        console.log(tokenAny, value, i);
        switch (tokenAny[i]) {
            case "+":
                value = Math.floor(Number(tokenAny[i - 2]) + Number(tokenAny[i - 1]));
                tokenAny[i] = value;
                tokenAny.splice(i - 2, 2);
                i = 0;
                break;
            case "-":
                value = Math.floor(Number(tokenAny[i - 2]) - Number(tokenAny[i - 1]));
                tokenAny[i] = value;
                tokenAny.splice(i - 2, 2);
                i = 0;
                break;
            case "*":
                if ((Number(tokenAny[i - 2]) < 0 || Number(tokenAny[i - 1] < 0)) &&
                    !(Number(tokenAny[i - 2]) < 0 && Number(tokenAny[i - 1]) < 0))
                    negative = true;
                value = Math.floor(Math.abs(Number(tokenAny[i - 2])) * Math.abs(Number(tokenAny[i - 1])));
                value = negative ? value * -1 : value;
                tokenAny[i] = value;
                tokenAny.splice(i - 2, 2);
                i = 0;
                break;
            case "/":
                if ((Number(tokenAny[i - 2]) < 0 || Number(tokenAny[i - 1] < 0)) &&
                    !(Number(tokenAny[i - 2]) < 0 && Number(tokenAny[i - 1]) < 0))
                    negative = true;
                value = Math.floor(Math.abs(Number(tokenAny[i - 2])) / Math.abs(Number(tokenAny[i - 1])));
                value = negative ? value * -1 : value;
                tokenAny[i] = value;
                tokenAny.splice(i - 2, 2);
                i = 0;
                break;
            default:
                break;
        }
        i++;
    }
    return value;
}
// console.log(evalRPN(["2", "1", "+", "3", "*"]));
// console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(evalRPN(["-3", "9", "*"]));
// console.log(
//   evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
// );
console.log(evalRPN(["-3", "-9", "*"]));
