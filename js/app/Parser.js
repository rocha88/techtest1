define(function() {
    'use strict';

    /**
     * @class
     */
    function CurrencyParser() { }

    /**
     * Array of recognised currency formats, each with a regex pattern
     * and a parser function which receives the first matched group.
     */
    var formats = [
        {
            // Just pence, with optional 'p'
            pattern: /^(\d+)p?$/,
            parser: function (str) { return parseInt(str); }
        },
        {
            // Just pounds, with '£' and optional 'p'
            pattern: /^£(\d+)p?$/,
            parser: function (str) { return parseInt(str) * 100; }
        },
        {
            // Pounds and pence, with decimal point, and optional '£' and/or 'p'
            pattern: /^£?(\d+(\.\d*))p?$/,
            parser: function (str) { return Math.round(parseFloat(str) * 100); }
        },
    ];

    /**
     * Parse the specified string and return a number of pence Sterling
     * @param {String} input - The string to be parsed
     * @returns {Number} Value in pence, or undefined if parsing failed
     */
    CurrencyParser.prototype.parseString = function(input) {
        for (var i = 0; i < formats.length; i++) {
            var format = formats[i];
            var matches = input.match(format.pattern);
            if (matches)
                return format.parser(matches[1]);
        }

        // Return undefined if no format was matched
    };

    // Return constructor
    return CurrencyParser;
});
