const { RegexValidation, RegexPattern } = require("../dist/index.js").default;

const isEmail = RegexValidation.hasMatch("yourcrush@mail.com", RegexPattern.email);
const isCssAttributes = RegexValidation.hasMatch("background-color: lightblue;", RegexPattern.cssAttributes)

console.log(isEmail); //it will return true
console.log(isCssAttributes); // it will return true