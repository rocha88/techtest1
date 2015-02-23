define(['./DomUtils'], function (DomUtils) {
    'use strict';

    /**
     * Creates a new view for the application based on the supplied DOM object
     * @class
     * @param {HTMLElement} doc The document element
     */
    function View(doc) {
        this.doc = doc;
        this.resultsContainer = this.doc.getElementById('coins');
        this.errorsContainer = this.doc.getElementById('errors');

        this.enableForm();
    }

    /**
     * Enable the input form.
     */
    View.prototype.enableForm = function () {
        var form = this.doc.getElementById('genieForm');
        for (var i = 0; form !== null && i < form.elements.length; i++)
            form.elements[i].disabled = false;
    };

    /** 
     * Specify a callback to invoke with the entered value when the form is submitted
     * @param {View-inputCallback} handler - The callback that handles the input
     */
    View.prototype.onInput = function (handler) {
        var form = this.doc.getElementById('genieForm');
        if (form !== null) {
            form.addEventListener('submit', function (evt) {
                var amount = this.elements.amount.value;
                handler(amount);

                // Stop form from actually submitting
                evt.preventDefault();
            }, false);
        }
    };

    /**
     * Callback for the input event handler
     * @callback View-inputCallback
     * @param {number} amount The amount string that the user entered
     */

    /**
     * Removes all results from the view
     */
    View.prototype.clearResults = function () {
        DomUtils.removeAllChildren(this.resultsContainer);
    };

    /**
     * Add the specified children to the results node as list items
     * @param {Array} results The results to be added
     */
    View.prototype.setOutput = function (results) {
        this.clearResults();

        if (this.resultsContainer) {
            for (var coin in results) {
                var label = coin + ' x ' + results[coin];
                var item = DomUtils.createTextElement(this.doc, 'li', label);
                this.resultsContainer.appendChild(item);
            }
        }
    };

    /**
     * Display invalid format error
     */
    View.prototype.showFormatError = function () {
        var error = document.getElementById('formatError');
        if (error)
            error.className = '';
    };

    /**
     * Hide any validation error messages
     */
    View.prototype.hideErrors = function () {
        if (this.errorsContainer) {
            for (var i = 0; i < this.errorsContainer.children.length; i++) {
                this.errorsContainer.children[i].className = 'hidden';
            }
        }
    };

    // Return constructor
    return View;
});
