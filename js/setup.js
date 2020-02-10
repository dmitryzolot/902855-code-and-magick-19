'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var MIN_NAME_LENGTH = 2;

function getArrayRandomElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

var userDialogSetup = document.querySelector('.setup');
userDialogSetup.classList.remove('hidden');

var similarElement = document.querySelector('.setup-similar');

similarElement.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', function (evt) {
    if (evt.key === ESC_KEY) {
      closePopup();
    }
  });
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
});


setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});


var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < MIN_NAME_LENGTH) {
    target.setCustomValidity(
        'Имя должно состоять минимум из ' +
      MIN_NAME_LENGTH +
      '-х символов'
    );
  } else {
    target.setCustomValidity('');
  }
});


var playersCoatColor = document.querySelector('.wizard-coat');

playersCoatColor.addEventListener('click', function () {
  playersCoatColor.style.fill = getArrayRandomElement(COAT_COLORS);
}
);


var playersEyesColor = document.querySelector('.wizard-eyes');

playersEyesColor.addEventListener('click', function () {
  playersEyesColor.style.fill = getArrayRandomElement(EYES_COLORS);
}
);


var playersFireballColor = document.querySelector('.setup-fireball-wrap');

playersFireballColor.addEventListener('click', function () {
  playersFireballColor.style.background = getArrayRandomElement(FIREBALL_COLORS);
}
);

var generateWizard = function (wizardNames, wizardLastNames, coatColors, eyesColors) {
  var wizard = {};
  wizard.name = getArrayRandomElement(wizardNames);
  wizard.lastName = getArrayRandomElement(wizardLastNames);
  wizard.coatColor = getArrayRandomElement(coatColors);
  wizard.eyesColor = getArrayRandomElement(eyesColors);

  return wizard;
};


function generateWizardsArray(length) {

  var wizards = [];

  for (var i = 1; i <= length; i++) {
    wizards.push(generateWizard(WIZARD_NAMES, WIZARD_LASTNAMES, COAT_COLORS, EYES_COLORS));
  }
  return wizards;
}
var wizards = generateWizardsArray(4);


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.lastName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

// userDialogSetup.querySelector('.setup-similar').classList.remove('hidden');
