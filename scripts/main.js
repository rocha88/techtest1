define(function() {
    // Enable form, since JavaScript is working
    var form = document.getElementById('genieForm');
    for (var i = 0; i < form.elements.length; i++)
        form.elements[i].disabled = false;

    document.getElementById('genieForm').addEventListener('submit', function (evt) {
        var coinsDiv = document.getElementById('coins');
        var coins = ['£2', '£2', '50p', '20p', '5p'];
        for (var i = 0; i < coins.length; i++) {
            var item = document.createElement('li');
            item.appendChild(document.createTextNode(coins[i]));
            coinsDiv.appendChild(item);
        }
        evt.preventDefault();
    });
});
