'use strict';

(function () {

  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  function getArrayRandomElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }

  window.colorize = function (element) {

    element.addEventListener('click', function () {

      var playersCoatColor = document.querySelector('.wizard-coat');
      var playersEyesColor = document.querySelector('.wizard-eyes');
      var playersFireballColor = document.querySelector('.setup-fireball-wrap');

      if (element === playersCoatColor) {
        playersCoatColor.style.fill = getArrayRandomElement(COAT_COLORS);
      }
      if (element === playersEyesColor) {
        playersEyesColor.style.fill = getArrayRandomElement(EYES_COLORS);
      }
      if (element === playersFireballColor) {
        playersFireballColor.style.background = getArrayRandomElement(FIREBALL_COLORS);
      }
    });
  };

})();


