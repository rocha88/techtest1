define(['cashier', 'parser', 'view', 'domReady!'], function (Cashier, CurrencyParser, View, doc) {
    'use strict';

    var cashier = new Cashier();
    var parser = new CurrencyParser();
    var view = new View(doc);

    view.onInput(function (amountStr) {
        var amountInPence = parser.parseString(amountStr);
        //TODO handle strings that could not be parsed
        var coins = cashier.coinsFor(amountInPence);
        view.setOutput(coins);
    });
});
