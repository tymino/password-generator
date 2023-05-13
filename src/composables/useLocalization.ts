import { Ref, ref, unref, watch } from 'vue';

import { ILocalization, ICurrentLang } from '@/types/ILocalization';
import { ELanguage } from '@/types/ELanguage';

export const useLocalization = (toggleState: Ref<boolean>) => {
  const langStore: ILocalization = {
    rus: {
      tabTitle: 'Генератор паролей',
      headerMain: 'Создайте пароль',
      headerLengthPassword: 'Длина пароля',
      labelCheckbox: ['Нижний регистр', 'Верхний регистр', 'Цифры', 'Символы'],
      successfulCopy: 'Пароль скопирован',
    },
    en: {
      tabTitle: 'Password generator',
      headerMain: 'Create password',
      headerLengthPassword: 'Password length',
      labelCheckbox: ['Lower case', 'Upper case', 'Numbers', 'Symbols'],
      successfulCopy: 'Password copied',
    },
  };

  const tabTitle = ref(langStore[ELanguage.rus].tabTitle);
  const headerMain = ref(langStore[ELanguage.rus].headerMain);
  const headerLengthPassword = ref(
    langStore[ELanguage.rus].headerLengthPassword
  );
  const labelCheckbox = ref(langStore[ELanguage.rus].labelCheckbox);
  const successfulCopy = ref(langStore[ELanguage.rus].successfulCopy);

  const setActiveLanguage = () => {
    const prop = unref(toggleState) ? 'en' : 'rus';

    const {
      tabTitle: title,
      headerMain: header,
      headerLengthPassword: lengthPass,
      labelCheckbox: labelBox,
      successfulCopy: copy,
    } = langStore[ELanguage[prop]];

    tabTitle.value = title;
    headerMain.value = header;
    headerLengthPassword.value = lengthPass;
    labelCheckbox.value = labelBox;
    successfulCopy.value = copy;
  };

  watch(toggleState, setActiveLanguage);

  setActiveLanguage();

  return {
    tabTitle,
    headerMain,
    headerLengthPassword,
    labelCheckbox,
    successfulCopy,
  };
};
