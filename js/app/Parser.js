define(function() {
    'use strict';

    /**
     * Creates a new CurrencyParser
     * @class
     */
    function CurrencyParser() {
        // Default currency formats, each with a regex pattern and a parser
        // function that receives the first matched regex group.
        this._formats = [
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
    }

    /**
     * Parse the specified string and return a number of pence Sterling
     * @param {String} input - The string to be parsed
     * @returns {Number} Value in pence, or undefined if parsing failed
     */
    CurrencyParser.prototype.parseString = function(input) {
        for (var i = 0; i < this._formats.length; i++) {
            var format = this._formats[i];
            var matches = input.match(format.pattern);
            if (matches)
                return format.parser(matches[1]);
        }

        // Return undefined if no format was matched
    };

    /**
     * Add a custom currency format to be tried after the defaults
     * @param {RegExp} newPattern - Regular expression for the currency format
     * @param {CurrencyParser~parserCallback} newParser - Function to parse this format
     */
    CurrencyParser.prototype.addFormat = function(newPattern, newParser) {
        this._formats.push({ pattern: newPattern, parser: newParser });
    }

    /**
     * Callback to parse a currency format
     * @callback CurrencyParser~parserCallback
     * @param {string} str - The value of the first matching regex group
     */

    // Return constructor
    return CurrencyParser;
});
