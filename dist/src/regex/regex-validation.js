"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegexValidation = /** @class */ (function () {
    function RegexValidation() {
    }
    RegexValidation.hasMatch = function (s, p) {
        //check if s or p value are null or undefined
        if (!s || !p)
            return false;
        //check type of s if not string
        if (typeof s !== "string")
            return false;
        //matching if s value is match to regex pattern
        return s.match(new RegExp(p)) ? true : false;
    };
    return RegexValidation;
}());
exports.default = RegexValidation;
