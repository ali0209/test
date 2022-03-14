"use strict";

function getEl(id) {
  return document.getElementById(id);
}

let array = document.getElementsByClassName('bord')

function operation(allin1) {
  let input1 = getEl('input1');
  let input2 = getEl('input2');
  if (allin1 === '+') {
    alert(+input1.value + +input2.value);
  } else if (allin1 === '-') {
    alert(input1.value - input2.value);
  } else if (allin1 === '*') {
    alert(input1.value * input2.value);
  } else if (allin1 === '/') {
    alert(input1.value / input2.value);
  } else {
    alert('ошибка');
  }
}

function alloperation(eventObject) {
  let clickElement = eventObject.currentTarget;
  let htm = clickElement.innerHTML;
  operation(htm);
}




for (let i = 0; i < array.length; i++) {
  let element = array[i];
  element.addEventListener('click', alloperation);
}










