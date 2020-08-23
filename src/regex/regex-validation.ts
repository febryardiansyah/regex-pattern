export default class RegexValidation {
    static hasMatch(s: string, p: RegExp):boolean {
        //check if s or p value are null or undefined
        if(!s || !p) return false;
        //check type of s if not string
        if(typeof s !== "string")return false;
        //matching if s value is match to regex pattern
        return s.match(new RegExp(p))?true:false;
    }
}
