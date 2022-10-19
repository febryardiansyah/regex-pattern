export default class RegexValidation {
    static hasMatch(input: string, regex: RegExp): boolean {
        //check if s or p value are null or undefined
        if (!input || !regex) return false;
        //check type of s if not string
        if (typeof input !== "string") return false;
        //matching if s value is match to regex pattern
        return input.match(new RegExp(regex)) ? true : false;
    }
}
