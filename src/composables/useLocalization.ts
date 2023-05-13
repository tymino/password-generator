import { Ref, ToRefs, reactive, toRef, toRefs, unref, watch } from 'vue';

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

  const activeLanguage = reactive(langStore[ELanguage.rus]);

  const setActiveLanguage = (): ToRefs<ICurrentLang> => {
    const prop = unref(toggleState) ? 'en' : 'rus';

    console.log('lang', toggleState.value);

    return toRefs(Object.assign(activeLanguage, langStore[ELanguage[prop]]));
  };

  watch(toggleState, setActiveLanguage);

  setActiveLanguage();

  // return toRefs(Object.assign(activeLanguage, langStore[ELanguage['en']]));
};
