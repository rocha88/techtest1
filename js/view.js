define(function () {
    'use strict';

    /**
     * Creates a new view for the application based on the supplied DOM object
     * @class
     * @param {HTMLElement} doc The document element
     */
    function View(doc) {
        this.doc = doc;
        this.resultsNode = this.doc.getElementById('coins');

        this.enableForm();
    }

    /**
     * Enable the input form.
     */
    View.prototype.enableForm = function () {
        var form = this.doc.getElementById('genieForm');
        for (var i = 0; form != null && i < form.elements.length; i++)
            form.elements[i].disabled = false;
    };

    /** 
     * Specify a callback to invoke with the entered value when the form is submitted
     * @param {View-inputCallback} handler - The callback that handles the input
     */
    View.prototype.onInput = function (handler) {
        var form = this.doc.getElementById('genieForm');
        if (form != null) {
            form.addEventListener('submit', function (evt) {
                var amount = this.elements['amount'].value;
                handler(amount);

                // Stop form from actually submitting
                evt.preventDefault();
            }, false);
        }
    };

    /**
     * Callback for the input event handler
     * @callback View-inputCallback
     * @param {number} amount The amount that the user entered
     */

    /**
     * Removes all child nodes from the results node
     */
    View.prototype.clearResults = function () {
        while (this.resultsNode != null && this.resultsNode.lastChild)
            this.resultsNode.removeChild(this.resultsNode.lastChild);
    };

    /**
     * Add the specified children to the results node as list items
     * @param {Array} results The results to be added
     */
    View.prototype.setOutput = function (results) {
        this.clearResults();

        if (this.resultsNode) {
            for (var denom in results) {
                var item = this.doc.createElement('li');
                var label = denom + ' x ' + results[denom];
                item.appendChild(this.doc.createTextNode(label));
                this.resultsNode.appendChild(item);
            }
        }
    };

    // Return constructor
    return View;
});
