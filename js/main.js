define(['cashier', 'view', 'domReady!'], function (Cashier, View, doc) {
    'use strict';

    var cashier = new Cashier();
    var view = new View(doc);

    view.onInput(function (amount) {
        var coins = cashier.coinsFor(amount);
        view.setOutput(coins);
    });
});
