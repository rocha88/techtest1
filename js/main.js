define(
    ['app/Cashier', 'app/Parser', 'app/View', 'lib/domReady!'], 
    function (Cashier, CurrencyParser, View, doc) {
        'use strict';

        var cashier = new Cashier();
        var parser = new CurrencyParser();
        var view = new View(doc);

        // Example of adding custom currency formats to the parser */
        //parser.addFormat(/^(\d+) pence$/, function (str) { return parseInt(str); });

        view.onInput(function (amountStr) {
            view.hideErrors();

            var amountInPence = parser.parseString(amountStr);
            if (!amountInPence)
                view.showFormatError();

            var coins = cashier.coinsFor(amountInPence);
            view.setOutput(coins);
        });
    }
);
