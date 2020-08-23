export default class RegexPattern {
    /**
     * @email regex
     */
    static email: RegExp;
    /**
     * @username regex
     * that may include _ and – having a length of 3 to 16 characters
     */
    static userName: RegExp;
    /**
     * @url regex
     */
    static url: RegExp;
    /**
     * @phonenumber regex
     * with optional country code/extension
    */
    static phoneNumber: RegExp;
    /**
     * @numberonly regex
     */
    static numberOnly: RegExp;
    /**
     * @decimal numbers regex
     */
    static decimalNumber: RegExp;
    /**
     * @htmltag regex
     */
    static htmltag: RegExp;
    /**
     * @md5hash regex
     */
    static md5: RegExp;
    /**
     * @bitcoinaddress regex
     */
    static bitcoinaddress: RegExp;
    /**
     * @ipaddress
     */
    static ipaddress: RegExp;
    /**
     * @ipv4address regex
     */
    static ipv4address: RegExp;
    /**
     * @ipv6address regex
     */
    static ipv6address: RegExp;
    /**
     * @date regex
     * will match a string as a date in the formats M/D/YY, M/D/YYY, MM/DD/YY, and MM/DD/YYYY.
     * It does not correct for leap year.
     */
    static date: RegExp;
    /**
     * @time12hours regex
     * Time Format HH:MM 12-hour, optional leading 0
     */
    static time12hours: RegExp;
    /**
     * @time24hours regex
     * Time Format HH:MM 24-hour, optional leading 0
     */
    static time24hours: RegExp;
    /**
     * @duplicatestring regex
     */
    static duplicateString: RegExp;
    /**
     * @slug regex
     */
    static slug: RegExp;
    /**
     * @passport regex
     */
    static passport: RegExp;
    /**
     * @passwordComplex regex
     * Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character
     * and be at least 8 characters long
     */
    static passwordComplex: RegExp;
    /**
     * @passwordModerate regex
     * Should have 1 lowercase letter, 1 uppercase letter, 1 number
     * and be at least 8 characters long
     */
    static passwordModerate: RegExp;
    /**
     * @filenameWithExtension regex
     * support all extension (mp4, mp3, wav, png, jpg, gif, etc.)
     */
    static filenameWithExtension: RegExp;
    /**
     * @imageExtension regex
     */
    static imageExtension: RegExp;
    /**
     * @audioExtension regex
     */
    static audioExtension: RegExp;
    /**
     * @videoExtension regex
     */
    static videoExtension: RegExp;
    /**
     * @pdfExtension regex
     */
    static pdfExtension: RegExp;
    /**
     * @binary regex
     */
    static binary: RegExp;
    /**
     * @currency regex
     */
    static currency: RegExp;
}
