// myRegex should match a string that consists of only the same number repeated exactly three times seperated by single spaces.

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
console.log(result)

