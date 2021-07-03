import '../styles/index.sass';


class PassGenerator {
  lowChar: string;
  upperChar: string;
  numbers: string;
  symbols: string;
  classNameForCopied: string;
  checkboxesState: any;
  lengthPassword: number;
  passwordField: HTMLInputElement;
  refresh: HTMLElement;
  copy: HTMLElement;
  showPassLength: HTMLInputElement;
  range: HTMLInputElement;
  optionsContainer: HTMLElement;
  checkboxes: NodeListOf<HTMLInputElement>;
  
  constructor() {
    this.lowChar = 'abcdefghijklmnopqrstuvwxyz';
    this.upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.numbers = '0123456789';
    this.symbols = '^! ;#%$&:?|\"\'\`\\/.,*{}()[]-_+=@<>~';

    this.classNameForCopied = 'copied';

    this.checkboxesState = [];
    this.lengthPassword = 4;


    this.passwordField = document.querySelector('.password__input') as HTMLInputElement;
    this.refresh = document.querySelector('.js-password__image--refresh') as HTMLElement;
    this.copy = document.querySelector('.js-password__image--copy') as HTMLElement;

    this.showPassLength = document.querySelector('.js-options__input-text') as HTMLInputElement;
    this.range = document.querySelector('.js-options__input-range') as HTMLInputElement;
    this.optionsContainer = document.querySelector('.js-options') as HTMLElement;

    this.checkboxes = document.querySelectorAll('.js-options__checkbox');


    this.setListeners();

    this.getValueOfCheckboxes();
    this.createPassword();
  }

  setListeners() {
    this.optionsContainer.addEventListener('change', (event: Event) => {
      this.getValueOfCheckboxes(event);
    });

    this.refresh.addEventListener('click', (event: MouseEvent) => {
      this.getValueOfCheckboxes(event)
    });
    
    this.copy.addEventListener('click', () => {
      this.getCopyOfPassword()
    });
  }

  getCopyOfPassword() {
    if (!this.copy.classList.contains(this.classNameForCopied)) {
      this.passwordField.disabled = false;
      this.passwordField.select();
      document.execCommand('copy');

      this.passwordField.value = 'Пароль скопирован';
      this.passwordField.disabled = true;

      this.copy.classList.add(this.classNameForCopied);

      this.passwordField.blur();
    }
  }

  getValueOfCheckboxes(event?: Event) {
    this.copy.classList.remove(this.classNameForCopied);
    this.checkboxesState = [];

    this.checkboxes.forEach(elem => {
      elem.checked ? this.checkboxesState.push(elem.value) : 0;
    });

    if (this.checkboxesState.length < 1) {
      this.checkboxes.forEach(checkbox => {
        if (checkbox == event!.target) {
          checkbox.checked = true;
          this.checkboxesState.push(checkbox.value);
        }
      });
    } else {
      this.getValueOfRange();
    }
  }

  getValueOfRange() {
    this.lengthPassword = Number(this.range.value);
    this.showPassLength.value = this.range.value;

    this.createPassword();
  }

  getSymbolFromString(str: string): string[] {
    const index = Math.floor(Math.random() * str.length);
    const char = str.split('').slice(index, index + 1);

    return char;
  }

  randChar(): string[] {
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
        return [];
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


window.addEventListener('load', () => new PassGenerator());