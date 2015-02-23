define(function() {
    'use strict';

    /**
     * @class
     */
    function CurrencyParser() { }

    /**
     * Parse the supplied string as a number of British pence
     * @param {String} subject - The string to be parsed
     * @returns {Number} The value of the string in pence
     */
    CurrencyParser.prototype.parseString = function(origStr) {
        var str = origStr;

        if (!(typeof str == 'string' || str instanceof String)) 
            //TBD or throw TypeError? Or just call .toString on it?
            return 0;

        // Trim any trailing 'p' symbol
        str = str.replace(/p$/, '');

        // Trim any leading 0s
        str = str.replace(/^0+/, '');

        // Trim any currency symbol; adjust decimal point if required
        if (/^£[^\.]+$/.test(str))
            str += '.0';
        str = str.replace(/^£/, '');

        // Sanitise trailing point with no following digit
        if (/\.$/.test(str))
            str += '0';

        // Ensure string now contains only digits with at most one decimal point
        if (/^\d+\.\d+$/.test(str))
            // Contains a decimal point, so parse as pounds
            return Math.round(parseFloat(str) * 100);
        else if (/^\d+$/.test(str))
            // Parse as whole pence
            return parseInt(str);
        else
            // Empty, or contains non-numeric characters or multiple points
            return 0;
    };

    // Return constructor
    return CurrencyParser;
});
