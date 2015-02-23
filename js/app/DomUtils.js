define(function() {
    /**
     * Remove all of the child nodes of a given node.
     */
    function removeAllChildren(node) {
        if (node !== null)
            while (node.lastChild)
                node.removeChild(node.lastChild);
    }

    /**
     * Create a new element with the specified body text
     */
    function createTextElement(doc, tagName, body) {
        var elem = doc.createElement(tagName);
        elem.appendChild(doc.createTextNode(body));

        return elem;
    }

    return {
        removeAllChildren: removeAllChildren,
        createTextElement: createTextElement
    };
});
