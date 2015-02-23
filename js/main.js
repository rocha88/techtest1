define(['app/Cashier', 'app/Parser', 'app/View', 'lib/domReady!'], function (Cashier, CurrencyParser, View, doc) {
    'use strict';

    var cashier = new Cashier();
    var parser = new CurrencyParser();
    var view = new View(doc);

    // Example of adding custom currency formats to the parser */
    //parser.addFormat(/^(\d+) pence$/, function (str) { return parseInt(str); });

    view.onInput(function (amountStr) {
        var amountInPence = parser.parseString(amountStr);
        //TODO handle strings that could not be parsed
        var coins = cashier.coinsFor(amountInPence);
        view.setOutput(coins);
    });
});
