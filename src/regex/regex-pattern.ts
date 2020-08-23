export default class RegexPattern{
    /**
     * @email regex
     */
    static email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    /**
     * @username regex
     * that may include _ and – having a length of 3 to 16 characters
     */
    static userName = /^[a-z0-9_-]{3,16}$/

    /**
     * @url regex
     */
    static url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/

    /**
     * @phonenumber regex
     * with optional country code/extension 
    */
    static phoneNumber = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/

    /**
     * @numberonly regex
     */
    static numberOnly = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/

    /**
     * @decimal numbers regex
     */
    static decimalNumber = /^\d*\.\d+$/

    /**
     * @htmltag regex
     */
    static htmltag = /<\/?[\w\s="/.':;#-\/\?]+>/gi

    /**
     * @md5hash regex
     */
    static md5 = /^[a-f0-9]{32}$/

    /**
     * @bitcoinaddress regex
     */
    static bitcoinaddress = /^[13][a-km-zA-HJ-NP-Z0-9]{26,33}$/

    /**
     * @ipaddress
     */
    static ipaddress = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/

    /**
     * @ipv4address regex
     */
    static ipv4address = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/ 

    /**
     * @ipv6address regex
     */
    static ipv6address = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/

    /**
     * @date regex
     * will match a string as a date in the formats M/D/YY, M/D/YYY, MM/DD/YY, and MM/DD/YYYY.
     * It does not correct for leap year.
     */
    static date = /^((0?[13578]|10|12)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1})))$/

    /**
     * @time12hours regex
     * Time Format HH:MM 12-hour, optional leading 0
     */
    static time12hours = /^(0?[1-9]|1[0-2]):[0-5][0-9]$/
    
    /**
     * @time24hours regex
     * Time Format HH:MM 24-hour, optional leading 0
     */
    static time24hours = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/

    /**
     * @duplicatestring regex
     */
    static duplicateString = /(\b\w+\b)(?=.*\b\1\b)/

    /**
     * @slug regex
     */
    static slug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
    
    /**
     * @passport regex
     */
    static passport = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/

    /**
     * @passwordComplex regex
     * Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character
     * and be at least 8 characters long
     */
    static passwordComplex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ 

    /**
     * @passwordModerate regex
     * Should have 1 lowercase letter, 1 uppercase letter, 1 number
     * and be at least 8 characters long
     */
    static passwordModerate = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/

    /**
     * @filenameWithExtension regex
     * support all extension (mp4, mp3, wav, png, jpg, gif, etc.)
     */
    static filenameWithExtension = /\.[0-9a-z]{1,5}$/
    
    /**
     * @imageExtension regex
     */
    static imageExtension = /.(jpeg|jpg|gif|png|bmp)$/

    /**
     * @audioExtension regex
     */
    static audioExtension = /.(mp3|wav|wma|amr|ogg)$/

    /**
     * @videoExtension regex
     */
    static videoExtension = /.(mp4|avi|wmv|rmvb|mpg|mpeg|3gp)$/

    /**
     * @pdfExtension regex
     */
    static pdfExtension = /.pdf$/
    
    /**
     * @binary regex
     */
    static binary = /^[0-1]*$/

    /**
     * @currency regex
     */
    static currency = /^(S?\$|\₩|Rp|\¥|\€|\₹|\₽|fr|R$|R)?[ ]?[-]?([0-9]{1,3}[,.]([0-9]{3}[,.])*[0-9]{3}|[0-9]+)([,.][0-9]{1,2})?( ?(USD?|AUD|NZD|CAD|CHF|GBP|CNY|EUR|JPY|IDR|MXN|NOK|KRW|TRY|INR|RUB|BRL|ZAR|SGD|MYR))?$/
}