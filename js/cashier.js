define(function () {
    'use strict';

    /**
     * @class
     */
    function Cashier() { }

    /**
     * TBD
     */
    Cashier.prototype.coinsFor = function (amount) {
        return ['£2', '50p', '20p', '5p', '2p', '2p'];
    };

    // Return constructor
    return Cashier;
});
