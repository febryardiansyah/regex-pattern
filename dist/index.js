"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var regex_validation_1 = __importDefault(require("./regex/regex-validation"));
var regex_pattern_1 = __importDefault(require("./regex/regex-pattern"));
exports.default = {
    RegexValidation: regex_validation_1.default,
    RegexPattern: regex_pattern_1.default
};
