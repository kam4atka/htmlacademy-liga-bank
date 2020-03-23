'use strict';

function InitialPrice(classEl, terms, param) {

  // Elements

  var root = document.querySelector(classEl);

  var inputEl = root.querySelector(param.inputEl);

  var range = root.querySelector(param.rangeEl);

  var rangeRoller = range.querySelector(param.rangeToggleEl);
  var rangeRollerWidth = window.getComputedStyle(rangeRoller, null).getPropertyValue('width');
  rangeRollerWidth = Number(rangeRollerWidth.slice(0, rangeRollerWidth.length - 2));

  var line = range.querySelector('.range__line');
  var lineWidth = window.getComputedStyle(line, null).getPropertyValue('width');
  lineWidth = Number(lineWidth.slice(0, lineWidth.length - 2));
  var lineOffsetLeft = line.offsetParent.offsetLeft;

  var lineWidthPercent = lineWidth / (1 - terms.percent);

  var offset = Math.ceil(lineWidthPercent * terms.percent);

  var rangeValue = range.querySelector(param.rangeValueEl);

  // FUNCTION - start

  var replaceInnerText = function (element, text) {
    element.innerText = text;
  };

  var getValueInput = function (element) {
    return element.value;
  };

  var setValueInput = function (element, value) {
    element.setAttribute('value', value);
  };

  var calculateMinValue = function () {
    return Number(terms.currentSum) * Number(terms.percent);
  };

  var calculatePosition = function (percent) {
    return Math.ceil((percent * (lineWidth + offset)) - offset);
  };

  var setPosition = function (element, position) {
    element.style.left = position + 'px';
  };

  var calculateRangeSteps = function () {
    var array = [];
    var countPoints = (1 - Number(terms.percent)) / terms.percentStep;
    for (var i = 0; i <= countPoints; i++) {

      array.push({
        count: i,
        percent: Number((terms.percent + terms.percentStep * i).toFixed(2)),
      });

      if (i === 0) {
        array[i].position = 0;
      } else if (i === countPoints) {
        array[i].position = lineWidth - rangeRollerWidth;
      } else {
        array[i].position = calculatePosition(array[i].percent) - (rangeRollerWidth / 2);
      }

      array[i].value = Math.floor(array[i].percent * terms.currentSum);
    }
    return array;
  };

  // HANDLERS - start

  var focusInputHandler = function (fiEvt) {
    fiEvt.preventDefault();

    setValueInput(inputEl, terms.initialSum);
    inputEl.value = terms.initialSum;
    fiEvt.target.setAttribute('type', 'number');
  };

  var blurInputHandler = function (biEvt) {
    biEvt.preventDefault();

    biEvt.target.setAttribute('type', 'text');
    var currentValue = getValueInput(biEvt.target);

    if (currentValue < calculateMinValue()) {
      setValueInput(inputEl, calculateMinValue() + ' ' + terms.currency);
      inputEl.value = calculateMinValue() + ' ' + terms.currency;
      terms.initialSum = calculateMinValue();
    } else {
      terms.initialSum = Number(currentValue);
      setValueInput(inputEl, currentValue + ' ' + terms.currency);
      inputEl.value = currentValue + ' ' + terms.currency;
    }

    updateRange();
  };

  var mouseDownToggleHandler = function (mdtEvt) {
    mdtEvt.preventDefault();

    var mouseMoveToggleHandler = function (kdtEvt) {
      kdtEvt.preventDefault();
      var leftMovePos = Math.max(0, Math.min(kdtEvt.pageX - lineOffsetLeft, lineWidth));
      setPosition(rangeRoller, leftMovePos);
      setPosition(rangeValue, leftMovePos);
    };

    var mouseUpToggleHandler = function (kutEvt) {
      kutEvt.preventDefault();

      var leftUpPos = Math.max(0, Math.min(kutEvt.pageX - lineOffsetLeft, lineWidth));

      for (var i = 0; i < rangeSteps.length; i++) {
        if (leftUpPos >= rangeSteps[i].position) {
          setPosition(rangeRoller, rangeSteps[i].position);
          setPosition(rangeValue, rangeSteps[i].position);
          replaceInnerText(rangeValue, (rangeSteps[i].percent * 100).toFixed(0) + '%');
          terms.initialSum = rangeSteps[i].value;
          setValueInput(inputEl, rangeSteps[i].value + ' ' + terms.currency);
          inputEl.value = rangeSteps[i].value + ' ' + terms.currency;
        }
      }

      document.removeEventListener('mousemove', mouseMoveToggleHandler);
      document.removeEventListener('mouseup', mouseUpToggleHandler);
    };

    document.addEventListener('mousemove', mouseMoveToggleHandler);
    document.addEventListener('mouseup', mouseUpToggleHandler);
  };

  // init

  terms.initialSum = calculateMinValue();
  var rangeSteps = calculateRangeSteps();

  var update = function () {
    if (terms.initialSum < calculateMinValue()) {
      setValueInput(inputEl, calculateMinValue() + ' ' + terms.currency);
      inputEl.value = calculateMinValue() + ' ' + terms.currency;
      terms.initialSum = calculateMinValue();
    } else {
      setValueInput(inputEl, terms.initialSum + ' ' + terms.currency);
      inputEl.value = terms.initialSum + ' ' + terms.currency;
    }
    inputEl.onfocus = focusInputHandler;
    inputEl.onblur = blurInputHandler;

    rangeSteps = calculateRangeSteps();
    updateRange();
  };

  var updateRange = function () {
    var actualPercent = Math.ceil(terms.initialSum * (100 / terms.currentSum));
    replaceInnerText(rangeValue, actualPercent + '%');
    var positionRange = calculatePosition(actualPercent / 100);
    setPosition(rangeRoller, positionRange);
    setPosition(rangeValue, positionRange);
  };

  rangeRoller.addEventListener('mousedown', mouseDownToggleHandler);

  window.initialPrice = {
    update: update
  };
}
