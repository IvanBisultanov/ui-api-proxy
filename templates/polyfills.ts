/**
 * converts date to string in format YYYY-MM-DD
 */
Date.prototype.toApaleoDateIso = function (this: Date) {
    return this.getUTCFullYear() + '-'
        + toTwoDigitsWithLeadingZeros(this.getUTCMonth() + 1) + '-' // JS counts months starting with 0
        + toTwoDigitsWithLeadingZeros(this.getUTCDate());
}

/**
 * converts date to string in format YYYY-MM-DD[T]HH:mm:ss[Z]s
 */
Date.prototype.toApaleoIso = function (this: Date) {
    return this.toApaleoDateIso() + 'T'
        + toTwoDigitsWithLeadingZeros(this.getUTCHours()) + ':'
        + toTwoDigitsWithLeadingZeros(this.getUTCMinutes()) + ':'
        + toTwoDigitsWithLeadingZeros(this.getUTCSeconds()) + 'Z';
}

/**
 * JSON.stringify which temporarily overwrites Date.prototype.toJSON to serialize date correctly.
 */
Object.prototype.toApaleoJson = function (this: Object) {
    const originalDateToJson = Date.prototype.toJSON;

    Date.prototype.toJSON = Date.prototype.toApaleoIso;

    const ret = JSON.stringify(this);
    Date.prototype.toJSON = originalDateToJson;
    return ret;
}

function toTwoDigitsWithLeadingZeros(num: number) {
    if (0 <= num && num <= 9) {
        return `0${num}`;
    } else {
        return `${num}`;
    }
}

