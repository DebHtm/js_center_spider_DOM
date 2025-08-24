'use strict';

const div = document.querySelector('div');
const img = document.querySelector('img');

function cenrting(back, obj) {
  obj.style.left = back.clientWidth / 2 - obj.clientWidth / 2 + 'px';
  obj.style.top = back.clientHeight / 2 - obj.clientHeight / 2 + 'px';
}

cenrting(div, img);
