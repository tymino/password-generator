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

  const activeLanguage = ref<ICurrentLang>(langStore[ELanguage.rus]);

  watch(toggleState, () => {
    activeLanguage.value = unref(toggleState)
      ? langStore[ELanguage.en]
      : langStore[ELanguage.rus];
  });

  return { activeLanguage };
};
