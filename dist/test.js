"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = __importDefault(require("./dist/index.js"));
var RegexValidation = index_js_1.default.RegexValidation, RegexPattern = index_js_1.default.RegexPattern;
RegexValidation.hasMatch("yourcrush@mail.com", RegexPattern.email);
