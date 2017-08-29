'use strict';

function changeFont(font) {
  document.getElementById('output-text').style.fontFamily = font.value;
}

function changeFontSize(size) {
  document.getElementById('output-text').style.fontSize = size.value + 'px';
}

function changeFontWeight(style) {
  document.getElementById('output-text').style.fontWeight = style;
}

function changeFontStyle(style) {
  document.getElementById('output-text').style.fontStyle = style;
}

function changeFontDecor(style) {
  document.getElementById('output-text').style.textDecoration = style;
}

function changeTextAlign(align) {
  document.getElementById('output-text').style.textAlign = align;
}

function changeLeading(size) {
  document.getElementById('output-text').style.lineHeight = size.value + '%';
}

function changeOpacity(size) {
  document.getElementById('numberOpacity').value = size;
  document.getElementById('rangeOpacity').value = size;
  document.getElementById('output-text').style.opacity = size;
}
