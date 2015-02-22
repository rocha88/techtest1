define(['cashier', 'domReady!'], function (Cashier, doc) {
    'use strict';

    // Enable form, since JavaScript is working
    var form = doc.getElementById('genieForm');
    for (var i = 0; i < form.elements.length; i++)
        form.elements[i].disabled = false;

    var cashier = new Cashier();
    console.log(cashier.currency);

    doc.getElementById('genieForm').addEventListener('submit', function (evt) {
        var coinsDiv = doc.getElementById('coins');
        var coins = ['£2', '£2', '50p', '20p', '5p'];
        for (var i = 0; i < coins.length; i++) {
            var item = doc.createElement('li');
            item.appendChild(doc.createTextNode(coins[i]));
            coinsDiv.appendChild(item);
        }
        evt.preventDefault();
    });
});
