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
    Cashier.DENOMS = [200, 100, 50, 20, 10, 5, 2, 1];

    /**
     * Returns an object representing the smallest number of coins that can
     * represent the specified value
     * @param {number} value The amount of pence to calculate coins for
     * @return TBD
     */
    Cashier.prototype.coinsFor = function (amount) {
        // TODO check input is a positive integer
        var coins = {};

        // Start with the largest denomination and work smaller
        for (var i = 0; amount > 0 && i < Cashier.DENOMS.length; i++) {
            var denom = Cashier.DENOMS[i];
            var qty = maxCoins(amount, denom);
            if (qty > 0) {
                coins[denom] = qty;
                amount -= denom * qty;
            }
        }

        return coins;
    };

    /**
     * Helper function to calculate the maxiumum number of whole coins of
     * the given denomination that 'fit' in the specified pence limit
     */
    function maxCoins(penceLimit, denom) {
        return Math.floor(penceLimit / denom);
    };


    // Return constructor
    return Cashier;
});
