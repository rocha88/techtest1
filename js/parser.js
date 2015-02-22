define(function() {
    'use strict';

    /**
     * @class
     */
    function CurrencyParser() { }

    /**
    * Parse the supplied string as a number of British pence
    * 
    * First attempt with no regexes, and only using OLD SKOOL JS
    *
    * @param {String} subject - The string to be parsed
    * @returns {Number} The value of the string in pence
    */
    CurrencyParser.prototype.parseString = function(origStr) {
        var str = origStr;

        if (!(typeof str == 'string' || str instanceof String)) 
            //TBD or throw TypeError? Or just call .toString on it?
            return 0;

        // Trim any trailing 'p' symbol
        if (str.substring(str.length - 1) == 'p') // TODO or endsWith - polyfill?
            str = str.substring(0, str.length - 1);

        // Trim any leading 0s
        while(str.substring(0, 1) == '0') // TODO inefficient
            str = str.substring(1);

        // Recognise and trim any currency marker
        if (str.substring(0, 1) == '£') { // TODO or startsWith
            if (str.indexOf('.') == -1) 
                str += '.0';
            str = str.substring(1);
        }

        // Sanitise trailing point with no following digit
        if (str.substring(str.length - 1) == '.') // TODO or endsWith
        str += '0';

        // Check string contains only digits with at most one decimal point
        // TODO much easier with regex!
        var pointCount = 0;
        for (var i = 0; i < str.length; i++) {
            var code = str.charCodeAt(i);
            if ((code < 46 || code == 47 || code > 57) || (code == 46 && ++pointCount > 1))
                return 0;
        }

        // Handle strings which are empty, or effectively empty
        if (str.length < 1)
        return 0;

        if (str.indexOf('.') != -1) 
            // If contains a decimal point, parse as pounds
            return Math.round(parseFloat(str) * 100);
        else
            // Parse as whole pence
            return parseInt(str);
    };

    // Return constructor
    return CurrencyParser;
});
