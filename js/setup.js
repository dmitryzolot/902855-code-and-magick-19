'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

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

// var wizards = [
//   {
//     name: getArrayRandomElement(WIZARD_NAMES),
//     lastName: getArrayRandomElement(WIZARD_LASTNAMES),
//     coatColor: getArrayRandomElement(COAT_COLORS),
//     eyesColor: getArrayRandomElement(EYES_COLORS)
//   },
//   {
//     name: getArrayRandomElement(WIZARD_NAMES),
//     lastName: getArrayRandomElement(WIZARD_LASTNAMES),
//     coatColor: getArrayRandomElement(COAT_COLORS),
//     eyesColor: getArrayRandomElement(EYES_COLORS)
//   },
//   {
//     name: getArrayRandomElement(WIZARD_NAMES),
//     lastName: getArrayRandomElement(WIZARD_LASTNAMES),
//     coatColor: getArrayRandomElement(COAT_COLORS),
//     eyesColor: getArrayRandomElement(EYES_COLORS)
//   },
//   {
//     name: getArrayRandomElement(WIZARD_NAMES),
//     lastName: getArrayRandomElement(WIZARD_LASTNAMES),
//     coatColor: getArrayRandomElement(COAT_COLORS),
//     eyesColor: getArrayRandomElement(EYES_COLORS)
//   }
// ];


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
