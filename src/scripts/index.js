import '../styles/index.sass';


window.onload = () => {
  getValueCheckbox();
}

//Buttons
document.getElementById('refresh').onclick = getValueCheckbox;

// Copy password
const copyPass = () => {
  const a = document.getElementById('output');

  if (a.value != 'Пароль скопирован' && !a.value == false) {
    a.focus();
    a.select();

    document.execCommand('copy');
    
    outputField('Пароль скопирован');
  }

  if (!a.value == true) {
    a.placeholder = 'Обновите';
  }
}
// Get copy button
const copyBtn = document.getElementById('copy');
copyBtn.onclick = copyPass;


// Show Password 
const outputField = (text) => {
  document.getElementById('output').value = text;
}
// Length password and show number
const rangeInput = document.getElementById('range-pass');
rangeInput.oninput = getLengthPass;

function getLengthPass() {
  return document.getElementById('text-pass').value = rangeInput.value;
}

// Checkbox
const checkbox = document.getElementsByName('check');

for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].onchange = getValueCheckbox;
}

function getValueCheckbox() {
  let valueBox = [];

  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      valueBox.push(checkbox[i].value);
    }
  }
  generatePassword(valueBox);
}

// Rand Functions
const randChar = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const randSymbol = () => {
  //let count = 33;// all symbols

  let num = Math.floor(Math.random() * 33);

  if (num < 16) {// if num==0 => 32+0=32 && 32+15=47
    num += 32;// 32-47
  }
  else if (num < 23) {// num != 0 && all 7 chars but num==16/22
    num -= 15;
    num += 57;// 58-64
  }
  else if (num < 29) {// num != 0 && all 6 chars but num==23/28
    num -= 22;
    num += 90;// 91-96
  }
  else if (num < 33) {// num != 0 && all 4 chars but num==29/32
    num -= 28;
    num += 122;// 123-126
  }

  return num;
}

// Generate Password
function generatePassword(valueCheckboxes) {
  let lengthPass = getLengthPass();
  let passwordArray = [];

  for (let i = 0; i < lengthPass; i++) {
    let randNum = Math.floor(Math.random() * valueCheckboxes.length);

    if (valueCheckboxes.length == 0) return; // all checkbox == null

    if (valueCheckboxes[randNum] == 'low') {
      passwordArray.push(String.fromCharCode(randChar(97, 123)));// a-z
    } else if (valueCheckboxes[randNum] == 'up') {
      passwordArray.push(String.fromCharCode(randChar(65, 91)));// A-Z
    } else if (valueCheckboxes[randNum] == 'num') {
      passwordArray.push(String.fromCharCode(randChar(48, 58)));// 0-9
    } else if (valueCheckboxes[randNum] == 'symb') {
      passwordArray.push(String.fromCharCode(randSymbol()));// {|}~space!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
    }
  }
  const newPass = passwordArray.join('');

  outputField(newPass);

  // console.log( newPass );
}


// @types/jest jest ts-jest ts-loader typescript