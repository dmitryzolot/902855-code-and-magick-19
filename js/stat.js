'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 25;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var TEXT_HEIGHT = 50;
var BAR_HEIGHT = 20;
var BAR_WIDTH = 40;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT*1.71 - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.fillText('Ура вы победили!', 220, 35);
    ctx.fillText('Список результатов:', 220, 55);

};


var getMaxElement = function(arr) {
  var maxElement = arr[0];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  
  return maxElement;
};

var renderText = function(ctx, x, y, text, color) {
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

var renderColumn = function(ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  
  ctx.fillStyle = '#000';
  
  
  var maxTime = getMaxElement(times);
  
  for (var i = 0; i < players.length; i++) {

    ctx.fillStyle = '#000';

    renderText(ctx, TEXT_WIDTH + CLOUD_X + (GAP + TEXT_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP - TEXT_WIDTH + GAP*2 - BAR_HEIGHT, players[i], '#000');
    renderText(ctx, TEXT_WIDTH + CLOUD_X + (GAP + TEXT_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - barHeight/2 -(barHeight * times[i]) / maxTime, Math.round(times[i]), '#000');

    if (players[i] === 'Вы') {
      renderColumn(ctx, CLOUD_X + TEXT_WIDTH + (GAP + TEXT_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP - TEXT_HEIGHT, BAR_WIDTH, -(barHeight * times[i]) / maxTime, 'rgba(255, 0, 0, 1)');

    } else {
      renderColumn(ctx, CLOUD_X + TEXT_WIDTH + (GAP + TEXT_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP - TEXT_HEIGHT, BAR_WIDTH, -(barHeight * times[i]) / maxTime, 'hsl(230, 70%,' + Math.floor(Math.random() * 100) + '%)');
    }
  }
};