const { RegexValidation, RegexPattern } = require("./dist/index.js").default;

const t = RegexValidation.hasMatch("yourcrush@mail.com", RegexPattern.email);

console.log(t);//it will return true