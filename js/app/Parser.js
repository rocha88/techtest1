define(function() {
    'use strict';

    /**
     * @class
     */
    function CurrencyParser() { }

    function ParseError() { }

    var penceOnlyParser = function (str) {
        var found = str.match(/^(\d+)p?$/);
        if (found === null)
            throw new ParseError();
        else
            return parseInt(found[1]);
    };

    var poundsOnlyParser = function (str) {
        var found = str.match(/^£(\d+)p?$/);
        if (found === null)
            throw new ParseError();
        else
            return parseInt(found[1] * 100);
    };

    var poundsAndPenceParser = function (str) {
        var found = str.match(/^£?(\d+(\.\d*))p?$/);
        if (found === null)
            throw new ParseError();
        else
            return Math.round(parseFloat(found[1]) * 100);
    };

    var parsers = [
        penceOnlyParser,
        poundsOnlyParser,
        poundsAndPenceParser
    ];

    /**
     * Parse the supplied string as a number of British pence
     * @param {String} subject - The string to be parsed
     * @returns {Number} The value of the string in pence
     */
    CurrencyParser.prototype.parseString = function(str) {
        for (var i = 0; i < parsers.length; i++) {
            try {
                var parser = parsers[i];
                return parser(str)
            } catch (e) {
                continue;
            }
        }

        // Return undefined if no parser succeeded
    };

    // Return constructor
    return CurrencyParser;
});
