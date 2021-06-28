import '../styles/index.sass';


class PassGenerator {
  constructor() {
    this.lowChar = 'abcdefghijklmnopqrstuvwxyz';
    this.upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.numbers = '0123456789';
    this.symbols = '^!№;#%$&:?|\"\'\`\\/.,*{}()[]-_+=@<>~';

    this.checkboxesState = [];
    this.lengthPassword = 4;


    this.passwordField = document.querySelector('.password__input');
    this.refresh = document.querySelector('.js-password__image--refresh');
    this.copy = document.querySelector('.js-password__image--copy');

    this.showPassLength = document.querySelector('.js-options__input-text');
    this.range = document.querySelector('.js-options__input-range');

    this.checkboxes = document.querySelectorAll('.js-options__checkbox');


    this.setListeners();

    this.getValueOfCheckboxes();
    this.createPassword();
  }

  setListeners() {
    document.addEventListener('change', event => {
      this.getValueOfCheckboxes(event);
      this.getValueOfRange();
      this.createPassword();
    });
  }

  getValueOfRange() {
    this.lengthPassword = Number(this.range.value);
    this.showPassLength.value = this.range.value;
  }

  getValueOfCheckboxes(event) {
    this.checkboxesState = [];
    
    this.checkboxes.forEach(elem => {
      elem.checked ? this.checkboxesState.push(elem.value) : 0;
    });

    if (this.checkboxesState.length < 1) {
      this.checkboxes.forEach(elem => {
        if (elem == event.target) {
          elem.checked = true;
          this.checkboxesState.push(elem.value);
        }
      });
    }
  }

  getSymbolFromString(string) {
    const index = Math.floor(Math.random() * string.length);
    const char = string.split('').slice(index, index + 1);

    return char;
  }

  randChar() {
    const checkboxName = Math.floor(Math.random() * this.checkboxesState.length);

    switch (this.checkboxesState[checkboxName]) {
      case 'low':
        return this.getSymbolFromString(this.lowChar);
      case 'up':
        return this.getSymbolFromString(this.upperChar);
      case 'num':
        return this.getSymbolFromString(this.numbers);
      case 'symb':
        return this.getSymbolFromString(this.symbols);
      default:
        break;
    }
  }

  createPassword() {
    let password = '';

    for (let i = 0; i < this.lengthPassword; i++) {
      password += this.randChar();
    }
    this.passwordField.value = password;
  }
}

const passClass = new PassGenerator();





// @types/jest jest ts-jest ts-loader typescript