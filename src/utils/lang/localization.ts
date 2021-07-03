import { ILangStore } from '../interfaces/interfaces';


export default function localization(localLang: string) {
  const langStore: ILangStore = {
    rus: {
      title: 'Генератор паролей',
      mainHeader: 'Создайте свой пароль',
      passwordLengthHeader: 'Длина пароля',
      label: [
        'Нижний регистр',
        'Верхний регистр',
        'Цифры',
        'Символы',
      ],
      successfulCopy: 'Пароль скопирован',
    },
    en: {
      title: 'Password generator',
      mainHeader: 'Create your password',
      passwordLengthHeader: 'Password length',
      label: [
        'Lower case',
        'Upper case',
        'Numbers',
        'Symbols',
      ],
      successfulCopy: 'Password copied',
    }
  };

  switch (localLang) {
    case 'rus':
      return langStore.rus;

    case 'en':
      return langStore.en;

    default:
      return langStore.rus;
  }

}