document.getElementById('showBtn').addEventListener('click', function (evt) {
  var coinsDiv = document.getElementById('coins');
  var coins = ['2pounds.gif', 'pound.gif', '20p.jpg', '20p.jpg'];
  for (var i = 0; i < coins.length; i++) {
    var image = document.createElement('img');
    image.setAttribute('src', 'images/' + coins[i]);
    coinsDiv.appendChild(image);
  }
});
