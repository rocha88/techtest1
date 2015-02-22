define(function () {
    'use strict';

    /**
     * @class
     */
    function Cashier() { }

    /**
     * The coin denominations available in this currency, in descending size.
     * NB includes 10p and 5p coins even though not explicitly required.
     */
    Cashier.DENOMS = [
        ['£2', 200],
        ['£1', 100],
        ['50p', 50],
        ['20p', 20],
        ['10p', 10],
        ['5p', 5],
        ['2p', 2],
        ['1p', 1]
    ];

    /**
     * Returns an object representing the smallest number of coins that can
     * represent the specified value
     * @param {number} amount The amount in pence to calculate coins for
     * @return TBD
     */
    Cashier.prototype.coinsFor = function (amount) {
        // TODO Verify input is a positive integer
        var coinCount = {};

        // Start with the largest denomination and work smaller
        for (var i = 0; amount > 0 && i < Cashier.DENOMS.length; i++) {
            var coinName = Cashier.DENOMS[i][0];
            var coinValue = Cashier.DENOMS[i][1];
            var numCoins = maxCoins(amount, coinValue);
            if (numCoins > 0) {
                coinCount[coinName] = numCoins;
                amount = amount - coinValue * numCoins;
            }
        }

        return coinCount;
    };

    /**
     * Helper function to calculate the maxiumum number of whole coins of
     * the given denomination that 'fit' in the specified pence limit
     */
    function maxCoins(penceLimit, denom) {
        return Math.floor(penceLimit / denom);
    }


    // Return constructor
    return Cashier;
});
