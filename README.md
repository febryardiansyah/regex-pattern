# Regex-Pattern
<br>
<p align="center">
  <img width=480 src="docs/logo.png">
</p>
<br>
<p align="center">
  A simple Javascript & TypeScript module of Regex Pattern Collection for String Validation
</p>
<br>

[![Version](https://img.shields.io/npm/v/regexpattern-collection.svg?style=flat)](https://www.npmjs.com/package/regexpattern-collection)
<img alt="GitHub" src="https://img.shields.io/github/license/febryardiansyah/regex-pattern"> 
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/febryardiansyah/regex-pattern">

## Installation
```bash
npm i regexpattern-collection
```

## Usage
1. CommonJs
```javascript
const { RegexValidation, RegexPattern } = require("regexpattern-collection").default;

RegexValidation.hasMatch("yourcrush@mail.com", RegexPattern.email);//true
RegexValidation.hasMatch("yourcrush", RegexPattern.email);//false
```

2. ES6
```typescript
import { RegexValidation, RegexPattern } from "regexpattern-collection"

RegexValidation.hasMatch("yourcrush@mail.com", RegexPattern.email);//true
```

## Regex Pattern Collection

| Pattern   |     Type      | Description   |
| --------  | -----------   | ------------  |
|RegexPattern.email | Email |      email    |
|RegexPattern.userName | Username |that may include _ and – having a length of 3 to 16 characters|
|RegexPattern.url | Url | any url (https://, ftps://, tg://, zoommtg://, etc) |
|RegexPattern.webUrl | Web URL | http,https |
|RegexPattern.fileUrl | File URL | afp,ftp,ftps,smb,sftp,ssh,dav,davs |
|RegexPattern.numberOnly | Number Only | only contains numbers|
|RegexPattern.decimalNumber | Decimal Number | only contains decimal |
|RegexPattern.htmltag | HTML Tag | only contains html tag |
|RegexPattern.htmltag | MD5 Hash | only contains md5 |
|RegexPattern.bitcoinaddress | Bitcoin Address | only contains bitcoin address |
|RegexPattern.ipaddress | IP Address | only contains ip address |
|RegexPattern.ipv4address | IPV4 Address | only contains ipv4 address |
|RegexPattern.ipv6address | IPV6 Address | only contains ipv6 address |
|RegexPattern.date | Date | will match a string as a date in the formats M/D/YY, M/D/YYY, MM/DD/YY, and MM/DD/YYYY |
|RegexPattern.time12hours | Time 12 Hours | Time Format HH:MM 12-hour, optional leading 0 |
|RegexPattern.time24hours | Time 24 Hours | Time Format HH:MM 24-hour, optional leading 0 |
|RegexPattern.duplicateString | Duplicate String | duplicate string |
|RegexPattern.slug | Slug | slug |
|RegexPattern.passport | Passport | passport |
|RegexPattern.passwordComplex | Password Complex | Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long|
|RegexPattern.passwordModerate | Password Moderate | Should have 1 lowercase letter, 1 uppercase letter, 1 number and be at least 8 characters long|
|RegexPattern.filenameWithExtension | File Name With Extension | support all extension (mp4, mp3, wav, png, jpg, gif, etc.) |
|RegexPattern.imageExtension | Image Extension | jpeg,jpg,gif,png,bmp |
|RegexPattern.audioExtension | Audio Extension | mp3,wav,wma,amr,ogg |
|RegexPattern.videoExtension | Video Extension | mp4,avi,wmv,rmvb,mpg,mpeg,3gp |
|RegexPattern.ocExtension | OC Extension | xlsx,xls,csv |
|RegexPattern.pdfExtension | PDF Extension | pdf |
|RegexPattern.binary | Binrary | binary numbers |
|RegexPattern.base64 | Base64 | Base64 format |
|RegexPattern.jwt | JWT | JSON Web Token format |
|RegexPattern.currency | Currency | country currency |

## License
[MIT](https://github.com/febryardiansyah/regex-pattern/blob/master/LICENSE)
